import React from "react";
import CreateAnswer from "./CreateAnswer";

/*
  "answer_id": null,
  "answers": [],
  "feedback_false": "question 1 false feedback",
  "feedback_true": "question 1 true feedback",
  "id": 53,
  "text": "question 1 text"
*/

const CreateQuestion = () => {
  return (
    <>
      <label htmlFor="text">Text</label>
      <input type="text" id="text" name="text" />

      <label htmlFor="feedback_true">Feedback True</label>
      <input type="text" id="feedback_true" name="feedback_true" />

      <label htmlFor="feedback_false">Feedback False</label>
      <input type="text" id="feedback_false" name="feedback_false" />

      <CreateAnswer />
    </>
  );
};

export default CreateQuestion;
