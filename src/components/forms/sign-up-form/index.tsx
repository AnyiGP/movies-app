import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { api } from "../../../utils/axios";
import { serviceUsers } from "../../../services/users";

import { useForm } from "react-hook-form";
import { SignUpForm } from "../../../types";

// import { Layout } from "../../components";

const SignUpForm = () => {
  const { register, handleSubmit } = useForm<SignUpForm>();

  const onSubmit = (data: SignUpForm) => {
    serviceUsers.add({
      ...data, 
      birthdate: new Date(data.birthdate)
    });
  };

    return 
  //   <Layout>Login</Layout>;
  return (
    <Form className="px-5 mt-5" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control placeholder="Nombre" {...register("name")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastname">
        <Form.Label>Apellido</Form.Label>
        <Form.Control placeholder="Apellido" {...register("lastname")} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            {...register("email")}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formBirthday">
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control type="date" {...register("birthdate")} />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
  };
  
  export { SignUpForm };  