import { FC } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { Movie, PartialMovies } from "../../../types";
import { useNavigate } from "react-router-dom";
/////////////////////////////
const Carrousel: FC<PartialMovies> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <Carousel fade>
      {items?.map((item: any) => (
        <Carousel.Item 
        key={item.id}
        onClick={() => navigate(`/movie/${item.id}`)}
        >
          <img
            className="d-block w-100"
            src={`${
              `https://image.tmdb.org/t/p/original` + item.backdrop_path
            }`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.id}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export { Carrousel };
///////////////////////////////////////////