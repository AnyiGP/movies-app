import { useContext } from "react";
import { StoreContext } from "../../contexts";
import { useEffect, useState } from "react";
import { apiMovies } from "../../utils/axios";
import { Movie, PartialMovies } from "../../types";
import { useParams } from "react-router-dom";

const useMovies = () => {
  const [allMovies, setAllMovies] = useState([]);

  const [movies, setMovies] = useState([]);

  const [popular, setPopular] = useState([]);

  const [top_rated, setTopRated] = useState([]);

  const [estrenos, setEstrenos] = useState([]);

  const [populares, setPopulares] = useState([]);

  const [movieId, setMovieId] = useState<PartialMovies>();

  const { id } = useParams();
////////////////////////////
  useEffect(() => {
    apiMovies
      .get("/movie/now_playing")
      .then((response) => setAllMovies(response.data.results));
  }, []);
/////////////////////////////

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

  useEffect(() => {
    apiMovies
      .get("/movie/popular")
      .then((response) => setPopulares(response.data.results));
  }, []);

  //ALTERNATIVA CON EL PEDIDO A LA API DE SERVICES PERO NO ANDA
  // useEffect(() => {
  //   getPopular().then((response) => setPopulares(response.data.results));
  // }, []);

  ///////////HAGO LO MISMO EN SERVICES////////////////////
  // useEffect(() => {
  //   apiMovies
  //     .get(`/movie/${id}`) //594767 ${item.id}
  //     .then((response) => setMovieId(response.data.results));
  // }, [id]);

  // console.log(movieId)
  /////////////////////////////////////



  return {
    allMovies,
    movies,
    popular,
    top_rated,
    estrenos,
    populares,
    // movieId
  };
};

export { useMovies };
