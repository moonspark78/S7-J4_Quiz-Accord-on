import Accordion from "react-bootstrap/Accordion";
import { useContext } from "react";
import QuestionItem from "../QuestionItem/QuestionItem";
import { QuizContext } from "../../context/QuizContext";

export default function QuizAccordion({ category }) {
  const { state } = useContext(QuizContext);

  const filtered = category === "Toutes"
    ? state
    : state.filter((q) => q.category === category);

  return (
    <Accordion>
      {filtered.map((q, index) => (
        <QuestionItem key={q.id} question={q} eventKey={String(index)} />
      ))}
    </Accordion>
  );
}
