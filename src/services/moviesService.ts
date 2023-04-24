import {} from "../helpers/mapToArray";
import { Movie } from "../types";
import { apiMovies } from "../utils/axios";

//trae todas las pelis
const getAll = async (movie: Movie) => {
  const response = await apiMovies.get("/movie/");

  // console.log(response.data)
  return response.data;
};

export const serviceMovies = { getAll };
// y 'este d'onde lo uso?
