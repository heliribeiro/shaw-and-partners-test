import { ReactNode } from "react";
// styles
import { B, Container, Span } from "./styles";
// types
import { ISearchResult } from "../../dtos/search";
interface ICardProps {
  cardData: ISearchResult;
}

export function Card({ cardData }: ICardProps) {
  return (
    <Container>
      <Span>
        <B>Name:</B> {cardData.name}
      </Span>
      <Span>
        <B>City:</B> {cardData.city}
      </Span>
      <Span>
        <B>Country:</B> {cardData.country}
      </Span>
      <Span>
        <B>Favorite sport:</B> {cardData.favorite_sport}
      </Span>
    </Container>
  );
}
