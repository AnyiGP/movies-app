import { Layout, SignUpForm } from "../../components";
import { withAuth } from "../../hoc";

const SignupPage = () => {
  return (
    <Layout>
      {/* Formulario de sign-up */}
      Formulario Sign-Up
      <SignUpForm />
    </Layout>
  );
};

export const Signup = withAuth(SignupPage);
