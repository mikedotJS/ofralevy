import { Box, Heading, HStack, Link } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Box
        as="header"
        bg="white"
        p={4}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading as="h1" size="lg" textAlign="center" mb={4}>
          Les succès de la littérature de l’imaginaire pour jeunes-adultes
        </Heading>
        <Box as="nav">
          <HStack justifyContent="center" spacing={4}>
            <Link
              href="/presentation"
              bg="purple.500"
              color="white"
              p={2}
              borderRadius="md"
              _hover={{ bg: "purple.600" }}
            >
              Présentation
            </Link>
            <Link
              href="/corpus"
              bg="purple.500"
              color="white"
              p={2}
              borderRadius="md"
              _hover={{ bg: "purple.600" }}
            >
              Le corpus
            </Link>
            <Link
              href="/recit"
              bg="purple.500"
              color="white"
              p={2}
              borderRadius="md"
              _hover={{ bg: "purple.600" }}
            >
              Le récit
            </Link>
            <Link
              href="/personnages"
              bg="purple.500"
              color="white"
              p={2}
              borderRadius="md"
              _hover={{ bg: "purple.600" }}
            >
              Les personnages
            </Link>
            <Link
              href="/langue"
              bg="purple.500"
              color="white"
              p={2}
              borderRadius="md"
              _hover={{ bg: "purple.600" }}
            >
              Langue et langage
            </Link>
            <Link
              href="/donnees"
              bg="purple.500"
              color="white"
              p={2}
              borderRadius="md"
              _hover={{ bg: "purple.600" }}
            >
              Données externes
            </Link>
          </HStack>
        </Box>
      </Box>
      <Outlet />
    </>
  );
}
