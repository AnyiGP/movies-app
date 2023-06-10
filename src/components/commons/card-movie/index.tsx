import { FC } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Movie, PartialMovies } from "../../../types";

const CardMovie: FC<PartialMovies> = ({ items }) => {
  return (
    <Row xs={1} md={2} className="g-4">
      {items?.map((item: any) => (
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={`${`https://image.tmdb.org/t/p/original` + item.backdrop_path}`}
              alt=""
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              // <Card.Text>{item.id}</Card.Text>
              <Card.Text>
                Descripción
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    // <Card className="text-center" style={{ width: "18rem" }}>
    //   <Card.Img
    //     variant="top"
    //     src={`${`https://image.tmdb.org/t/p/original` + backdrop_path}`}
    //     alt=""
    //   />

    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>{id}</Card.Text>
    //   </Card.Body>
    //   {/* <Card.Footer className="text-muted">{}</Card.Footer> */}
    //   <Button variant="secondary">Go somewhere</Button>
    // </Card>
  );
};

export { CardMovie };
