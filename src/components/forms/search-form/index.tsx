// import { Layout } from "../../components";

import { Button, Form, Row } from "react-bootstrap";
import { useState } from "react";

// const defaultValues = {
//   text: ''
// }

// const [fields, setFields] = useState({text: ''}) //valor por defecto en el form


const SearchForm = () => {
  //1- TRAER TODAS LA MOVIES
//DESDE EL SERVICIO O DESDE EL HOOK

  //2- FILTRAR A MEDIDA QUE EL USUARIO ESCRIBE EN EL INPUT
  //3- MOSTRAR EL RESULTADO DEL FILTRADO EN CARDS EN UNA GRILLA EN LA PAGINA DE BUSQUEDA

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
            // {...register("pass")} //
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
