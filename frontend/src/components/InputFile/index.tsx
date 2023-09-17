import { ChangeEvent } from "react";
// styles
import { Container, Input, Span } from "./styles";
// types
export interface IInputFileProps {
  selectedFile: boolean;
  text: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  accept: string;
}

export function InputFile({
  text,
  selectedFile,
  accept,
  onChange,
}: IInputFileProps) {
  return (
    <Container selectedFile={selectedFile}>
      <Span>{text}</Span>
      <Input type="file" accept={accept} onChange={onChange} />
    </Container>
  );
}
