import { mapToArray } from "../helpers/mapToArray";
import { Movie } from "../types";
import { apiMovies } from "../utils/axios";

type GetAllPayload = {
  text: string
}

//trae todas las pelis
const getAll = async (
  // movie: Movie
  searchQuery: GetAllPayload
  ): Promise<Movie[]> => {
  const response = await apiMovies.get("/movie/");

  let data = await response.data() 
  
  data = mapToArray<Movie>(data)

  return data
  // console.log(response.data)
  // return response.data;
};

//trae ultimos lanzamientos
const getPopular = async () => {
  const response = await apiMovies.get("/movie/popular");

  return response.data;
};

/////////////////////////
const getById = async (id: string) => {
  const response = await apiMovies.get(`/movie/${id}`);
  //como hago para traerme el id del click ej 594767

  // console.log(response.data)
  return response.data;
};
////////////////////////////

const getSearch = async (query: string | null) => {
  const response = await apiMovies.get("/search/movie", {params:
    {query: query},});

    console.log(response.data)
  return response.data;
};

export { getAll, getPopular, getById, getSearch };
