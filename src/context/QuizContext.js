import { createContext, useEffect, useReducer } from "react";

export const QuizContext = createContext();

export const quizReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_QUIZ":
      return {
        quizzes: [action.payload, ...state.quizzes],
      };
    default:
      return state;
  }
};

export const QuizContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, {
    quizzes: [],
  });

  useEffect(() => {
    const fetchInitalQuiz = async () => {
      const response = await fetch("/quizData.json");
      const data = await response.json();

      dispatch({ type: "CREATE_QUIZ", payload: data });
    };

    fetchInitalQuiz();
  }, []);

  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
