// import { Layout } from "../../components";
import { Button, Form, Col, Row } from "react-bootstrap";
import { api } from "../../../utils/axios";
import { serviceUsers } from "../../../services/users";
import { useForm } from "react-hook-form";
import { LoginForm } from "../../../types";
import { useEffect } from "react";
import { useMe } from "../../../hooks";

const Login = () => {
  const { register, handleSubmit, reset } = useForm<LoginForm>();

  const { login } = useMe();

  const onSubmit = (data: LoginForm) => {
    login(data);
    // .add(data);
  };

  // useEffect(() => {
  //   serviceUsers
  //     .getAll()
  //     .then((data) => console.log(data))
  //     .catch((error) => {
  //       console.error("Error al guardar datos en Firebase:", error);
  //     });
  //   // reset({
  //   //   email: "",
  //   //   password: "",
  //   // });
  // }, []);

  const handleReset = () => {
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <Form className="px-5 mt-5" onSubmit={handleSubmit(onSubmit)}>
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

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>

      <Button variant="secondary" type="button" onClick={handleReset}>
        Limpiar
      </Button>
    </Form>
  );
};

export { Login };
