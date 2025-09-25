import { useState } from "react";
import { Container } from "react-bootstrap";
import QuizAccordion from "./components/QuizAccordion/Quiz.jsx";

function App() {
  const [category, setCategory] = useState("Toutes");
 

  return (
    <>
     <main>
       <Container className="mt-4">
        <h1 className="mb-4">Quiz Interactif</h1>
        <QuizAccordion category={category} />
      </Container>
     </main>
    </>
  )
}

export default App
