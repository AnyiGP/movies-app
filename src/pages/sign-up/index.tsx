import { Link } from "react-router-dom";
import { Layout, SignUpForm } from "../../components";
import { withAuth } from "../../hoc";

const SignupPage = () => {
  return (
    <Layout>
      {/* Formulario de sign-up */}
      Formulario Sign-Up
      <SignUpForm />
      <Link to="/login">Ir a Login</Link>
    </Layout>
  );
};

export const Signup = withAuth(SignupPage);
