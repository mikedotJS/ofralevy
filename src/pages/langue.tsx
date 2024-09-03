import { Accordion, Box, Heading } from "@chakra-ui/react";
import { SeriesItem } from "../components/Category";
import { frenchLanguageNames, frenchImportedLanguageFiles } from "./_data";

export function Langue() {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Langue et langage
      </Heading>
      <Accordion allowToggle>
        {frenchLanguageNames.map((languageName) => (
          <SeriesItem
            key={languageName}
            seriesName={languageName}
            seriesFiles={frenchImportedLanguageFiles[languageName]}
          />
        ))}
      </Accordion>
    </Box>
  );
}
