import { FC } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { Movie, PartialMovies } from "../../../types";

const Carrousel: FC<PartialMovies> = ({ items }) => {
  return (
    <Carousel fade>
      {items?.map((item: any) => (
        <Carousel.Item>
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
