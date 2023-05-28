import { Link } from "react-router-dom";
import { Layout, LoginForm } from "../../components";
import { withAuth } from "../../hoc";
import { useMe } from "../../hooks";

const LoginPage = () => {
  // const { login } = useMe()

  // const handleSubmit = () => {

  //   // login(user, pass)
  // }

  return (
    <Layout>
      Formulario Login
      <LoginForm />
      <Link to="/sign-up">Registrate</Link>
    </Layout>
  );
};

export const Login = withAuth(LoginPage);
