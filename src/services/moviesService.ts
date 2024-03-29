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
const getPopular = async () => {
  const response = await apiMovies.get("/movie/popular");

  return response.data.results;
};

/////////////////////////
const getById = async (id: string) => {
  const response = await apiMovies.get(`/movie/${id}`);
  //como hago para traerme el id del click ej 594767

  // console.log(response.data)
  return response.data;
};
////////////////////////////

export { getAll, getPopular, getById };
