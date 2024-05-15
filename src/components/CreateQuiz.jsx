import React from "react";
import CreateQuestion from "./CreateQuestion";

const CreateQuiz = () => {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" />

      <label htmlFor="description">Description</label>
      <input type="text" id="description" name="description" />

      <label htmlFor="url">URL</label>
      <input type="url" id="url" name="url" />

      <CreateQuestion />
    </form>
  );
};

export default CreateQuiz;
