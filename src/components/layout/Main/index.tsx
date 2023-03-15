import { FC, ReactNode } from "react";
import "./style.scss";

type Props = {
  children: ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  return <main className="main flex-grow-1">{children}</main>;
};

export { Main };
