import Accordion from "react-bootstrap/Accordion";
import useQuiz from "../../hooks/useQuiz";
import QuestionItem from "../QuestionItem/QuestionItem";

export default function QuizAccordion({ category }) {
  const { state } = useQuiz();

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
