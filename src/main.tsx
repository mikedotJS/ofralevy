import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "@chakra-ui/pro-theme";
import {
  Box,
  ChakraProvider,
  Container,
  extendTheme,
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

const handleFileDownload = async (
  e: React.MouseEvent<HTMLAnchorElement>,
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
            <Box as="section" mb={4}>
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
            </Box>
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
            <Box as="section" id="la-methode-et-les-resultats" mb={4}>
              <MethodologyAndResults />
            </Box>
          </Container>
        ),
      },
      {
        path: "approches-et-niveaux-d-analyse",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="approches-et-niveaux-d-analyse" mb={4}>
              <ApproachesAndLevelsOfAnalysis />
            </Box>
          </Container>
        ),
      },
      {
        path: "typologies-et-modelisations-utilisees",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="typologies-et-modelisations-utilisees" mb={4}>
              <TypologiesAndModelsUsed />
            </Box>
          </Container>
        ),
      },
      {
        path: "contact",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="contact" mb={4}>
              <Contact />
            </Box>
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
          <Container as="main" p={4}>
            <Box as="section" id="a-la-croisee-des-mondes" mb={4}>
              {Object.entries(
                angloAmericanImportedSeriesFiles["A la croisée des mondes"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "anglo-americaines/divergente",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="divergente" mb={4}>
              {Object.entries(
                angloAmericanImportedSeriesFiles["Divergente"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "anglo-americaines/eternel",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="eternel" mb={4}>
              {Object.entries(angloAmericanImportedSeriesFiles["Eternel"]).map(
                ([fileName, filePromise]) => (
                  <Text key={fileName}>
                    <a
                      href="#"
                      onClick={(e) =>
                        handleFileDownload(e, filePromise, fileName)
                      }
                    >
                      {fileName}
                    </a>
                  </Text>
                )
              )}
            </Box>
          </Container>
        ),
      },
      {
        path: "anglo-americaines/harry-potter",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="harry-potter" mb={4}>
              {Object.entries(
                angloAmericanImportedSeriesFiles["Harry Potter"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "anglo-americaines/heros-de-l-olympe",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="heros-de-l-olympe" mb={4}>
              {Object.entries(
                angloAmericanImportedSeriesFiles["Héros de l_Olympe"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "anglo-americaines/hunger-games",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="hunger-games" mb={4}>
              {Object.entries(
                angloAmericanImportedSeriesFiles["Hunger Games"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "anglo-americaines/l-epreuve",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="l-epreuve" mb={4}>
              {Object.entries(
                angloAmericanImportedSeriesFiles["L_Épreuve"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "anglo-americaines/l-heritage",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="l-heritage" mb={4}>
              {Object.entries(
                angloAmericanImportedSeriesFiles["L_Héritage"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "anglo-americaines/la-maison-de-la-nuit",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="la-maison-de-la-nuit" mb={4}>
              {Object.entries(
                angloAmericanImportedSeriesFiles["La Maison de la Nuit"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "anglo-americaines/percy-jackson",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="percy-jackson" mb={4}>
              {Object.entries(
                angloAmericanImportedSeriesFiles["Percy Jackson"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "anglo-americaines/the-mortal-instruments",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="the-mortal-instruments" mb={4}>
              {Object.entries(
                angloAmericanImportedSeriesFiles["The Mortal Instruments"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "anglo-americaines/twilight",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="twilight" mb={4}>
              {Object.entries(angloAmericanImportedSeriesFiles["Twilight"]).map(
                ([fileName, filePromise]) => (
                  <Text key={fileName}>
                    <a
                      href="#"
                      onClick={(e) =>
                        handleFileDownload(e, filePromise, fileName)
                      }
                    >
                      {fileName}
                    </a>
                  </Text>
                )
              )}
            </Box>
          </Container>
        ),
      },
      {
        path: "francaises/la-quete-d-ewilan",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="la-quete-d-ewilan" mb={4}>
              {Object.entries(
                frenchImportedSeriesFiles["La Quête d_Ewilan"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "francaises/les-mondes-d-ewilan",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="les-mondes-d-ewilan" mb={4}>
              {Object.entries(
                frenchImportedSeriesFiles["Les Mondes d_Ewilan"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "francaises/meto",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="meto" mb={4}>
              {Object.entries(frenchImportedSeriesFiles["Meto"]).map(
                ([fileName, filePromise]) => (
                  <Text key={fileName}>
                    <a
                      href="#"
                      onClick={(e) =>
                        handleFileDownload(e, filePromise, fileName)
                      }
                    >
                      {fileName}
                    </a>
                  </Text>
                )
              )}
            </Box>
          </Container>
        ),
      },
      {
        path: "francaises/phobos",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="phobos" mb={4}>
              {Object.entries(frenchImportedSeriesFiles["Phobos"]).map(
                ([fileName, filePromise]) => (
                  <Text key={fileName}>
                    <a
                      href="#"
                      onClick={(e) =>
                        handleFileDownload(e, filePromise, fileName)
                      }
                    >
                      {fileName}
                    </a>
                  </Text>
                )
              )}
            </Box>
          </Container>
        ),
      },
      {
        path: "francaises/phoenomen",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="phoenomen" mb={4}>
              {Object.entries(frenchImportedSeriesFiles["Phoenomen"]).map(
                ([fileName, filePromise]) => (
                  <Text key={fileName}>
                    <a
                      href="#"
                      onClick={(e) =>
                        handleFileDownload(e, filePromise, fileName)
                      }
                    >
                      {fileName}
                    </a>
                  </Text>
                )
              )}
            </Box>
          </Container>
        ),
      },
      {
        path: "francaises/u4",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="u4" mb={4}>
              {Object.entries(frenchImportedSeriesFiles["U4"]).map(
                ([fileName, filePromise]) => (
                  <Text key={fileName}>
                    <a
                      href="#"
                      onClick={(e) =>
                        handleFileDownload(e, filePromise, fileName)
                      }
                    >
                      {fileName}
                    </a>
                  </Text>
                )
              )}
            </Box>
          </Container>
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
          <Container as="main" p={4}>
            <Box as="section" id="le-monomythe-donnees-brutes" mb={4}>
              {Object.entries(
                frenchImportedResearchFiles["Le Monomythe - données brutes"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "le-rythme-donnees-brutes",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="le-rythme-donnees-brutes" mb={4}>
              {Object.entries(
                frenchImportedResearchFiles["Le rythme - données brutes"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "le-schema-sequentiel-du-recit-donnees-brutes",
        element: (
          <Container as="main" p={4}>
            <Box
              as="section"
              id="le-schema-sequentiel-du-recit-donnees-brutes"
              mb={4}
            >
              {Object.entries(
                frenchImportedResearchFiles[
                  "Le schéma sequentiel du récit - données brutes"
                ]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "le-recit-infographie",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="le-recit-infographie" mb={4}>
              {Object.entries(
                frenchImportedResearchFiles["Le récit - infographie.pdf"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
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
          <Container as="main" p={4}>
            <Box
              as="section"
              id="differenciation-du-heros-donnees-brutes"
              mb={4}
            >
              {Object.entries(
                frenchImportedCharacterFiles[
                  "Différenciation du héros - données brutes"
                ]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "style-demographique-donnees-brutes",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="style-demographique-donnees-brutes" mb={4}>
              {Object.entries(
                frenchImportedCharacterFiles[
                  "Style démographique - données brutes"
                ]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "les-personnages-infographie",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="les-personnages-infographie" mb={4}>
              {Object.entries(
                frenchImportedCharacterFiles[
                  "Les personnages - infographie.pdf"
                ]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
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
          <Container as="main" p={4}>
            <Box as="section" id="litterovision-donnees-brutes" mb={4}>
              {Object.entries(
                frenchImportedLanguageFiles["Littérovision - données brutes"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "page-turner-donnees-brutes",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="page-turner-donnees-brutes" mb={4}>
              {Object.entries(
                frenchImportedLanguageFiles["Page Turner - données brutes"]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
        ),
      },
      {
        path: "langue-et-langage-infographie",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="langue-et-langage-infographie" mb={4}>
              {Object.entries(
                frenchImportedLanguageFiles[
                  "Langue et langage - infographie.pdf"
                ]
              ).map(([fileName, filePromise]) => (
                <Text key={fileName}>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleFileDownload(e, filePromise, fileName)
                    }
                  >
                    {fileName}
                  </a>
                </Text>
              ))}
            </Box>
          </Container>
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
            <Box as="section" id="chronologie" mb={4}>
              <DonneesExternes />
            </Box>
          </Container>
        ),
      },
      {
        path: "echantillon",
        element: (
          <Container as="main" p={4}>
            <Box as="section" id="echantillon" mb={4}>
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
