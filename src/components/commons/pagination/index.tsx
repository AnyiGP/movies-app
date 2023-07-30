import { FC } from "react";
import { Pagination } from "react-bootstrap";
import { useCounter } from "../../../hooks";
// import { } from "../../../types";

// type Props = {
//   totalPages: number;
//   onClick: (page: string) => void;
// };

//le tengo que pasar las páginas
// const PageControl: FC<Props> = ({ totalPages, onClick }) => {
//   const { count, increment, decrement, firstPage } = useCounter(1);
//   console.log(PageControl);

   const PageControl = () => {
    const { count, increment, decrement, firstPage } = useCounter(1);
   console.log(PageControl)

  return (
    <Pagination>
      <Pagination.First onClick={firstPage} />
      <Pagination.Prev onClick={decrement} />
      <Pagination.Item value={count}>{count}</Pagination.Item>
      <Pagination.Next onClick={increment} />
      <Pagination.Last />
    </Pagination>
  );
};

export { PageControl };
