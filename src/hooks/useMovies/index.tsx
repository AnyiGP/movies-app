import { useContext } from "react";
import { StoreContext } from "../../contexts";
import { useEffect, useState } from "react";
import { apiMovies } from "../../utils/axios";

const useMovies = () => {
  const [movies, setMovies] = useState([]);

  const [popular, setPopular] = useState([]);
  
  const [top_rated, setTopRated] = useState([]);

  const [estrenos, setEstrenos] = useState([]);


  useEffect(() => {
    apiMovies
      .get("/movie/now_playing")
      .then((response) => setMovies(response.data.results.splice(0, 5)));
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

useEffect(() => {
    apiMovies
      .get("/movie/upcoming")
      .then((response) => setEstrenos(response.data.results));
  }, []);
  return { movies, popular, top_rated, estrenos };
};

export { useMovies };
