import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Quiz Creator</h1>
      <Link to={"/create"}>Create New Quiz</Link>
    </div>
  );
};

export default Home;
