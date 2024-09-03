export const angloAmericanSagasFiles = import.meta.glob(
    "../documents/Le corpus/Les sagas anglo-américaines/**/*.xlsx",
    {
      query: "?url",
      import: "default",
    }
  );
  
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
);

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
  "../documents/Le récit/**/*.xlsx",
  {
    query: "?url",
    import: "default",
  }
);

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
  "../documents/Les personnages/**/*.xlsx",
  {
    query: "?url",
    import: "default",
  }
);

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
  "../documents/Langue et langage/**/*.xlsx",
  {
    query: "?url",
    import: "default",
  }
);

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




