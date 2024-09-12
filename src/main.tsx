import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "@chakra-ui/pro-theme";
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  extendTheme,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource-variable/playfair-display";

import { Layout } from "./Layout";
import {
  ApproachesAndLevelsOfAnalysis,
  Contact,
  MethodologyAndResults,
  PresentationMaterielRecherche,
  TypologiesAndModelsUsed,
} from "./pages/presentation";
import DonneesExternes from "./pages/donnees-externes";
import {
  angloAmericanImportedSeriesFiles,
  frenchImportedCharacterFiles,
  frenchImportedLanguageFiles,
  frenchImportedResearchFiles,
  frenchImportedSeriesFiles,
} from "./pages/_data";
import { FaDownload } from "react-icons/fa";
import SeriesFiles from "./components/SeriesFiles";

const extractFileName = (filePath: string) => {
  const parts = filePath.split("/");
  return parts[parts.length - 1];
};

const handleFileDownload = async (
  e: React.MouseEvent<HTMLButtonElement>,
  filePromise: () => Promise<string>,
  fileName: string
) => {
  e.preventDefault();
  const fileUrl = await filePromise();
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Container as="main" p={4}>
            <Stack as="section" mb={4}>
              <Text mb={2}>
                La littérature de l'imaginaire pour jeunes-adultes, en France,
                témoigne de degrés de succès tranchés selon l'origine de ses
                titres publiés : avec d'un côté des œuvres anglo-américaines
                traduites à la popularité exponentielle; et de l'autre, des
                œuvres françaises dont les représentants les plus populaires le
                sont pourtant bien en déca de leurs contemporains. Et si
                certains facteurs externes influant peurent, en toute logique,
                être déterminés, qu'en est-il de ceux qui, possiblement, se
                jouent à l'intérieur même du texte ?
              </Text>
              <Text mb={2}>
                Un projet de recherche a été mené pour trouver une réponse à
                cette curiosité littéraire de l'extrême contemporanéité
                constatée en territoire français en partant du cadrage théorique
                jusqu'à l'étude de cas.
              </Text>
              <Text>
                Voici d'ores et déjà certains résultats sous forme brute,
                extraits du corpus d'étude selon une approche combinant théorie
                littéraire et statistiques, qui permettent une lecture
                objectivable des phénomènes externes et littéraires en action.
              </Text>
            </Stack>
          </Container>
        ),
      },
    ],
  },
  {
    path: "presentation",
    element: <Layout />,
    children: [
      {
        path: "le-materiel-de-recherche",
        element: (
          <Container as="main" p={4}>
            <Stack as="section" id="le-materiel-de-recherche" mb={4}>
              <PresentationMaterielRecherche />
            </Stack>
          </Container>
        ),
      },
      {
        path: "la-methode-et-les-resultats",
        element: (
          <Container as="main" p={4}>
            <Stack as="section" id="la-methode-et-les-resultats" mb={4}>
              <MethodologyAndResults />
            </Stack>
          </Container>
        ),
      },
      {
        path: "approches-et-niveaux-d-analyse",
        element: (
          <Container as="main" p={4}>
            <Stack as="section" id="approches-et-niveaux-d-analyse" mb={4}>
              <ApproachesAndLevelsOfAnalysis />
            </Stack>
          </Container>
        ),
      },
      {
        path: "typologies-et-modelisations-utilisees",
        element: (
          <Container as="main" p={4}>
            <Stack
              as="section"
              id="typologies-et-modelisations-utilisees"
              mb={4}
            >
              <TypologiesAndModelsUsed />
            </Stack>
          </Container>
        ),
      },
      {
        path: "contact",
        element: (
          <Container as="main" p={4}>
            <Stack as="section" id="contact" mb={4}>
              <Contact />
            </Stack>
          </Container>
        ),
      },
    ],
  },
  {
    path: "corpus",
    element: <Layout />,
    children: [
      {
        path: "anglo-americaines/a-la-croisee-des-mondes",
        element: (
          <SeriesFiles
            seriesId="a-la-croisee-des-mondes"
            seriesName="A la Croisée des Mondes"
            seriesFiles={
              angloAmericanImportedSeriesFiles["A la croisée des mondes"]
            }
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "anglo-americaines/divergente",
        element: (
          <SeriesFiles
            seriesId="divergente"
            seriesName="Divergente"
            seriesFiles={angloAmericanImportedSeriesFiles["Divergente"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "anglo-americaines/eternel",
        element: (
          <SeriesFiles
            seriesId="eternel"
            seriesName="Eternel"
            seriesFiles={angloAmericanImportedSeriesFiles["Eternel"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "anglo-americaines/harry-potter",
        element: (
          <SeriesFiles
            seriesId="harry-potter"
            seriesName="Harry Potter"
            seriesFiles={angloAmericanImportedSeriesFiles["Harry Potter"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "anglo-americaines/heros-de-l-olympe",
        element: (
          <SeriesFiles
            seriesId="heros-de-l-olympe"
            seriesName="Héros de l'Olympe"
            seriesFiles={angloAmericanImportedSeriesFiles["Héros de l_Olympe"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "anglo-americaines/hunger-games",
        element: (
          <SeriesFiles
            seriesId="hunger-games"
            seriesName="Hunger Games"
            seriesFiles={angloAmericanImportedSeriesFiles["Hunger Games"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "anglo-americaines/l-epreuve",
        element: (
          <SeriesFiles
            seriesId="l-epreuve"
            seriesName="L'Épreuve"
            seriesFiles={angloAmericanImportedSeriesFiles["L_Épreuve"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "anglo-americaines/l-heritage",
        element: (
          <SeriesFiles
            seriesId="l-heritage"
            seriesName="L'Héritage"
            seriesFiles={angloAmericanImportedSeriesFiles["L_Héritage"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "anglo-americaines/la-maison-de-la-nuit",
        element: (
          <SeriesFiles
            seriesId="la-maison-de-la-nuit"
            seriesName="La Maison de la Nuit"
            seriesFiles={
              angloAmericanImportedSeriesFiles["La Maison de la Nuit"]
            }
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "anglo-americaines/percy-jackson",
        element: (
          <SeriesFiles
            seriesId="percy-jackson"
            seriesName="Percy Jackson"
            seriesFiles={angloAmericanImportedSeriesFiles["Percy Jackson"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "anglo-americaines/the-mortal-instruments",
        element: (
          <SeriesFiles
            seriesId="the-mortal-instruments"
            seriesName="The Mortal Instruments"
            seriesFiles={
              angloAmericanImportedSeriesFiles["The Mortal Instruments"]
            }
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "anglo-americaines/twilight",
        element: (
          <SeriesFiles
            seriesId="twilight"
            seriesName="Twilight"
            seriesFiles={angloAmericanImportedSeriesFiles["Twilight"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "francaises/la-quete-d-ewilan",
        element: (
          <SeriesFiles
            seriesId="la-quete-d-ewilan"
            seriesName="La Quête d'Ewilan"
            seriesFiles={frenchImportedSeriesFiles["La Quête d_Ewilan"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "francaises/les-mondes-d-ewilan",
        element: (
          <SeriesFiles
            seriesId="les-mondes-d-ewilan"
            seriesName="Les Mondes d'Ewilan"
            seriesFiles={frenchImportedSeriesFiles["Les Mondes d_Ewilan"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "francaises/meto",
        element: (
          <SeriesFiles
            seriesId="meto"
            seriesName="Meto"
            seriesFiles={frenchImportedSeriesFiles["Meto"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "francaises/phobos",
        element: (
          <SeriesFiles
            seriesId="phobos"
            seriesName="Phobos"
            seriesFiles={frenchImportedSeriesFiles["Phobos"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "francaises/phoenomen",
        element: (
          <SeriesFiles
            seriesId="phoenomen"
            seriesName="Phoenomen"
            seriesFiles={frenchImportedSeriesFiles["Phoenomen"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "francaises/u4",
        element: (
          <SeriesFiles
            seriesId="u4"
            seriesName="U4"
            seriesFiles={frenchImportedSeriesFiles["U4"]}
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
    ],
  },
  {
    path: "recit",
    element: <Layout />,
    children: [
      {
        path: "le-monomythe-donnees-brutes",
        element: (
          <SeriesFiles
            seriesId="le-monomythe-donnees-brutes"
            seriesName="Le Monomythe - Données Brutes"
            seriesFiles={
              frenchImportedResearchFiles["Le Monomythe - données brutes"]
            }
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "le-rythme-donnees-brutes",
        element: (
          <SeriesFiles
            seriesId="le-rythme-donnees-brutes"
            seriesName="Le Rythme - Données Brutes"
            seriesFiles={
              frenchImportedResearchFiles["Le rythme - données brutes"]
            }
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "le-schema-sequentiel-du-recit-donnees-brutes",
        element: (
          <SeriesFiles
            seriesId="le-schema-sequentiel-du-recit-donnees-brutes"
            seriesName="Le Schéma Séquentiel du Récit - Données Brutes"
            seriesFiles={
              frenchImportedResearchFiles[
                "Le schéma sequentiel du récit - données brutes"
              ]
            }
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "le-recit-infographie",
        element: (
          <SeriesFiles
            seriesId="le-recit-infographie"
            seriesName="Le Récit - Infographie"
            seriesFiles={
              frenchImportedResearchFiles["Le récit - infographie.pdf"]
            }
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
    ],
  },
  {
    path: "personnages",
    element: <Layout />,
    children: [
      {
        path: "differenciation-du-heros-donnees-brutes",
        element: (
          <SeriesFiles
            seriesId="differenciation-du-heros-donnees-brutes"
            seriesName="Différenciation du Héros - Données Brutes"
            seriesFiles={
              frenchImportedCharacterFiles[
                "Différenciation du héros - données brutes"
              ]
            }
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "style-demographique-donnees-brutes",
        element: (
          <SeriesFiles
            seriesId="style-demographique-donnees-brutes"
            seriesName="Style Démographique - Données Brutes"
            seriesFiles={
              frenchImportedCharacterFiles[
                "Style démographique - données brutes"
              ]
            }
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "les-personnages-infographie",
        element: (
          <SeriesFiles
            seriesId="les-personnages-infographie"
            seriesName="Les Personnages - Infographie"
            seriesFiles={
              frenchImportedCharacterFiles["Les personnages - infographie.pdf"]
            }
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
    ],
  },
  {
    path: "langue",
    element: <Layout />,
    children: [
      {
        path: "litterovision-donnees-brutes",
        element: (
          <SeriesFiles
            seriesId="litterovision-donnees-brutes"
            seriesName="Littérovision - Données Brutes"
            seriesFiles={
              frenchImportedLanguageFiles["Littérovision - données brutes"]
            }
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "page-turner-donnees-brutes",
        element: (
          <SeriesFiles
            seriesId="page-turner-donnees-brutes"
            seriesName="Page Turner - Données Brutes"
            seriesFiles={
              frenchImportedLanguageFiles["Page Turner - données brutes"]
            }
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
      {
        path: "langue-et-langage-infographie",
        element: (
          <SeriesFiles
            seriesId="langue-et-langage-infographie"
            seriesName="Langue et Langage - Infographie"
            seriesFiles={
              frenchImportedLanguageFiles["Langue et langage - infographie.pdf"]
            }
            handleFileDownload={handleFileDownload}
            extractFileName={extractFileName}
          />
        ),
      },
    ],
  },
  {
    path: "donnees",
    element: <Layout />,
    children: [
      {
        path: "chronologie",
        element: (
          <Container as="main" p={4}>
            <Stack as="section" id="chronologie" mb={4}>
              <Text as="h2" fontSize="xl" mb={4}>
                Chronologie
              </Text>
              <DonneesExternes />
            </Stack>
          </Container>
        ),
      },
      {
        path: "echantillon",
        element: (
          <Container as="main" p={4}>
            <Stack as="section" id="echantillon" mb={4}>
              <Text as="h2" fontSize="xl" mb={4}>
                Échantillon
              </Text>
              <DonneesExternes />
            </Stack>
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
