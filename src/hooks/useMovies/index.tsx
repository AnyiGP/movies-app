import { useContext } from "react";
import { StoreContext } from "../../contexts";
import { useEffect, useState } from "react";
import { apiMovies } from "../../utils/axios";

const useMovies = () => {
  //Creo un estado
  const [movies, setMovies] = useState([]);

  //Pedido a la api
  useEffect(() => {
    apiMovies
      .get("/movie/top_rated")
      .then((response) => setMovies(response.data.results));
  }, [movies]);

  return { movies };
};

export { useMovies };
