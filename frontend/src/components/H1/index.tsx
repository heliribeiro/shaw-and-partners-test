import { ReactNode } from "react";
// styles
import { Container } from "./styles";
// types
interface IH1Props {
  children: ReactNode;
}

export function H1({ children }: IH1Props) {
  return <Container>{children}</Container>;
}
