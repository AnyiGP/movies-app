import { mapToArray } from "../helpers/mapToArray";
import { Movie } from "../types";
import { apiMovies } from "../utils/axios";

//trae todas las pelis
const getAll = async (movie: Movie) => {
  const response = await apiMovies.get("/movie/");

  // console.log(response.data)
  return response.data;
};

//trae ultimos lanzamientos
const getLastRelases = async () => {
  const response = await apiMovies.get("/movie/latest_releases");

  return response.data.results;
};

export { getAll, getLastRelases };
// y 'este d'onde lo uso?
