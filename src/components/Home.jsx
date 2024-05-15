import React, { useState } from "react";
import { Link } from "react-router-dom";
import Quizzes from "./Quizzes";

const Home = () => {
  const [quizData, setQuizData] = useState({
    created: "",
    description: "",
    id: null,
    modified: "",
    questions_answers: [],
    score: null,
    title: "",
    url: "",
  });

  return (
    <div>
      <h1>Quiz Creator</h1>
      <Quizzes />
      <Link to={"/create"}>Create New Quiz</Link>
    </div>
  );
};

export default Home;
