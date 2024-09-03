import { Accordion, Box, Heading } from "@chakra-ui/react";
import { SeriesItem } from "../components/Category";
import { frenchCharacterNames, frenchImportedCharacterFiles } from "./_data";

export function Personnages() {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Les personnages
      </Heading>
      <Accordion allowToggle>
        {frenchCharacterNames.map((seriesName) => (
          <SeriesItem
            key={seriesName}
            seriesName={seriesName}
            seriesFiles={frenchImportedCharacterFiles[seriesName]}
          />
        ))}
      </Accordion>
    </Box>
  );
}
