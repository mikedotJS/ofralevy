import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";
import {
  angloAmericanImportedSeriesFiles,
  angloAmericanSeriesNames,
  frenchImportedSeriesFiles,
  frenchSeriesNames,
} from "./_data";
import Category from "../components/Category";

export function Corpus() {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Corpus
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Les sagas anglo-américaines
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Accordion allowToggle>
              <Category
                names={angloAmericanSeriesNames}
                files={angloAmericanImportedSeriesFiles}
              />
            </Accordion>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Les sagas françaises
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Accordion allowToggle>
              <Category
                names={frenchSeriesNames}
                files={frenchImportedSeriesFiles}
              />
            </Accordion>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
