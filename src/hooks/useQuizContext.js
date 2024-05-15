import { useContext } from "react";

import { QuizContext } from "../context/QuizContext";

export const useQuizContext = () => {
  const context = useContext(QuizContext);

  if (!context) {
    throw Error("useQuizContext must be used inside the QuizContextProvider");
  }

  return context;
};
