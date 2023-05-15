import { FC } from "react";
import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { useParams } from "react-router-dom";
import { Movie, PartialMovies } from "../../types";
import { getById } from "../../services/moviesService";
import { Card, Col, Container } from "react-bootstrap";
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
          </div>
        </Container>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={`${
                `https://image.tmdb.org/t/p/original` + movieId?.backdrop_path
              }`}
              alt=""
            />
            <Card.Body>
              <Card.Title>
                Título: <p>{movieId?.title}</p>
              </Card.Title>
              <Card.Text>
                Id <p>{movieId?.id}</p>
              </Card.Text>
              <Card.Text>
                Descripción: <p>{movieId?.overview}</p>
              </Card.Text>
              <Card.Text>
                Fecha de realización <p>{movieId?.release_date}</p>
              </Card.Text>
              <Card.Text>
                Votos: <p>{movieId?.vote_count}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Layout>
    </>
  );
};

// export { DetailsPage };

export const Details = withAuth(DetailsPage);
