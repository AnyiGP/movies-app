import { useContext } from "react";
import { StoreContext } from "../../contexts";
import { useEffect, useState } from "react";
import { apiMovies } from "../../utils/axios";

const useMovies = () => {
  const [movies, setMovies] = useState([]);

  const [popular, setPopular] = useState([]);
  
  const [top_rated, setTopRated] = useState([]);

  useEffect(() => {
    apiMovies
      .get("/movie/now_playing")
      .then((response) => setMovies(response.data.results.splice(0, 8)));
  }, []);
  
  useEffect(() => {
    apiMovies
      .get("/movie/popular")
      .then((response) => setPopular(response.data.results.splice(0, 10)));
  }, []);
  
  useEffect(() => {
    apiMovies
      .get("/movie/top_rated")
      .then((response) => setTopRated(response.data.results.splice(0, 10)));
  }, []);

  return { movies, popular, top_rated };
};

export { useMovies };
