import { FC } from "react";
import { Pagination  } from "react-bootstrap";
// import { } from "../../../types";

const PageControl: FC = (
  {
    //   id,
    //   title,
    //   img,
    //   description,
    //   category,
  }
) => {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

export { PageControl };