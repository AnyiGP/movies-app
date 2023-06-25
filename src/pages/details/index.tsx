import { useState, useEffect } from "react";
import { CardMovie, Layout } from "../../components";
import { withAuth } from "../../hoc";
import { apiMovies } from "../../utils/axios";
import { Movie } from "../../types";
// import { getById } from "../../services/moviesService";
import { useMovies } from "../../hooks";

const DetailsPage = () => {
  const { movieId } = useMovies();
  // const [movieId, setMovieId] = useState([]);

  
  

  // useEffect((id: string) => {
  //   apiMovies
  //     .get(`/movie/${id}`)
  //     .then((response) => setMovieId(response.data.results));
  // }, []);

  console.log(movieId)

  return (
    <>
      Detalles
      <Layout>
        {/* Cuando el usuario hace click en una movie debe llevar/cambiar a page detalles. Al desplegarse Card grande con detalles reutilizable + botón para reproducir el triler */}
      <CardMovie items={movieId}/>

      </Layout>
    </>
  );
};

// export { Details };
export const Details = withAuth(DetailsPage)