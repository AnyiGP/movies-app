import { FC } from "react";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";
import { Movie, PartialMovies } from "../../../types";
import { useNavigate } from "react-router-dom";

const CardScroll: FC<PartialMovies> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <CardGroup style={{ overflowX: "auto" }}>
      {items?.map((item: any) => (
        <Card style={{ margin: "5px" }} className="">
          <Card.Img
            key={item.id}
            onClick={() => navigate(`/movie/${item.id}`)}
            className="col card-block"
            variant="top"
            src={`${
              `https://image.tmdb.org/t/p/original` + item.backdrop_path
            }`}
            alt=""
          />

          <Card.Body style={{ width: "18rem", height: "auto" }}>
            <Card.Title style={{ fontSize: "1rem" }}>{item.title}</Card.Title>
            <Card.Text>{item.id}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
};

export { CardScroll };
