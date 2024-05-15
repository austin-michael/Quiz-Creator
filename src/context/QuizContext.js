import { createContext, useReducer } from "react";

export const QuizContext = createContext();

export const quizReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_QUIZ":
      // console.log(state);
      // console.log(action.payload);
      return {
        quizzes: [action.payload, ...state.quizzes],
      };
    default:
      return state;
  }
};

export const QuizContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, {
    quizzes: [
      {
        created: null,
        description: "",
        id: "",
        modified: null,
        questions_answers: [],
        score: null,
        title: "",
        url: "",
      },
    ],
  });

  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
