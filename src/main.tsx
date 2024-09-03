import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "@chakra-ui/pro-theme";
import {
  Box,
  ChakraProvider,
  Container,
  extendTheme,
  Text,
} from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource-variable/playfair-display";

import { Layout } from "./Layout";
import { Presentation } from "./pages/presentation";
import { Corpus } from "./pages/corpus";
import { Recit } from "./pages/recit";
import { Personnages } from "./pages/personnages";
import { Langue } from "./pages/langue";
import DonneesExternes from "./pages/donnees-externes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="presentation" mb={4}>
              <Text mb={2}>
                La littérature de l’imaginaire pour jeunes-adultes, en France,
                témoigne de degrés de succès tranchés selon l’origine de ses
                titres publiés : avec d’un côté des œuvres anglo-américaines
                traduites à la popularité exponentielle ; et de l’autre, des
                œuvres françaises dont les représentants les plus populaires le
                sont pourtant bien en deçà de leurs contemporains. Et si
                certains facteurs externes influant peuvent, en toute logique,
                être déterminés, qu’en est-il de ceux qui, possiblement, se
                jouent à l’intérieur même du texte ?
              </Text>
              <Text mb={2}>
                Un projet de recherche a été mené pour trouver une réponse à
                cette curiosité littéraire de l’extrême contemporanéité
                constatée en territoire français en partant du cadrage théorique
                jusqu’à l’étude de cas.
              </Text>
              <Text>
                Voici d’ores et déjà certains résultats sous forme brute,
                extraits du corpus d’étude selon une approche combinant théorie
                littéraire et statistiques, qui permettent une lecture objective
                des phénomènes externes et littéraires en action.
              </Text>
            </Box>
          </Container>
        ),
      },
      {
        path: "presentation",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="presentation" mb={4}>
              <Presentation />
            </Box>
          </Container>
        ),
      },
      {
        path: "/corpus",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="corpus" mb={4}>
              <Corpus />
            </Box>
          </Container>
        ),
      },
      {
        path: "/recit",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="recit" mb={4}>
              <Recit />
            </Box>
          </Container>
        ),
      },
      {
        path: "/personnages",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="personnages" mb={4}>
              <Personnages />
            </Box>
          </Container>
        ),
      },
      {
        path: "/langue",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="langue" mb={4}>
              <Langue />
            </Box>
          </Container>
        ),
      },
      {
        path: "/donnees",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="donnees" mb={4}>
              <DonneesExternes />
            </Box>
          </Container>
        ),
      },
    ],
  },
]);

const proTheme = extendTheme(theme);
const extendedConfig = {
  colors: {
    ...proTheme.colors,
    brand: {
      400: "#644E5C",
      500: "#644E5C",
      600: "#644E5C",
      700: "#644E5C",
      800: "#644E5C",
      900: "#644E5C",
    },
  },
  fonts: {
    ...proTheme.fonts,
    heading: "serif",
    body: "serif",
  },
  components: {
    Button: {
      baseStyle: {
        rounded: "none",
      },
    },
  },
};
const myTheme = extendTheme(extendedConfig, proTheme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
