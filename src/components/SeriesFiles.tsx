import React from "react";
import {
  Container,
  Stack,
  Text,
  Button,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

interface SeriesFilesProps {
  seriesId: string;
  seriesName: string;
  seriesFiles: Record<string, () => Promise<string>>;
  handleFileDownload: (
    e: React.MouseEvent<HTMLButtonElement>,
    filePromise: () => Promise<string>,
    fileName: string
  ) => void;
  extractFileName: (filePath: string) => string;
}

const SeriesFiles: React.FC<SeriesFilesProps> = ({
  seriesId,
  seriesName,
  seriesFiles,
  handleFileDownload,
  extractFileName,
}) => (
  <Container as="main" p={4}>
    <Stack as="section" id={seriesId} mb={4}>
      <Heading as="h2" size="sm" mb={2}>
        {seriesName}
      </Heading>
      {Object.entries(seriesFiles).map(([fileName, filePromise]) => (
        <Button
          bg="#EDF2F7"
          color="black"
          width="fit-content"
          fontFamily="sans-serif"
          fontWeight="semibold"
          _hover={{ bg: "#E2E8F0" }}
          size="xs"
          key={fileName}
          rightIcon={<Icon boxSize={3} as={FaDownload} />}
          onClick={(e) => handleFileDownload(e, filePromise, fileName)}
        >
          {extractFileName(fileName)}
        </Button>
      ))}
    </Stack>
  </Container>
);

export default SeriesFiles;
