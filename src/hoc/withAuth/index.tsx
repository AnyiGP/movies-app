import { FC } from "react";

const publicRoutes = ["/login", "/sign-up"]

const withAuth = (Component: FC): FC => {
  const Autenticated = () => {

    

    return <Component />;
  };
  return Autenticated;
};

export { withAuth };
