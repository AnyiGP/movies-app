import { mapToArray } from "../helpers/mapToArray";
import { SignUpPayload } from "../types";
import { User } from "../types";
import { api } from "../utils/axios";

const add = async (
  userPrueba: // User
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

const getAll = async (): Promise<User[]> => {
  const response = await api.get("/users.json");

  // console.log(response);
  return mapToArray(response.data);
};

const getByEmail = async (email: string) => {
  const users = await getAll();
  const user = users.find((user) => user.email === email);

  // console.log(response);
  return user;
};

const update = ({ id, ...rest }: Partial<User>) => {
  const response = api.patch(`/users/${id}.json`, rest);
};

export const serviceUsers = { add, getAll, getByEmail, update };
