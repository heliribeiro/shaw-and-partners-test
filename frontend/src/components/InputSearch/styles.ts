import styled from "styled-components";
import { IInputSearchProps } from ".";

export const Container = styled.label`
  background-color: var(--wrapper-color);
  box-shadow: 0px 0px 20px var(--shadow-color);
  padding: 0.5rem 0.75rem 0.5rem 1.5rem;
  border-radius: 2rem;
  font-size: 1rem;
  border: 1px solid transparent;
  width: min(100%, 512px);

  display: flex;
  gap: 0.5rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: transparent;
  background-color: transparent;
`;

export const SearchButton = styled.button`
  border: 0;
  height: auto;
  width: auto;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: var(--success-color);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.75;
  }
`;
