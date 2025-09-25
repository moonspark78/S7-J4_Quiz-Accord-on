import { Form } from "react-bootstrap";

export default function FilterQuiz({ setCategory }) {
  return (
    <section>
    <p>Filtrer par catégorie.</p>
    <Form.Select
      className="mb-4"
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="Toutes">Toutes</option>
      <option value="Math">Math</option>
      <option value="Science">Science</option>
      <option value="Histoire">Histoire</option>
    </Form.Select>
    </section>
  );
}
