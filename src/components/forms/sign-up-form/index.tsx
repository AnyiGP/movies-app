// // import { Layout } from "../../components";
// const SignUpForm = () => {
//     return
//   //   <Layout>Login</Layout>;
//   };
//   export { SignUpForm };
//--------------------------------------//

import { Button, Form, Col, Row } from "react-bootstrap";
import { api } from "../../../utils/axios";
import { serviceUsers } from "../../../services/users";
import { useForm } from "react-hook-form";
import { SignUpForm } from "../../../types";
import { useEffect } from "react";

//----------------------//
// import axios from 'axios';
// const firebaseUrl = 'https://movies-app-7da5f-default-rtdb.firebaseio.com/users.json';

// const data = {
//   nombre: "Anyi",
//   apellido: "Godoy"
// };

// axios.post(firebaseUrl, data)
//   .then((response) => {
//     console.log('Datos guardados correctamente en Firebase:', response.data);
//   })
//   .catch((error) => {
//     console.error('Error al guardar datos en Firebase:', error);
//   });
//---------------------//

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm<SignUpForm>();

  const onSubmit = (data: SignUpForm) => {
    serviceUsers.add(data);

    //   {
    //   ...data,
    //   birthdate: new Date(data.birthdate),
    // });
  };

  // useEffect(() => {
  //   serviceUsers
  //     .getAll()
  //     .then((data) => console.log(data))
  //     .catch((error) => {
  //       console.error("Error al guardar datos en Firebase:", error);
  //     });
  //     // reset({
  //     //   name: "",
  //     //   lastname: "",
  //     //   email: "",
  //     //   password: "",
  //     //   // birthdate: "" me tira error
  //     // });
  // }, []);

  const handleReset = () => {
    reset({
      name: "",
      lastname: "",
      email: "",
      password: "",
      // birthdate: "" me tira error
    });
  };

  //-----------------------//
  // useEffect (() => {
  //   serviceUsers.getAll().then
  // }, [])
  //-----------------------//

  return (
    <Form className="px-5 mt-5" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" {...register("name")} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastname">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Apellido"
          {...register("lastname")}
        />
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
      
      <Button variant="secondary" type="button" onClick={handleReset}>
        Limpiar
      </Button>
    </Form>
  );
};

export { SignUp };
