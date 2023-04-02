import { Layout } from "../../components";
import { useEffect, useState } from "react";
import { apiMovies } from "../../utils/axios";
import { Movie } from '../../types'

const Home = () => {
  //   //ejemplo de movies, creo un estado
  const [movies, setMovies] = useState([]);

  //   //pido a la api
  useEffect(() => {
    apiMovies.get("/movie/top_rated").then((response) =>
      setMovies(response.data.results));
    //   console.log(response.data.results)
    // );

    //TENGO QUE HACER LO DE ARRIBA EN EL SERVICIO DE API MOVIES

  }, []);

  return (
    <>
      <Layout>
        Home
        <ul>
          {/* Slide 5 pelis+ Carrousel populares 10 pelis + Carrousel ultimos-lanzamientos 10 pelis */}
          {movies.map(movie => (
            <li>
                {/* {movie.title} */}
                </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export { Home };
