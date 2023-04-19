import { SignUpPayload } from "../types";
import { User } from "../types"
import { api } from "../utils/axios";

const add = async (
  userPrueba: 
  // User
  SignUpPayload
  ) => {

  // const userPrueba = {
  //   name: "Anyi",
  //   lastname: "Godoy"
  // }
  //le tengo que pasar un objeto con los datos que ingrese el usuario

  // const options = {
  //   method: 'POST',
  //   body: JSON.stringify(userPrueba)
  // }

  // const response = await fetch('https://movies-app-7da5f-default-rtdb.firebaseio.com/', options)

  //-------------------------------//

  const response = await api.post("/users.json", userPrueba);

    // console.log(response)
  return response.data;
};

const getAll = async () => {
  const response = await api.get("/users.json");

    console.log(response)
  return response.data;
};

export const serviceUsers = { add, 
  getAll 
};
