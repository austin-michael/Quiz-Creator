import React from "react";

const QuizPreview = ({ quiz }) => {
  const { title, description, url, score } = quiz;
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{url}</span>
      <span>{score}</span>
    </div>
  );
};

export default QuizPreview;
