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
  frenchEchantillonDataNames,
  frenchChronologieDataNames,
  frenchImportedEchantillonDataFiles,
  frenchImportedChronologieDataFiles,
} from "./_data";
import Category from "../components/Category";

export function DonneesExternes() {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Données Externes
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Chronologie
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Accordion allowToggle>
              <Category
                names={frenchChronologieDataNames}
                files={frenchImportedChronologieDataFiles}
              />
            </Accordion>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Echantillon
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Accordion allowToggle>
              <Category
                names={frenchEchantillonDataNames}
                files={frenchImportedEchantillonDataFiles}
              />
            </Accordion>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default DonneesExternes;
