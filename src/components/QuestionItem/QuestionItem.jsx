import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { QuizContext } from "../../context/QuizContext";
import "./QuestionItem.scss";
import { useContext } from "react";

export default function QuestionItem({ question, eventKey }) {
  const { dispatch } = useContext(QuizContext);

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        <div className="question-header">
          <span className="question-text">{question.question}</span>
          {question.result && (
            <span className={`question-result ${question.result.toLowerCase()}`}>
              {question.result}
            </span>
          )}
        </div>
      </Accordion.Header>

      <Accordion.Body>
        <Card body>
          <h6>Réponse :</h6>
            <p>{question.answer}</p>
            <div className="d-flex gap-2">
              <Button
                variant="success"
                disabled={!!question.result} 
                onClick={() =>
                  dispatch({ type: "VALIDATE", id: question.id, result: "Juste" })
                }
              >
                Juste
              </Button>
              <Button
                variant="danger"
                disabled={!!question.result} 
                onClick={() =>
                  dispatch({ type: "VALIDATE", id: question.id, result: "Faux" })
                }
              >
                Fausse
              </Button>
            </div>
        </Card>
      </Accordion.Body>
    </Accordion.Item>
  );
}
