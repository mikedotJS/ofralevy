import {
  Box,
  Container,
  HStack,
  Link,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MobileDrawer } from "./MobileNavbar";
import { ToggleButton } from "./ToggleButton";
import { Link as RouterLink } from "react-router-dom";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const mobileNavbar = useDisclosure();

  return (
    <Box as="section">
      <Box
        borderBottomWidth="1px"
        bg="bg.surface"
        position="relative"
        zIndex="tooltip"
      >
        <Container py="4">
          <HStack justify="space-between">
            <Link
              as={RouterLink}
              to="/"
              style={{ textDecoration: "none", border: "none" }}
            >
              <Text
                fontSize="3xl"
                fontFamily="Playfair Display"
                letterSpacing="tight"
                cursor="pointer"
              >
                Ofra Levy
              </Text>
            </Link>
            {isDesktop ? (
              <HStack spacing="8">
                <Popover trigger="hover">
                  <PopoverTrigger>
                    <Text cursor="pointer">Ressources de Recherche</Text>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverBody>
                      <VStack align="start">
                        <Link as={RouterLink} to="/les-corpus">
                          Les Corpus
                        </Link>
                        <Link as={RouterLink} to="/les-personnages">
                          Les Personnages
                        </Link>
                        <Link as={RouterLink} to="/langue-langage">
                          Langue et Langage
                        </Link>
                        <Link as={RouterLink} to="/le-corpus-donnees-externes">
                          Le Corpus - Données Externes
                        </Link>
                        <Link as={RouterLink} to="/le-recit">
                          Le Récit
                        </Link>
                      </VStack>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </HStack>
            ) : (
              <>
                <ToggleButton
                  onClick={mobileNavbar.onToggle}
                  isOpen={mobileNavbar.isOpen}
                  aria-label="Open Menu"
                />
                <MobileDrawer
                  isOpen={mobileNavbar.isOpen}
                  onClose={mobileNavbar.onClose}
                />
              </>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
