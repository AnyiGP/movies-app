import { FC, useEffect } from "react";
import { useMe } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";

const publicRoutes = ["/login", "/sign-up"];

const withAuth = (Component: FC): FC => {
  const Autenticated = () => {
    // va a ir sacando la información del hook useMe para saber si un usuario está o no autenticado. Si est'a se llama 'me'

    const { me } = useMe();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      console.log(me, location.pathname);
      if (me && publicRoutes.includes(location.pathname)) {
        navigate("/");
      }

      if (me === null && !publicRoutes.includes(location.pathname))
        navigate("/login");
    }, [me, location, navigate]);

    return <Component />;
  };
  return Autenticated;
};

export { withAuth };
