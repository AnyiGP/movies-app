import { FC } from "react";
import { Card } from "react-bootstrap";
// import { } from "../../../types";

const CardMovie: FC = (
  {
    //   id,
    //   title,
    //   img,
    //   description,
    //   category,
  }
) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{}</Card.Title>
        <Card.Text>{}</Card.Text>
        <Card.Text>{}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{}</Card.Footer>
    </Card>
  );
};

export { CardMovie };
