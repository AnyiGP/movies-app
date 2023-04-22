import { useEffect, useState, useContext } from "react";
import { tokenGenerator } from "../../helpers/tokenGenerator";
import { serviceUsers } from "../../services/users";
import { LoginForm, User } from "../../types";
import { useFormContext } from "react-hook-form";
import { AuthContext } from "../../contexts/auth";

const useMe = () => {
  // const [storage, setStorage] = useLocalStorage()

  const { me, setMe  } = useContext(AuthContext)

//   const [me, setMe] = useState<Partial<User>>();

    // useEffect(() => {
    // //   console.log(me)
    //   loginWithToken();
    // }, [me]);

  const login = async ({ email, pass }: LoginForm) => {
    // console.info("login")

    
    // const { id, name, lastname, password } 
    const user
    = await serviceUsers.getBy(
      "email",
      email
    );

    if (user && user.password === pass) {
    
        const {id, name, lastname} = user

      const token = tokenGenerator();
      serviceUsers.update({ id, token });
      localStorage.setItem("token", token);
      // console.log('login correcto')

      //redireccionar a home

      setMe({ id, name, lastname, email, token });
    } else {
      console.log("login incorrecto");
    }
  };

  const signUp = (user: Omit<User, "id">) => {};

  const forgotPassword = () => {};

  const loginWithToken = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const { id, name, lastname, email } = (await serviceUsers.getBy(
        "token",
        token
      )) as User;
      //   console.log(user)
      setMe({ id, name, lastname, email });
    }
  };
  const logOut = () => {};

  return { me, login, signUp, forgotPassword, loginWithToken, logOut };
};

export { useMe };
