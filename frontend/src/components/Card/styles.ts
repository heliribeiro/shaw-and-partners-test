import styled from "styled-components";

export const Container = styled.div`
  width: min(100%, 512px);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0rem;
  border-radius: 0.25rem;
  background-color: var(--wrapper-color);
  border: 1px solid transparent;
  transition: var(--delay-time);

  &:hover {
    border: 1px solid var(--card-border-color);
  }
`;

export const Span = styled.span`
  padding: 0rem 1.25rem;
  color: var(--card-text-color);
`;
export const B = styled.b``;
