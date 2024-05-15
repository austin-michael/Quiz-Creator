import React from "react";

/*
  {
    "id": 122,
    "is_true": false,
    "text": "question 1 answer 1 false"
  }
*/

const CreateAnswer = () => {
  return (
    <>
      <h2>Answers</h2>
      <label htmlFor="answer">Answer</label>
      <input type="text" id="answer" name="answer" />
      <label htmlFor="is_true">Correct Answer</label>
      <input type="checkbox" id="is_true" name="is_true" />
    </>
  );
};

export default CreateAnswer;
