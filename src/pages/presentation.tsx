import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,
  OrderedList,
  Stack,
} from "@chakra-ui/react";

export function Presentation() {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Présentation
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Typologies et modélisations utilisées
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text mb={2}>
              Les travaux, typologies et modélisations utilisés au cours de
              cette recherche ont été soit appliquées, actualisées, combinées ou
              générées.
            </Text>
            <OrderedList mb={4}>
              <ListItem>
                Typologie souple des 10 facteurs de succès qui suit le cycle de
                vie du best-seller (2 facteurs internes ; 4 facteurs externes
                primaires ; 4 facteurs externes secondaires)
              </ListItem>
              <ListItem>
                Le Monomythe combiné aux humanités numériques et adapté au
                corpus (J. Campbell)
              </ListItem>
              <ListItem>Le schéma séquentiel du récit</ListItem>
              <ListItem>Le style démographique (F. Lavocat)</ListItem>
              <ListItem>La différenciation du héros (P. Hamon)</ListItem>
              <ListItem>
                Les travaux de littérarovision (M. Bernard et B. Bohet)
              </ListItem>
              <ListItem>Le modèle page turner</ListItem>
            </OrderedList>
            <Heading as="h3" size="md" mb={2}>
              Bibliographie indicative :
            </Heading>
            <UnorderedList>
              <ListItem>
                BERNARD Michel, BOHET Baptiste,{" "}
                <Text as="i">
                  Littéravision – Un regard différent sur 100 grands romans de
                  la littérature française
                </Text>
                , Le Bord de l’eau, Lormont, 2022, 320p.
              </ListItem>
              <ListItem>
                CAMPBELL Joseph,{" "}
                <Text as="i">Le héros aux mille et un visages</Text>, trad.
                Henri Crès, Escalquens, Oxus, 2010, 410p.
              </ListItem>
              <ListItem>
                HAMON Philippe,{" "}
                <Text as="i">Pour un statut sémiologique du personnage</Text>,
                in <Text as="i">Poétique du récit</Text>, ouvrage collectif,
                Seuil, Collection Points, Paris, 1977, 180p.
              </ListItem>
              <ListItem>
                LAVOCAT Françoise,{" "}
                <Text as="i">
                  L’étude des populations fictives comme objet de la « style
                  démographique » nouveau concept narratologique
                </Text>
                , Fabula, Paris, 2020.{" "}
                <Link href="https://www.fabula.org/actualites.php?Populations_fictives">
                  https://www.fabula.org/actualites.php?Populations_fictives
                </Link>
              </ListItem>
              <ListItem>
                LÉVY Ofra, <Text as="i">Le schéma séquentiel du récit</Text>, in{" "}
                <Text as="i">
                  Pegasus : pour un laboratoire expérimental et épigénétique de
                  théorie littéraire
                </Text>
                , sous la direction de Ofra Lévy, n°2 « Les formes textuelles »,
                Paris, éditions Classiques Garnier, Novembre 2025
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Contact
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              <strong>Ofra Lévy</strong> - Université Sorbonne Nouvelle Paris
              III
            </Text>
            <Text>
              <strong>Email:</strong>{" "}
              <Link href="mailto:ofra_92@hotmail.fr">ofra_92@hotmail.fr</Link>
            </Text>
            <Text>
              <strong>Page institutionnelle:</strong>{" "}
              <Link
                href="https://www.thalim.cnrs.fr/auteur/ofra-levy"
                isExternal
              >
                https://www.thalim.cnrs.fr/auteur/ofra-levy
              </Link>
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
export function PresentationMaterielRecherche() {
  return (
    <Box>
      <Heading as="h2" size="md">
        Le matériel de recherche
      </Heading>
      <Text mb={2}>
        Un corpus à deux échelles de succès a été constitué. Il se compose de 61
        titres anglo-américains traduits répartis dans 12 sagas (les succès
        exponentiels) et de 21 titres français répartis dans 6 sagas (les succès
        relatifs). Ces romans ont été publiés en France entre 1998 et 2017 et
        ont été sélectionnés en se référant aux chiffres de vente d’un panel GFK
        consulté en 2017.
      </Text>
      <Box mb={4}>
        <Heading as="h3" size="sm" mb={2} textDecoration="underline">
          Les sagas anglo-américaines :
        </Heading>
        <Text>
          <i>Harry Potter</i> de J.K. Rowling publiée en France entre 1998 et
          2007
        </Text>
        <Text>
          <i>Twilight</i> de Stephenie Meyer publiée en France entre 2005 et
          2008
        </Text>
        <Text>
          <i>Le Cycle de l'Héritage</i> de Christopher Paolini publiée en France
          entre 2004 et 2012
        </Text>
        <Text>
          <i>Hunger Games</i> de Suzanne Collins publiée en France entre 2009 et
          2011
        </Text>
        <Text>
          <i>À la croisée des mondes</i> de Philip Pullman publiée en France
          entre 1998 et 2001
        </Text>
        <Text>
          <i>Percy Jackson</i> de Rick Riordan publiée en France entre 2006 et
          2010
        </Text>
        <Text>
          <i>Divergente</i> de Veronica Roth publiée en France entre 2011 et
          2014
        </Text>
        <Text>
          <i>L'Épreuve</i> de James Dashner publiée en France entre 2012 et 2014
        </Text>
        <Text>
          <i>La Maison de la nuit</i> de P. C. Cast et Kristin Cast publiée en
          France entre 2010 et 2015
        </Text>
        <Text>
          <i>Héros de l'Olympe</i> de Rick Riordan publiée en France entre 2011
          et 2015
        </Text>
        <Text>
          <i>Éternels</i> de Alyson Noel publiée en France entre 2009 et 2012
        </Text>
        <Text>
          <i>The Mortal Instruments</i> de Cassandra Clare publiée en France
          entre 2008 et 2015
        </Text>
      </Box>
      <Box>
        <Heading as="h3" size="sm" mb={2} textDecoration="underline">
          Les sagas françaises :
        </Heading>
        <Text>
          <i>La Quête d'Ewilan</i> de Pierre Bottero publiée en France en 2003
        </Text>
        <Text>
          <i>Les Mondes d'Ewilan</i> de Pierre Bottero publiée en France entre
          2004 et 2005
        </Text>
        <Text>
          <i>Phobos</i> de Victor Dixen publiée en France entre 2015 et 2017
        </Text>
        <Text>
          <i>Meto</i> de Yves Grevet publiée en France entre 2008 et 2010
        </Text>
        <Text>
          <i>Phænomen</i> de Erik L'Homme publiée en France entre 2006 et 2008
        </Text>
        <Text>
          <i>U4</i> de Vincent Villeminot, Yves Grevet, Carole Trébor et
          Florence Hinckel publiée en France en 2015
        </Text>
      </Box>
    </Box>
  );
}

export function MethodologyAndResults() {
  return (
    <Box>
      <Heading as="h2" size="md">
        La méthode et les résultats
      </Heading>
      <Text>
        Le détail de la méthodologie analytique et conclusions littéraires de la
        recherche seront prochainement consultables au travers d’écrits
        scientifiques, avec notamment une présentation de deux cartographies,
        autant axées sur les éléments internes qu’externes détectés sur corpus
        lors de la fouille textuelle. L’une, sur les succès relatifs à
        exponentiels de la littérature de l’imaginaire pour jeunes-adultes en se
        référant aux éléments de concordance (traits génériques) et en
        établissant des fourchettes de données (cadrage génétique). Ce travail a
        été réalisé car pour formuler la recette du succès, il convient aussi de
        connaître et de s’inscrire dans le genre en appliquant ses codes ; et
        puisque les deux corpus ont su, bien qu’à des degrés différents, se
        populariser auprès du lectorat, ces éléments relevés se présentent ainsi
        pour caractériser cette codification. L’autre, exclusivement recentrée
        sur les succès exponentiels de la catégorie littéraire traduisible par
        les éléments de divergence typologique s’y référant détectés lors de ce
        travail – à savoir que leur association à des facteurs générateurs de
        succès devra être appréhendée selon les cas puisque certains traits
        relevés peuvent s’expliquer par le contexte, le hasard ou la chance.
      </Text>
      <br />
      <u>Ce projet de recherche a bénéficié :</u>
      <UnorderedList>
        <ListItem>
          D’un contrat doctoral de recherche de quatre ans à la Sorbonne
          Nouvelle – 2017 à 2022
        </ListItem>
        <ListItem>
          De la bourse Humanistica, l’association internationale francophone des
          Humanités Numériques – 2022
        </ListItem>
        <ListItem>
          De la bourse Humanités Numériques Science & Société Sorbonne Nouvelle
          – 2023
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

export function ApproachesAndLevelsOfAnalysis() {
  return (
    <Box>
      <Heading as="h2" size="md" mb={4}>
        Approches et niveaux d'analyse
      </Heading>
      <Text mb={2}>
        Les approches en Narratologie, Structuralisme et Humanités Numériques
        ont été combinées pour examiner la matière textuelle au prisme de
        typologies et modélisations actualisées, combinées ou générées. Cette
        méthodologie analytique hybride a rendu possible la mise en place de
        grilles d'analyses standardisées et applicables à chaque tome et saga du
        corpus pour que les résultats obtenus puissent être comparés selon la
        même échelle de valeurs. Trois niveaux d'analyses sont ensuite venus
        hiérarchiser la recherche sur corpus : 1. l'analyse manuelle 2.
        l'analyse semi-automatique 3. l'analyse automatique.
      </Text>
      <Text mb={2}>
        Les résultats infographiques et les données brutes sont regroupés dans
        les différents onglets selon les caractéristiques d’étude. À savoir que
        deux critères de mesure ont aussi été utilisés de façon systématique :
      </Text>
      <Text>
        Un indice de divergence, qui a été calculé dans les trois catégories de
        comparaison (le corpus – les tomes – les sagas) pour pouvoir jauger du
        caractère significatif des variations constatables relatives aux
        éléments examinés.
      </Text>
      <Text mb={2}>
        <i>
          Le détail du calcul est le suivant : 1/ valeur d’étude du corpus
          anglo-américain – valeur d’étude du corpus français = chiffre A ; 2/
          chiffre A x 100 ÷ valeur du corpus anglo-américain = indice de
          divergence du corpus français en pourcentage (négatif ou positif).
        </i>
      </Text>
      <Text>
        Un taux d’homogénéité, qui a été calculé entre les sagas pour chacune
        des caractéristiques étudiées, afin de mesurer le caractère canonique de
        chaque corpus.
      </Text>
      <Text>
        <i>
          Le détail du calcul est le suivant : 1/ 100 ÷ 12 (nombre de sagas
          anglo-américaines) = 8%, soit le pourcentage d’homogénéité parfaite du
          corpus anglo-américain ; 2/ 100 ÷ 6 (nombre de sagas françaises) =
          17%, soit le pourcentage d’homogénéité parfaite du corpus français.
        </i>
      </Text>
    </Box>
  );
}

export function TypologiesAndModelsUsed() {
  return (
    <Box>
      <Heading as="h2" size="md" mb={4}>
        Typologies et modélisations utilisées
      </Heading>
      <Text as="em" mb={2}>
        Les travaux, typologies et modélisations utilisés au cours de cette
        recherche ont été soit appliqués, actualisés, combinés ou générés.
      </Text>

      <OrderedList my={2}>
        <ListItem>
          Typologie souple des 10 facteurs de succès qui suit le cycle de vie du
          best-seller (2 facteurs internes ; 4 facteurs externes primaires ; 4
          facteurs externes secondaires)
        </ListItem>
        <ListItem>
          Le Monomythe combiné aux humanités numériques et adapté au corpus (J.
          Campbell)
        </ListItem>
        <ListItem>Le schéma séquentiel du récit</ListItem>
        <ListItem>Le style démographique (F. Lavocat)</ListItem>
        <ListItem>La différenciation du héros (P. Hamon)</ListItem>
        <ListItem>
          Les travaux de littérovision (M. Bernard et B. Bohet)
        </ListItem>
        <ListItem>Le modèle page turner</ListItem>
      </OrderedList>

      <Stack>
        <Text as="u">Bibliographie indicative :</Text>
        <Text>
          BERNARD Michel, BOHET Baptiste,{" "}
          <Text as="i">
            Littérovision – Un regard différent sur 100 grands romans de la
            littérature française
          </Text>
          , Le Bord de l’eau, Lormont, 2022, 320p.
        </Text>
        <Text>
          CAMPBELL Joseph, <Text as="i">Le héros aux mille et un visages</Text>,
          trad. Henri Crès, Escalquens, Oxus, 2010, 410p.
        </Text>
        <Text>
          HAMON Philippe, « Pour un statut sémiologique du personnage. » in{" "}
          <Text as="i">Poétique du récit</Text>, ouvrage collectif, Seuil,
          Collection Points, Paris, 1977, 180p.
        </Text>
        <Text>
          LAVOCAT Françoise,{" "}
          <Text as="i">
            L'étude des populations fictives comme objet et le « style
            démographique » comme nouveau concept narratologique
          </Text>
          , Fabula, Paris, 2020,{" "}
          <Link
            href="https://www.fabula.org/atelier.php?Populations_fictives"
            isExternal
          >
            https://www.fabula.org/atelier.php?Populations_fictives
          </Link>
        </Text>
        <Text>
          LÉVY Ofra, « Le schéma séquentiel du récit », in{" "}
          <Text as="i">
            Pegasus : pour un laboratoire expérimental et appliqué de théorie
            littéraire
          </Text>
          , sous la direction de Ofra Lévy, n°2 « Les formes textuelles »,
          Paris, éditions Classiques Garnier, Novembre 2025
        </Text>
      </Stack>
    </Box>
  );
}

export function Contact() {
  return (
    <Stack gap="1">
      <Box>
        <Text>
          <strong>Ofra Lévy</strong> - Université Sorbonne Nouvelle Paris III{" "}
        </Text>
      </Box>
      <Box>
        <Text>ofra_92@hotmail.fr</Text>
      </Box>
      <Box>
        <Text>
          Page institutionnelle :{" "}
          <a href="https://www.thalim.cnrs.fr/auteur/ofra-levy ">
            https://www.thalim.cnrs.fr/auteur/ofra-levy{" "}
          </a>
        </Text>
      </Box>
    </Stack>
  );
}
