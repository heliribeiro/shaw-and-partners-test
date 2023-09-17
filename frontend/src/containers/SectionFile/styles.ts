import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SectionDataSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 675px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: var(--wrapper-color);
  box-shadow: 0px 0px 20px var(--shadow-color);
  padding: 0.5rem 1rem 0.5rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 500;
  border: 0;
  transition: var(--delay-time);

  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;

  background-color: var(--btn-background-color);
  color: var(--btn-text-color);

  &:hover {
    opacity: 0.75;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    filter: grayscale(1);
  }

  @media screen and (max-width: 675px) {
    font-size: 1.2rem;
    padding: 0.75rem 1rem 0.75rem 1.5rem;
  }
`;
