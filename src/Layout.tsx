import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Outlet, Link as RRLink } from "react-router-dom";
import logoLeft from "./images/logo-left.jpg";
import logoRight from "./images/logo-right.jpg";

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
        <Flex justify="center" gap="4">
          <Image src={logoLeft} boxSize="50px" />
          <Heading as="h1" size="md" textAlign="center" mb={4}>
            <RRLink to="/" color="black">
              Les succès de la littérature de l’imaginaire pour jeunes-adultes
            </RRLink>
          </Heading>
          <Image src={logoRight} boxSize="50px" />
        </Flex>
        <Box as="nav">
          <HStack justifyContent="center" spacing={4}>
            <Menu>
              <MenuButton bg="#7A0054" color="white" borderRadius="0" p={2}>
                Présentation
              </MenuButton>
              <MenuList>
                <MenuItem
                  as={Link}
                  href="/presentation/le-materiel-de-recherche"
                >
                  Le matériel de recherche
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="/presentation/la-methode-et-les-resultats"
                >
                  La méthode et les résultats
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="/presentation/approches-et-niveaux-d-analyse"
                >
                  Approches et niveaux d’analyse
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="/presentation/typologies-et-modelisations-utilisees"
                >
                  Typologies et modélisations utilisées
                </MenuItem>
                <MenuItem as={Link} href="/presentation/contact">
                  Contact
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton bg="#7A0054" color="white" borderRadius="0" p={2}>
                Le corpus
              </MenuButton>
              <MenuList>
                <MenuGroup title="Les sagas anglo-américaines">
                  <MenuItem
                    as={Link}
                    href="/corpus/anglo-americaines/a-la-croisee-des-mondes"
                  >
                    A la croisée des mondes
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="/corpus/anglo-americaines/divergente"
                  >
                    Divergente
                  </MenuItem>
                  <MenuItem as={Link} href="/corpus/anglo-americaines/eternel">
                    Eternel
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="/corpus/anglo-americaines/harry-potter"
                  >
                    Harry Potter
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="/corpus/anglo-americaines/heros-de-l-olympe"
                  >
                    Héros de l'Olympe
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="/corpus/anglo-americaines/hunger-games"
                  >
                    Hunger Games
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="/corpus/anglo-americaines/l-epreuve"
                  >
                    L'Épreuve
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="/corpus/anglo-americaines/l-heritage"
                  >
                    L'Héritage
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="/corpus/anglo-americaines/la-maison-de-la-nuit"
                  >
                    La Maison de la Nuit
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="/corpus/anglo-americaines/percy-jackson"
                  >
                    Percy Jackson
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="/corpus/anglo-americaines/the-mortal-instruments"
                  >
                    The Mortal Instruments
                  </MenuItem>
                  <MenuItem as={Link} href="/corpus/anglo-americaines/twilight">
                    Twilight
                  </MenuItem>
                </MenuGroup>
                <MenuGroup title="Les sagas françaises">
                  <MenuItem
                    as={Link}
                    href="/corpus/francaises/la-quete-d-ewilan"
                  >
                    La Quête d'Ewilan
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="/corpus/francaises/les-mondes-d-ewilan"
                  >
                    Les Mondes d'Ewilan
                  </MenuItem>
                  <MenuItem as={Link} href="/corpus/francaises/meto">
                    Meto
                  </MenuItem>
                  <MenuItem as={Link} href="/corpus/francaises/phobos">
                    Phobos
                  </MenuItem>
                  <MenuItem as={Link} href="/corpus/francaises/phoenomen">
                    Phoenomen
                  </MenuItem>
                  <MenuItem as={Link} href="/corpus/francaises/u4">
                    U4
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton bg="#7A0054" color="white" borderRadius="0" p={2}>
                Le récit
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} href="/recit/le-monomythe-donnees-brutes">
                  Le Monomythe - données brutes
                </MenuItem>
                <MenuItem as={Link} href="/recit/le-rythme-donnees-brutes">
                  Le rythme - données brutes
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="/recit/le-schema-sequentiel-du-recit-donnees-brutes"
                >
                  Le schéma sequentiel du récit - données brutes
                </MenuItem>
                <MenuItem
                  onClick={async (e) => {
                    e.preventDefault();

                    const filePath =
                      "./documents/Le récit/Le récit - infographie.pdf";

                    const file = import.meta.glob(
                      "./documents/Le récit/Le récit - infographie.pdf",
                      {
                        query: "?url",
                        import: "default",
                      }
                    );

                    const fileUrl = (await file[filePath]()) as string;
                    window.open(fileUrl, "_blank");
                  }}
                >
                  Le récit - infographie.pdf
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton bg="#7A0054" color="white" borderRadius="0" p={2}>
                Les personnages
              </MenuButton>
              <MenuList>
                <MenuItem
                  as={Link}
                  href="/personnages/differenciation-du-heros-donnees-brutes"
                >
                  Différenciation du héros - données brutes
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="/personnages/style-demographique-donnees-brutes"
                >
                  Style démographique - données brutes
                </MenuItem>
                <MenuItem
                  onClick={async (e) => {
                    e.preventDefault();

                    const filePath =
                      "./documents/Les personnages/Les personnages - infographie.pdf";

                    const file = import.meta.glob(
                      "./documents/Les personnages/Les personnages - infographie.pdf",
                      {
                        query: "?url",
                        import: "default",
                      }
                    );

                    const fileUrl = (await file[filePath]()) as string;
                    window.open(fileUrl, "_blank");
                  }}
                >
                  Les personnages - infographie.pdf
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton bg="#7A0054" color="white" borderRadius="0" p={2}>
                Langue et langage
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} href="/langue/litterovision-donnees-brutes">
                  Littérovision - données brutes
                </MenuItem>
                <MenuItem as={Link} href="/langue/page-turner-donnees-brutes">
                  Page Turner - données brutes
                </MenuItem>
                <MenuItem
                  onClick={async (e) => {
                    e.preventDefault();

                    const filePath =
                      "./documents/Langue et langage/Langue et langage - infographie.pdf";

                    const file = import.meta.glob(
                      "./documents/Langue et langage/Langue et langage - infographie.pdf",
                      {
                        query: "?url",
                        import: "default",
                      }
                    );

                    const fileUrl = (await file[filePath]()) as string;
                    window.open(fileUrl, "_blank");
                  }}
                >
                  Langue et langage - infographie.pdf
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton bg="#7A0054" color="white" borderRadius="0" p={2}>
                Données externes
              </MenuButton>
              <MenuList>
                <MenuGroup title="Chronologie">
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();

                      const filePath =
                        "./documents/Données externes/Chronologie/Auteurs.png";

                      const file = import.meta.glob(
                        "./documents/Données externes/Chronologie/Auteurs.png",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      console.log(file);
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Chronologie - Auteurs.png
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Chronologie/Frise 1.png";
                      const file = import.meta.glob(
                        "./documents/Données externes/Chronologie/Frise 1.png",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Chronologie - Frise 1.png
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Chronologie/Frise 2.png";
                      const file = import.meta.glob(
                        "./documents/Données externes/Chronologie/Frise 2.png",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Chronologie - Frise 2.png
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Chronologie/Frise 3.png";
                      const file = import.meta.glob(
                        "./documents/Données externes/Chronologie/Frise 3.png",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Chronologie - Frise 3.png
                  </MenuItem>
                </MenuGroup>
                <MenuGroup title="Échantillon">
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Echantillon de marché/Chiffres de ventes - détails.xlsx";
                      const file = import.meta.glob(
                        "./documents/Données externes/Echantillon de marché/Chiffres de ventes - détails.xlsx",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Échantillon - Chiffres de ventes - détails.xlsx
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Echantillon de marché/Chiffres de ventes.xlsx";
                      const file = import.meta.glob(
                        "./documents/Données externes/Echantillon de marché/Chiffres de ventes.xlsx",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Échantillon - Chiffres de ventes.xlsx
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Echantillon de marché/Prix moyens - sagas.xlsx";
                      const file = import.meta.glob(
                        "./documents/Données externes/Echantillon de marché/Prix moyens - sagas.xlsx",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Échantillon - Prix moyens - sagas.xlsx
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Echantillon de marché/Prix moyens - tomes.xlsx";
                      const file = import.meta.glob(
                        "./documents/Données externes/Echantillon de marché/Prix moyens - tomes.xlsx",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Échantillon - Prix moyens - tomes.xlsx
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Echantillon de marché/Auteurs.xlsx";
                      const file = import.meta.glob(
                        "./documents/Données externes/Echantillon de marché/Auteurs.xlsx",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Échantillon - Auteurs.xlsx
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Echantillon de marché/Catalogue - sagas anglo-américaines.xlsx";
                      const file = import.meta.glob(
                        "./documents/Données externes/Echantillon de marché/Catalogue - sagas anglo-américaines.xlsx",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Échantillon - Catalogue - sagas anglo-américaines.xlsx
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Echantillon de marché/Catalogue - sagas françaises.xlsx";
                      const file = import.meta.glob(
                        "./documents/Données externes/Echantillon de marché/Catalogue - sagas françaises.xlsx",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Échantillon - Catalogue - sagas françaises.xlsx
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Echantillon de marché/Genres de l_imaginaire.xlsx";
                      const file = import.meta.glob(
                        "./documents/Données externes/Echantillon de marché/Genres de l_imaginaire.xlsx",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Échantillon - Genres de l'imaginaire.xlsx
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Echantillon de marché/Prix littéraires.xlsx";
                      const file = import.meta.glob(
                        "./documents/Données externes/Echantillon de marché/Prix littéraires.xlsx",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Échantillon - Prix littéraires.xlsx
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Echantillon de marché/Référencement web.xlsx";
                      const file = import.meta.glob(
                        "./documents/Données externes/Echantillon de marché/Référencement web.xlsx",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Échantillon - Référencement web.xlsx
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Echantillon de marché/Scores de popularité.xlsx";
                      const file = import.meta.glob(
                        "./documents/Données externes/Echantillon de marché/Scores de popularité.xlsx",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Échantillon - Scores de popularité.xlsx
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Echantillon de marché/Titres annexes.xlsx";
                      const file = import.meta.glob(
                        "./documents/Données externes/Echantillon de marché/Titres annexes.xlsx",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Échantillon - Titres annexes.xlsx
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Echantillon de marché/Traductions.xlsx";
                      const file = import.meta.glob(
                        "./documents/Données externes/Echantillon de marché/Traductions.xlsx",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Échantillon - Traductions.xlsx
                  </MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      const filePath =
                        "./documents/Données externes/Echantillon de marché/Transmedia.xlsx";
                      const file = import.meta.glob(
                        "./documents/Données externes/Echantillon de marché/Transmedia.xlsx",
                        {
                          query: "?url",
                          import: "default",
                        }
                      );
                      const fileUrl = (await file[filePath]()) as string;
                      window.open(fileUrl, "_blank");
                    }}
                  >
                    Échantillon - Transmedia.xlsx
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </HStack>
        </Box>
      </Box>
      <Outlet />
    </>
  );
}
