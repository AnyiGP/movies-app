import { CardMovie, Layout } from "../../components";
import { useEffect, useState } from "react";
import { apiMovies } from "../../utils/axios";
import { Movie } from "../../types";
import { withAuth } from "../../hoc";
import { Carrousel } from "../../components/commons";
import { useMovies } from "../../hooks";

const HomePage = () => {
 
 const { movies } = useMovies()
 
 ///////////////////////////////
 
  // //   //ejemplo de movies, creo un estado
  // const [movies, setMovies] = useState([]);

  // //   //pido a la api
  // useEffect(() => {
  //   apiMovies
  //     .get("/movie/top_rated")
  //     .then((response) => setMovies(response.data.results));

  //   //TENGO QUE HACER LO DE ARRIBA EN EL SERVICIO DE API MOVIES
  // }, [movies]);

  /////////////////////////

  // useEffect(() => {
  //   loadMovies()
  // }, [])

  return (
    <>
      <Layout>
        Home
        <ul>
          {/* Slide 5 pelis+ Carrousel populares 10 pelis + Carrousel ultimos-lanzamientos 10 pelis */}
          {movies.map((movie: Movie) => (
            <>
              <Carrousel {...movie} />
              {/* <CardMovie {...movie} /> */}
              {/* <img src={`${`https://image.tmdb.org/t/p/original` + movie.backdrop_path}`} alt="" /> 
              //COMPONENTE SLIDE
              //COMPONENTE CORROUSEL POPULARES
              //COMPONENTE CARROUSEL ULTIMOS LANZAMIENTOS
       */}
            </>
          ))}
        </ul>
      </Layout>
    </>
  );
};

// export { Home };
export const Home = withAuth(HomePage);
