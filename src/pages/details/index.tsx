import { FC } from "react";
import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { useParams } from "react-router-dom";
import { Movie, PartialMovies } from "../../types";
import { getById } from "../../services/moviesService";
import { Container } from "react-bootstrap";
import { useMovies } from "../../hooks";
import { apiMovies } from "../../utils/axios";
import { idText } from "typescript";


// const DetailsPage: FC<PartialMovies> = ({ items }) => {
const DetailsPage = () => {
  /////////////////////////////////
  const [movieId, setMovieId] = useState<Movie>();
  const { id } = useParams();

  useEffect(() => {
    getById(id || "").then((response) => {
      setMovieId(response);
    });
  }, [idText]);

  console.log(movieId);

  /////////////////////////////////
  // const { id } = useParams();
  // const [movieId, setMovieId] = useState([]);

  // useEffect(() => {
  //   getById(id || "").then((response) => setMovieId(response));
  // }, [id]);

  // console.log(movieId);
  //////////////////////////////////////
  
  return (
    <>
      <Layout>
        {/* Card con detalles reutilizable + botón para reproducir el triler */}
        <Container>
          <div>
            <h2>DETALLES</h2>
            {/* <p>{items?.id}</p> */}
            <p>{id}</p>
            <p>{movieId?.title}</p>
          </div>
        </Container>
      </Layout>
    </>
  );
};

// export { DetailsPage };

export const Details = withAuth(DetailsPage);
