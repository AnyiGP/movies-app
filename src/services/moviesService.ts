import {} from "../helpers/mapToArray";
import { MovieType } from "../types";
import { api, apiMovies } from "../utils/axios";

//trae todas las pelis
const getAll = async () => {
  const response = await apiMovies.get("/movie/");

    // console.log(response)
  return response.data;
};

export const serviceUsers = { getAll };
// y 'este d'onde lo uso?

