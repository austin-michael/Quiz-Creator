import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateQuiz from "./components/CreateQuiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateQuiz />} />
    </Routes>
  );
}

export default App;
