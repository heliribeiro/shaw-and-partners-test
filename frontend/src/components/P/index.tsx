import { ReactNode } from "react";
// styles
import { Container } from "./styles";
// types
interface IPProps {
  children: ReactNode;
}

export function P({ children }: IPProps) {
  return <Container>{children}</Container>;
}
