import styled from "styled-components";
import { IInputFileProps } from ".";

type IContainerProps = Pick<IInputFileProps, "selectedFile">;

export const Container = styled.label<IContainerProps>`
  background-color: var(--wrapper-color);
  box-shadow: 0px 0px 20px var(--shadow-color);
  padding: 0.75rem 0rem;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  border: 1px solid transparent;
  width: min(100%, 256px);

  color: ${({ selectedFile }) =>
    selectedFile ? "var(--success-color)" : "var(--text-color)"};

  &:hover {
    border: 1px solid var(--green-border-color);
  }
`;

export const Span = styled.span`
  padding: 0rem 1rem;
`;
export const Input = styled.input`
  display: none;
`;
