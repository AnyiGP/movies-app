import { serviceUsers } from "../../services/users";
import { LoginForm, User } from "../../types";

const useMe = () => {
  const login = async ({ email, password }: LoginForm) => {
    const user = await serviceUsers.getByEmail(email);

    if (user?.password === password) {
        console.log('login correcto')
        //generar un token
        //guardar el token el la bbdd
        //redireccionar a home
    } else {
        console.log('login incorrecto')
    }
    // console.log(email, password)
    console.log(user);
  };

  const signUp = (user: Omit<User, "id">) => {};

  const forgotPassword = () => {};
  const loginWithToken = () => {};
  const logOut = () => {};

  return { login, signUp, forgotPassword, loginWithToken, logOut };
};

export { useMe };
