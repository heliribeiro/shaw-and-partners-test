import { useState, useCallback, ChangeEvent, FormEvent } from "react";
// styles
import { Container, Deck, SearchForm, SearchResults } from "./styles";
// components
import { Card, InputSearch, P } from "../../components";
// types
import { ISearchResult } from "../../dtos/search";
// services
import { getSearchResult } from "../../services/search";

export function SectionDataSearch() {
  const [searchValue, setSearchValue] = useState<string>();
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSearchValue(value);
    },
    [],
  );

  const handleSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!searchValue) return;

      const response: ISearchResult[] = await getSearchResult(searchValue);
      setSearchResults(response);
    },
    [searchValue],
  );

  return (
    <Container>
      <P>After sending the file, below perform the search in the users</P>
      <SearchForm onSubmit={handleSubmitForm}>
        <InputSearch
          onChange={handleChangeInput}
          value={searchValue ?? ""}
          placeholder="Search ..."
        />
      </SearchForm>
      <SearchResults>
        <P>Results:</P>
        <Deck>
          {searchResults.map((result, idx) => (
            <Card cardData={result} key={idx} />
          ))}
        </Deck>
      </SearchResults>
    </Container>
  );
}
