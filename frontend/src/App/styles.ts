import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  width: min(100% - 2rem, 512px);
  margin-inline: auto;
`;

export const Divider = styled.div`
  width: min(100%, 512px);
  margin-inline: auto;
  border-bottom: 2px dashed var(--gray-border-color);
`;
