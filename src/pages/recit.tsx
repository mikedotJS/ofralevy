import { Accordion, Box, Heading } from "@chakra-ui/react";
import { SeriesItem } from "../components/Category";
import { frenchImportedResearchFiles, frenchResearchNames } from "./_data";

export function Recit() {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Le récit
      </Heading>
      <Accordion allowToggle>
        {frenchResearchNames.map((researchName) => (
          <SeriesItem
            seriesName={researchName}
            seriesFiles={frenchImportedResearchFiles[researchName]}
          />
        ))}
      </Accordion>
    </Box>
  );
}
