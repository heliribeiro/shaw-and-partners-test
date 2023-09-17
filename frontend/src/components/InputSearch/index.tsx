import { ChangeEvent } from "react";
// styles
import { Container, SearchButton, SearchInput } from "./styles";
// assets
import { Send } from "../../assets/icons";
// types
export interface IInputSearchProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export function InputSearch({
  placeholder,
  value,
  disabled,
  onChange,
}: IInputSearchProps) {
  return (
    <Container>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <SearchButton>
        <Send />
      </SearchButton>
    </Container>
  );
}
