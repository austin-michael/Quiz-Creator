import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import CreateQuestion from "./CreateQuestion";
import { useQuizContext } from "../hooks/useQuizContext";
import { getCurrentDateTime } from "../utils/date";

const CreateQuiz = () => {
  const navigate = useNavigate();

  const { dispatch } = useQuizContext();

  const createQuiz = (e) => {
    e.preventDefault();

    console.log("create quiz");

    const { title, description, url } = e.target;

    const quiz = {
      created: getCurrentDateTime(),
      description: description.value,
      id: uuidv4(),
      questions_answers: [],
      title: title.value,
      url: url.value,
    };

    dispatch({ type: "CREATE_QUIZ", payload: quiz });

    navigate("/");
  };

  return (
    <div className="quiz-container">
      <form onSubmit={createQuiz} className="quiz-form">
        <h2>Quiz</h2>

        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" />

        <label htmlFor="url">URL</label>
        <input type="url" id="url" name="url" />

        <CreateQuestion />

        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default CreateQuiz;
