import { useState, useCallback, ChangeEvent, FormEvent } from "react";
// assets
import { Send } from "../../assets/icons";
// components
import { H1, InputFile, P } from "../../components";
// styles
import { Button, Container, Form } from "./styles";
import { sendFile } from "../../services/file";

import { toast } from 'react-toastify';

export function SectionFile() {
  const [archive, setArchive] = useState<File | null>();

  const handleChangeArchive = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;
      if (!files) return;

      const selectedFile: File = files[0];
      if (selectedFile?.type !== "text/csv")
        return console.log("Tipo não permitido, insita .csv");

      setArchive(selectedFile);
    },
    [],
  );

  const handleSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!archive) return;
      await sendFile(archive);
      toast.success('File successfully uploaded')
    },
    [archive],
  );

  return (
    <Container>
      <H1>Welcome!</H1>
      <P>Upload a CSV file with users data.</P>
      <Form onSubmit={handleSubmitForm}>
        <InputFile
          accept=".csv"
          onChange={handleChangeArchive}
          selectedFile={!!archive}
          text={
            archive
              ? archive.name.slice(0, 20)
              : "Click to select your CSV file"
          }
        />
        <Button type="submit" disabled={!archive}>
          Send <Send />
        </Button>
      </Form>
    </Container>
  );
}
