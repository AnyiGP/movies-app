import { Form, Row } from "react-bootstrap";
import { FC, useEffect, useState } from "react";
import { Props } from "./type";

// type Props = {
//   onSearch: (param: string) => void
// }

const SearchForm: FC<Props> = ({ onSearch }) => {
 
  const [fields, setFields] = useState(""); //valor por defecto en el campo del formulario

  useEffect(() => {
    onSearch(fields);
  }, [fields]);

  return (
    <Form className="px-5 mt-5">
      <Row className="mb-3">
        <Form.Group>
          <Form.Label>Ingresar búsqueda</Form.Label>
          <Form.Control
            type="text"
            placeholder="Título"
            name="query"
            value={fields}
            onChange={(e) => setFields(e.target.value)}
          />
        </Form.Group>
      </Row>
    </Form>
  );
};

export { SearchForm };
