import {
  ButtonGroup,
  Container,
  IconButton,
  Image,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import thalimLogo from "../assets/thalim-logo.png";

export const Footer: React.FC = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{ base: "12", md: "16" }}
    position="sticky"
    left="0"
    bottom="0"
    right="0"
    top="100%"
    width="full"
    bgColor="white"
  >
    <Stack spacing={{ base: "4", md: "5" }}>
      <Stack justify="space-between" direction="row" align="center">
        <Text
          fontSize="3xl"
          fontFamily="Playfair Display"
          letterSpacing="tight"
        >
          Ofra Levy
        </Text>
        <ButtonGroup variant="tertiary">
          <LinkOverlay href="https://www.thalim.cnrs.fr/auteur/ofra-levy">
            <Image
              aspectRatio="auto"
              src={thalimLogo}
              alt="Thalim"
              height="40px"
            />
          </LinkOverlay>
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/ofra-l%C3%A9vy-45645355/"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="fg.subtle">
        &copy; {new Date().getFullYear()} Ofra Levy. Tous droits réservés.
      </Text>
    </Stack>
  </Container>
);
