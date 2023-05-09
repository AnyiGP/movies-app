// import { Layout } from "../../components";

import { Button, Form, Row } from "react-bootstrap";

const SearchForm = () => {
  return (
    <Form
      className="px-5 mt-5"
      // onSubmit={handleSubmit(onSubmit)}
    >
      <Row className="mb-3">
        <Form.Group
          // as={Col}
          controlId="formPassword"
        >
          <Form.Label>Ingresar búsqueda</Form.Label>
          <Form.Control
            type="text"
            placeholder="Título"
            // {...register("pass")}
          />
        </Form.Group>
      </Row>

      <Button
        variant="primary"
        type="submit"
        // onClick={`BUSCAR MOVIE CUANDO COINCIDA`}
      >
        Buscar
      </Button>

      <Button
        variant="secondary"
        type="button"
        // onClick={handleReset}
      >
        Limpiar
      </Button>
    </Form>
  );
};

export { SearchForm };
