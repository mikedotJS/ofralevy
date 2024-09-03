export const angloAmericanSagasFiles = import.meta.glob(
    "../documents/Le corpus/Les sagas anglo-américaines/**/*.xlsx",
    {
      query: "?url",
      import: "default",
    }
  )  as Record<string, () => Promise<string>>;
  
  export const angloAmericanSeriesNames = [
    "A la croisée des mondes",
    "Divergente",
    "Eternel",
    "Harry Potter",
    "Héros de l_Olympe",
    "Hunger Games",
    "L_Épreuve",
    "L_Héritage",
    "La Maison de la Nuit",
    "Percy Jackson",
    "The Mortal Instruments",
    "Twilight",
  ];
  
  export const angloAmericanImportedSeriesFiles = angloAmericanSeriesNames.reduce(
    (acc, seriesName) => {
      acc[seriesName] = Object.fromEntries(
        Object.entries(angloAmericanSagasFiles).filter(([path]) =>
          path.includes(seriesName)
        )
      );
      return acc;
    },
    {} as Record<string, Record<string, () => Promise<string>>>
  );

export const frenchSagasFiles = import.meta.glob(
  "../documents/Le corpus/Les sagas françaises/**/*.xlsx",
  {
    query: "?url",
    import: "default",
  }
)  as Record<string, () => Promise<string>>;

export const frenchSeriesNames = [
  "La Quête d_Ewilan",
  "Les Mondes d_Ewilan",
  "Meto",
  "Phobos",
  "Phoenomen",
  "U4",
];

export const frenchImportedSeriesFiles = frenchSeriesNames.reduce(
  (acc, seriesName) => {
    acc[seriesName] = Object.fromEntries(
      Object.entries(frenchSagasFiles).filter(([path]) =>
        path.includes(seriesName)
      )
    );
    return acc;
  },
  {} as Record<string, Record<string, () => Promise<string>>>
);

export const frenchResearchFiles = import.meta.glob(
  "../documents/Le récit/**/*.{xlsx,pdf}",
  {
    query: "?url",
    import: "default",
  }
)  as Record<string, () => Promise<string>>;

export const frenchResearchNames = [
  "Le Monomythe - données brutes",
  "Le rythme - données brutes",
  "Le schéma sequentiel du récit - données brutes",
  "Le récit - infographie.pdf",
];

export const frenchImportedResearchFiles = frenchResearchNames.reduce(
  (acc, researchName) => {
    acc[researchName] = Object.fromEntries(
      Object.entries(frenchResearchFiles).filter(([path]) =>
        path.includes(researchName)
      )
    );
    return acc;
  },
  {} as Record<string, Record<string, () => Promise<string>>>
);

export const frenchCharacterFiles = import.meta.glob(
  "../documents/Les personnages/**/*.{xlsx,pdf}",
  {
    query: "?url",
    import: "default",
  }
)  as Record<string, () => Promise<string>>;

export const frenchCharacterNames = [
  "Différenciation du héros - données brutes",
  "Style démographique - données brutes",
  "Les personnages - infographie.pdf",
];

export const frenchImportedCharacterFiles = frenchCharacterNames.reduce(
  (acc, characterName) => {
    acc[characterName] = Object.fromEntries(
      Object.entries(frenchCharacterFiles).filter(([path]) =>
        path.includes(characterName)
      )
    );
    return acc;
  },
  {} as Record<string, Record<string, () => Promise<string>>>
);

export const frenchLanguageFiles = import.meta.glob(
  "../documents/Langue et langage/**/*.{xlsx,pdf}",
  {
    query: "?url",
    import: "default",
  }
)  as Record<string, () => Promise<string>>;

export const frenchLanguageNames = [
  "Littérovision - données brutes",
  "Page Turner - données brutes",
  "Langue et langage - infographie.pdf",
];

export const frenchImportedLanguageFiles = frenchLanguageNames.reduce(
  (acc, languageName) => {
    acc[languageName] = Object.fromEntries(
      Object.entries(frenchLanguageFiles).filter(([path]) =>
        path.includes(languageName)
      )
    );
    return acc;
  },
  {} as Record<string, Record<string, () => Promise<string>>>
);

export const frenchExternalDataFiles = import.meta.glob(
  "../documents/Données externes/**/*.{xlsx,png}",
  {
    query: "?url",
    import: "default",
  }
) as Record<string, () => Promise<string>>;

export const frenchChronologieDataNames = [
  "Auteurs.png",
  "Frise 1.png",
  "Frise 2.png",
  "Frise 3.png",
];

export const frenchEchantillonDataNames = [
  "Chiffres de ventes - détails.xlsx",
  "Chiffres de ventes.xlsx",
  "Prix moyens - sagas.xlsx",
  "Prix moyens - tomes.xlsx",
  "Auteurs.xlsx",
  "Catalogue - sagas anglo-américaines.xlsx",
  "Catalogue - sagas françaises.xlsx",
  "Genres de l_imaginaire.xlsx",
  "Prix littéraires.xlsx",
  "Référencement web.xlsx",
  "Scores de popularité.xlsx",
  "Titres annexes.xlsx",
  "Traductions.xlsx",
  "Transmedia.xlsx",
];

export const frenchImportedChronologieDataFiles = frenchChronologieDataNames.reduce(
  (acc, dataName) => {
    acc[dataName] = Object.fromEntries(
      Object.entries(frenchExternalDataFiles).filter(([path]) =>
        path.includes(dataName)
      )
    );
    return acc;
  },
  {} as Record<string, Record<string, () => Promise<string>>>
);

export const frenchImportedEchantillonDataFiles = frenchEchantillonDataNames.reduce(
  (acc, dataName) => {
    acc[dataName] = Object.fromEntries(
      Object.entries(frenchExternalDataFiles).filter(([path]) =>
        path.includes(dataName)
      )
    );
    return acc;
  },
  {} as Record<string, Record<string, () => Promise<string>>>
);






