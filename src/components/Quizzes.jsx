import React from "react";
import { useQuizContext } from "../hooks/useQuizContext";
import QuizPreview from "./QuizPreview";

const Quizzes = () => {
  const { quizzes } = useQuizContext();
  console.log(quizzes);

  return (
    <div>
      <h2>Quizzes</h2>
      {quizzes.map((quiz) => (
        <React.Fragment key={quiz.id}>
          <QuizPreview quiz={quiz} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Quizzes;
