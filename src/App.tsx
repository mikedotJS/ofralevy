import { Box, Heading, Container, Link, Text, HStack } from "@chakra-ui/react";

export function App() {
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
              href="#presentation"
              bg="purple.500"
              color="white"
              p={2}
              borderRadius="md"
              _hover={{ bg: "purple.600" }}
            >
              Présentation
            </Link>
            <Link
              href="#corpus"
              bg="purple.500"
              color="white"
              p={2}
              borderRadius="md"
              _hover={{ bg: "purple.600" }}
            >
              Le corpus
            </Link>
            <Link
              href="#recit"
              bg="purple.500"
              color="white"
              p={2}
              borderRadius="md"
              _hover={{ bg: "purple.600" }}
            >
              Le récit
            </Link>
            <Link
              href="#personnages"
              bg="purple.500"
              color="white"
              p={2}
              borderRadius="md"
              _hover={{ bg: "purple.600" }}
            >
              Les personnages
            </Link>
            <Link
              href="#langue"
              bg="purple.500"
              color="white"
              p={2}
              borderRadius="md"
              _hover={{ bg: "purple.600" }}
            >
              Langue et langage
            </Link>
            <Link
              href="#donnees"
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
      <Container as="main" p={4}>
        <Box as="section" id="presentation" mb={4}>
          <Text mb={2}>
            La littérature de l’imaginaire pour jeunes-adultes, en France,
            témoigne de degrés de succès tranchés selon l’origine de ses titres
            publiés : avec d’un côté des œuvres anglo-américaines traduites à la
            popularité exponentielle ; et de l’autre, des œuvres françaises dont
            les représentants les plus populaires le sont pourtant bien en deçà
            de leurs contemporains. Et si certains facteurs externes influant
            peuvent, en toute logique, être déterminés, qu’en est-il de ceux
            qui, possiblement, se jouent à l’intérieur même du texte ?
          </Text>
          <Text mb={2}>
            Un projet de recherche a été mené pour trouver une réponse à cette
            curiosité littéraire de l’extrême contemporanéité constatée en
            territoire français en partant du cadrage théorique jusqu’à l’étude
            de cas.
          </Text>
          <Text>
            Voici d’ores et déjà certains résultats sous forme brute, extraits
            du corpus d’étude selon une approche combinant théorie littéraire et
            statistiques, qui permettent une lecture objective des phénomènes
            externes et littéraires en action.
          </Text>
        </Box>
      </Container>
    </>
  );
}
