import { useState } from "react";
import { Container } from "react-bootstrap";
import QuizAccordion from "./components/QuizAccordion/QuizAccordion.jsx";
import FilterQuiz from "./components/FilterQuiz/FilterQuiz.jsx";

function App() {
  const [category, setCategory] = useState("Toutes");

  return (
    <Container className="mt-4" as="main">
      <h1 className="mb-4">Quiz Interactif</h1>
      <FilterQuiz setCategory={setCategory} />
      <QuizAccordion category={category} />
    </Container>
  );
}

export default App;
