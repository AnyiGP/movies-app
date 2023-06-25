import { Form, Row } from "react-bootstrap";
import { FC, useEffect, useState } from "react";
import { Props } from "./type";

const SearchForm: FC<Props> = ({ onSearch }) => {
  //1- TRAER TODAS LA MOVIES
  //DESDE EL SERVICIO O DESDE EL HOOK

  //2- FILTRAR A MEDIDA QUE EL USUARIO ESCRIBE EN EL INPUT

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
