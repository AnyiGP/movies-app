import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { Movie } from "../../../types";

const CardMovie: FC<Movie> = ({ id, title, poster_path, backdrop_path }) => {
  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      {/* movie/kasdjaslkdjal.jpg */}
      <Card.Img
        variant="top"
        src={`${`https://image.tmdb.org/t/p/original` + backdrop_path}`}
        alt=""
      />

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{id}</Card.Text>
      </Card.Body>
      {/* <Card.Footer className="text-muted">{}</Card.Footer> */}
      <Button variant="secondary">Go somewhere</Button>
    </Card>
  );
};

export { CardMovie };
