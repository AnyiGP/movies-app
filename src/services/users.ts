import { SignUpPayload} from "../types";
import { api } from "../utils/axios";

const add = async (userPrueba: SignUpPayload) => {
 
  const response = await api.post("/users.json", userPrueba);

//   console.log(response)
return response.data

};

const getAll = async () => {
    
    const response = await api.get("/users.json");
  
  //   console.log(response)
  return response.data
  
  };
  

export const serviceUsers = { add, getAll };
