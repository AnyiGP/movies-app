import { useEffect } from "react";
import { tokenGenerator } from "../../helpers/tokenGenerator";
import { serviceUsers } from "../../services/users";
import { LoginForm, User } from "../../types";

const useMe = () => {
  // const [storage, setStorage] = useLocalStorage()

  useEffect(() => {
    loginWithToken();
  }, []);

  const login = async ({ email, password }: LoginForm) => {
    const user = await serviceUsers.getBy("email", email);

    if (user?.password === password) {
      const token = tokenGenerator();
      serviceUsers.update({ id: user.id, token });
      localStorage.setItem("token", token);
      // console.log('login correcto')

      //redireccionar a home
    } else {
      console.log("login incorrecto");
    }
    // console.log(email, password)
    console.log(user);
  };

  const signUp = (user: Omit<User, "id">) => {};

  const forgotPassword = () => {};

  const loginWithToken = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = await serviceUsers
        // getByEmail
        .getBy("token", token);
    }
  };
  const logOut = () => {};

  return { login, signUp, forgotPassword, loginWithToken, logOut };
};

export { useMe };
