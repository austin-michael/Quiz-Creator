import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QuizContextProvider } from "./context/QuizContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QuizContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QuizContextProvider>
);
