import corpusImage from "./assets/corpus.png";
import personnagesImage from "./assets/personnages.png";
import langueLangage from "./assets/langue-langage.png";
import coorpusDonneesExternes from "./assets/corpus-donnees-externes.png";
import recit from "./assets/recit.png";

export interface Category {
  name: string;
  imageUrl?: string;
  url: string;
  items?: Category[];
}

export const categories: Category[] = [
  {
    name: "Les Corpus",
    imageUrl: corpusImage,
    url: "les-corpus",
    items: [
      {
        name: "La Quête d'Ewilan",
        imageUrl:
          "https://media.hachette.fr/fit-in/780x1280/imgArticle/RAGEOT/2017/9782700238938-001-X.jpeg?source=web",
        url: "la-quete-dewilan",
        items: [
          {
            name: "Démographie - T1 La Quête d'Ewilan",
            url: "https://docs.google.com/spreadsheets/d/1NBf1V3sud3fIyAVG__TCoA6r7A_zGZza/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Démographie - T2 La Quête d'Ewilan",
            url: "https://docs.google.com/spreadsheets/d/1rKBFr5PofDtr_7vt_kaxYpk5thcl12aa/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Démographie - T3 La Quête d'Ewilan",
            url: "https://docs.google.com/spreadsheets/d/1jVopMy0rk_J8sLzJxJPeb0uR2V9TLgKj/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "La Quête d'Ewilan - Démographie 3 tomes",
            url: "https://docs.google.com/spreadsheets/d/1V3GK8ws8xi_Jpt61YnVMEr8yVqpm_Tdd/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "La Quête d'Ewilan - Schémas narratifs",
            url: "https://docs.google.com/spreadsheets/d/13hfymzxWWdzluSfv5_qon4jhzcILAT-S/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
        ],
      },
      {
        name: "Les Mondes d'Ewilan",
        imageUrl:
          "https://www.glenat.com/sites/default/files/images/livres/couv/9782344037737-001-T.jpeg",
        url: "les-mondes-dewilan",
        items: [
          {
            name: "Démographie - T1 Les Mondes d'Ewilan",
            url: "https://docs.google.com/spreadsheets/d/1P_xVV-niaLRcAOhTgRRNCxJ-DxQH18De/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Démographie - T2 Les Mondes d'Ewilan",
            url: "https://docs.google.com/spreadsheets/d/1aNTf8F8sWK49S714c-jR7m5e9FHRf4rN/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Démographie - T3 Les Mondes d'Ewilan T3",
            url: "https://docs.google.com/spreadsheets/d/1-j64VODJrzv29B30_UjB30AIQfQs4kCa/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Les Mondes d'Ewilan - Démographie",
            url: "https://docs.google.com/spreadsheets/d/1jBlCCYlVwXKiInEiO1GgiIPLSKbyqG1T/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Les Mondes d'Ewilan - Schémas narratifs",
            url: "https://docs.google.com/spreadsheets/d/1yKOphr-GaOvE33vAhlcRyZSszVATWcPh/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
        ],
      },
      {
        name: "Meto",
        imageUrl:
          "https://cdn1.booknode.com/book_cover/655/full/meto-tome-1-la-maison-654698.jpg",
        url: "meto",
        items: [
          {
            name: "Démographie - T1 La maison",
            url: "https://docs.google.com/spreadsheets/d/1-jQBUbt1ZqsSDIbnYTbBAxueFxiiGNJg/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Démographie - T2 L'île",
            url: "https://docs.google.com/spreadsheets/d/1Lf-KIESRjuZhq6ykTgcOZk_DhgHOkas-/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Démographie - T3 Le monde",
            url: "https://docs.google.com/spreadsheets/d/139FZ3nBN4pOLi-aojJqLPcvlOWRfeI40/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Méto - Démographie 3 Tomes",
            url: "https://docs.google.com/spreadsheets/d/1OR-vbG2aodNS4iqel3F2GralbV1s22Oc/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Méto - Schémas narratifs",
            url: "https://docs.google.com/spreadsheets/d/1DNtiys1uyhO1Eyf10LBqBZ3CZuNh1741/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
        ],
      },
      {
        name: "Phobos",
        imageUrl:
          "https://cdn.kobo.com/book-images/508e558b-1490-435f-a882-b9fd211b27d6/353/569/90/False/phobos-tome-1.jpg",
        url: "phobos",
        items: [
          {
            name: "Démographie - T1 Phobos",
            url: "https://docs.google.com/spreadsheets/d/104x1wIyJmZePLs_Obrs7a76t655lI5hB/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Démographie - T2 Phobos",
            url: "https://docs.google.com/spreadsheets/d/1z82OGho4k36qaRRetIpo-sZPxspIUNw-/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Démographie - T3 Phobos",
            url: "https://docs.google.com/spreadsheets/d/1Ni0D-MRwHwsuwj_idUcd259GYjobS1eF/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Démographie - T4 Phobos",
            url: "https://docs.google.com/spreadsheets/d/191zIB52brZIrOFgRRJLLqCoDGxPv3qIP/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Phobos - Démographie 4 tomes",
            url: "https://docs.google.com/spreadsheets/d/1AwuRmPyM3VgkscJl7C-OpLYEHornJi9n/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Phobos - Schémas narratifs",
            url: "https://docs.google.com/spreadsheets/d/1qvDCVeeKUiyW423C03dNk7tPXGmkW3Mz/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
        ],
      },
      {
        name: "Phaenomen",
        imageUrl: "https://www.babelio.com/couv/CVT_25168_1164611.jpg",
        url: "phaenomen",
        items: [
          {
            name: "Démographie - Phaenomen T1",
            url: "https://docs.google.com/spreadsheets/d/1q3lcmefhpmmJzGAZLK1d0DcKXYh6EnWn/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Démographie - Phaenomen T2 Plus près du secret",
            url: "https://docs.google.com/spreadsheets/d/1UFxg_I1d7zW__myHhQ5f7mLQ32KxJhtG/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Démographie - Phaenomen T3 En des lieux obscurs",
            url: "https://docs.google.com/spreadsheets/d/1m5gbq-2mJ0kiDrwHXuNPGqOWibe9xtNz/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Phaenomen - Démographie 3 Tomes",
            url: "https://docs.google.com/spreadsheets/d/1TJaJ0K9c09s7VLwGN5xkLp3F7SNS-caK/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Phaenomen - Schémas narratifs",
            url: "https://docs.google.com/spreadsheets/d/1RMs_XBZ8aFwHhclu82PfgzKHQ1C0sZgz/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
        ],
      },
      {
        name: "U4",
        imageUrl:
          "https://www.lisez.com/usuaris/libros/fotos/9782266294/m_libros/9782266293778ORI.jpg",
        url: "u4",
        items: [
          {
            name: "Jules - Démographie",
            url: "https://docs.google.com/spreadsheets/d/1zbPc54oe6BhwacdSf6JWmfUhL45o6v8U/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Koridwen - Démographie",
            url: "https://docs.google.com/spreadsheets/d/1XiUPD7Zz4l7Ekh491oqDWKkmPfdGsE3-/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Stéphane - Démographie",
            url: "https://docs.google.com/spreadsheets/d/1HZmuGHBr8HxSwzEFEGTKT_Us7mIjfhgM/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "U4 - Démographie 4 tomes",
            url: "https://docs.google.com/spreadsheets/d/10QOF1Jq7u8u7I7xbu-BZWj8wifj2chWa/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "U4 - Schémas narratifs",
            url: "https://docs.google.com/spreadsheets/d/18Ee3Yc1MGtu4XAntauZo3uTPAw2MCJhZ/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
          {
            name: "Yannis - Démographie",
            url: "https://docs.google.com/spreadsheets/d/1ZFF0yHfN5DF4tVNGtNqa1_9pc6ny_8Sv/edit?usp=drive_link&ouid=116839250188491520405&rtpof=true&sd=true",
          },
        ],
      },
      {
        name: "A la croisée des mondes",
        imageUrl: "https://m.media-amazon.com/images/I/51MTtLK2eQL.jpg",
        url: "a-la-croisee-des-mondes",
        items: [
          {
            name: "A la croisée des mondes - Démographie",
            url: "A la croisée des mondes - Démographie.xlsx",
          },
          {
            name: "A la croisée des mondes - Schémas narratifs",
            url: "A la croisée des mondes - Schémas narratifs.xlsx",
          },
          {
            name: "Démographie - T1 A la croisée des mondes",
            url: "Démographie - T1 A la croisée des mondes.xlsx",
          },
          {
            name: "Démographie - T2 A la croisée des mondes",
            url: "Démographie - T2 A la croisée des mondes.xlsx",
          },
          {
            name: "Démographie - T3 A la croisée des mondes",
            url: "Démographie - T3 A la croisée des mondes.xlsx",
          },
        ],
      },
      {
        name: "Divergente",
        imageUrl: "https://example.com/path-to-divergente-image.jpg",
        url: "divergente",
        items: [
          {
            name: "Divergente - Démographie 3 tomes",
            url: "Divergente - Démographie 3 tomes.xlsx",
          },
          {
            name: "Divergente - Schémas narratifs",
            url: "Divergente - Schémas narratifs.xlsx",
          },
          {
            name: "Démographie - T1 Divergente",
            url: "Démographie - T1 Divergente.xlsx",
          },
          {
            name: "Démographie - T2 Divergente",
            url: "Démographie - T2 Divergente.xlsx",
          },
          {
            name: "Démographie - T3 Divergente",
            url: "Démographie - T3 Divergente.xlsx",
          },
        ],
      },
      {
        name: "Eternel",
        imageUrl: "https://example.com/path-to-eternel-image.jpg",
        url: "eternel",
        items: [
          {
            name: "Eternel - Démographie 6 tomes",
            url: "Eternel - Démographie 6 tomes.xlsx",
          },
          {
            name: "Eternel - Schémas narratifs",
            url: "Eternel - Schémas narratifs.xlsx",
          },
          {
            name: "Démographie - T1 Eternel",
            url: "Démographie - T1 Eternel.xlsx",
          },
          {
            name: "Démographie - T2 Eternel",
            url: "Démographie - T2 Eternel.xlsx",
          },
          {
            name: "Démographie - T3 Eternel",
            url: "Démographie - T3 Eternel.xlsx",
          },
          {
            name: "Démographie - T4 Eternel",
            url: "Démographie - T4 Eternel.xlsx",
          },
          {
            name: "Démographie - T5 Eternel",
            url: "Démographie - T5 Eternel.xlsx",
          },
          {
            name: "Démographie - T6 Eternel",
            url: "Démographie - T6 Eternel.xlsx",
          },
        ],
      },
      {
        name: "Harry Potter",
        imageUrl: "https://example.com/path-to-harry-potter-image.jpg",
        url: "harry-potter",
        items: [
          {
            name: "Harry Potter - Démographie 7 tomes",
            url: "Harry Potter - Démographie 7 tomes.xlsx",
          },
          {
            name: "Harry Potter - Schémas narratifs",
            url: "Schémas narratifs.xlsx",
          },
          {
            name: "Démographie Tome 1",
            url: "Tome 1 Démographie.xlsx",
          },
          {
            name: "Démographie Tome 2",
            url: "Démographie Tome 2.xlsx",
          },
          {
            name: "Démographie Tome 3",
            url: "Démographie Tome 3.xlsx",
          },
          {
            name: "Démographie Tome 4",
            url: "Démographie Tome 4.xlsx",
          },
          {
            name: "Démographie Tome 5",
            url: "Tome 5 Démographie.xlsx",
          },
          {
            name: "Démographie Tome 6",
            url: "Tome 6 - Démographie.xlsx",
          },
          {
            name: "Démographie Tome 7",
            url: "Tome 7 Démographie.xlsx",
          },
        ],
      },
      {
        name: "Hunger Games",
        imageUrl: "https://example.com/path-to-hunger-games-image.jpg",
        url: "hunger-games",
        items: [
          {
            name: "Hunger Games - Démographie 3 tomes",
            url: "Hunger Games - Démographie 3 tomes.xlsx",
          },
          {
            name: "Hunger Games - Schémas narratifs",
            url: "Hunger Games - Schémas narratifs.xlsx",
          },
          {
            name: "Démographie - T1 Hunger Games",
            url: "Démographie - T1 Hunger Games.xlsx",
          },
          {
            name: "Démographie - T2 Hunger Games",
            url: "Démographie - T2 Hunger Games.xlsx",
          },
          {
            name: "Démographie - T3 Hunger Games",
            url: "Démographie - T3 Hunger Games.xlsx",
          },
        ],
      },
      {
        name: "Héros de l'Olympe",
        imageUrl: "https://example.com/path-to-heros-de-l-olympe-image.jpg",
        url: "heros-de-l-olympe",
        items: [
          {
            name: "Héros de l'Olympe - Démographie 5 tomes",
            url: "Héros de l'Olympe - Démographie 5 tomes.xlsx",
          },
          {
            name: "Héros de l'Olympe - Schémas narratifs",
            url: "Héros de l'Olympe - Schémas narratifs.xlsx",
          },
          {
            name: "Démographie - T1 Héros de l'Olympe",
            url: "Démographie - T1 Héros de l'Olympe.xlsx",
          },
          {
            name: "Démographie - T2 Héros de l'Olympe",
            url: "Démographie - T2 Héros de l'Olympe.xlsx",
          },
          {
            name: "Démographie - T3 Héros de l'Olympe",
            url: "Démographie - T3 Héros de l'Olympe.xlsx",
          },
          {
            name: "Démographie - T4 Héros de l'Olympe",
            url: "Démographie - T4 Héros de l'Olympe.xlsx",
          },
          {
            name: "Démographie - T5 Héros de l'Olympe",
            url: "Démographie - T5 Héros de l'Olympe.xlsx",
          },
        ],
      },
      {
        name: "L'Épreuve",
        imageUrl: "https://example.com/path-to-l-epreuve-image.jpg",
        url: "l-epreuve",
        items: [
          {
            name: "L'Épreuve - Démographie 3 tomes",
            url: "L'Épreuve - Démographie 3 tomes.xlsx",
          },
          {
            name: "L'Épreuve - Schémas narratifs",
            url: "L'Épreuve - Schémas narratifs.xlsx",
          },
        ],
      },
      {
        name: "L'Héritage",
        imageUrl: "https://example.com/path-to-l-heritage-image.jpg",
        url: "l-heritage",
        items: [
          {
            name: "L'Héritage - Démographie 4 tomes",
            url: "L'Héritage - Démographie 4 tomes.xlsx",
          },
          {
            name: "L'Héritage - Schémas narratifs",
            url: "L'Héritage - Schémas narratifs.xlsx",
          },
        ],
      },
      {
        name: "La Maison de la Nuit",
        imageUrl: "https://example.com/path-to-la-maison-de-la-nuit-image.jpg",
        url: "la-maison-de-la-nuit",
        items: [
          {
            name: "La Maison de la Nuit - Démographie 12 tomes",
            url: "La Maison de la Nuit - Démographie 12 tomes.xlsx",
          },
          {
            name: "La Maison de la Nuit - Schémas narratifs",
            url: "La Maison de la Nuit - Schémas narratifs.xlsx",
          },
        ],
      },
      {
        name: "Percy Jackson",
        imageUrl: "https://example.com/path-to-percy-jackson-image.jpg",
        url: "percy-jackson",
        items: [
          {
            name: "Percy Jackson - Démographie 5 tomes",
            url: "Percy Jackson - Démographie 5 tomes.xlsx",
          },
          {
            name: "Percy Jackson - Schémas narratifs",
            url: "Percy Jackson - Schémas narratifs.xlsx",
          },
          {
            name: "Démographie - T1 Percy Jackson",
            url: "Démographie - T1 Percy Jackson.xlsx",
          },
          {
            name: "Démographie - T2 Percy Jackson",
            url: "Démographie - T2 Percy Jackson.xlsx",
          },
          {
            name: "Démographie - T3 Percy Jackson",
            url: "Démographie - T3 Percy Jackson.xlsx",
          },
          {
            name: "Démographie - T4 Percy Jackson",
            url: "Démographie - T4 Percy Jackson.xlsx",
          },
          {
            name: "Démographie - T5 Percy Jackson",
            url: "Démographie - T5 Percy Jackson.xlsx",
          },
        ],
      },
      {
        name: "The Mortal Instruments",
        imageUrl:
          "https://example.com/path-to-the-mortal-instruments-image.jpg",
        url: "the-mortal-instruments",
        items: [
          {
            name: "The Mortal Instruments - Démographie 6 tomes",
            url: "The Mortal Instruments - Démographie 6 tomes.xlsx",
          },
          {
            name: "The Mortal Instruments - Schémas narratifs",
            url: "The Mortal Instruments - Schémas narratifs.xlsx",
          },
        ],
      },
      {
        name: "Twilight",
        imageUrl: "https://example.com/path-to-twilight-image.jpg",
        url: "twilight",
        items: [
          {
            name: "Twilight - Démographie 4 tomes",
            url: "Twilight - Démographie 4 tomes.xlsx",
          },
          {
            name: "Twilight - Schémas narratifs",
            url: "Twilight - Schémas narratifs.xlsx",
          },
        ],
      },
    ],
  },
  {
    name: "Les Personnages",
    imageUrl: personnagesImage,
    url: "/les-personnages",
    items: [
      {
        name: "Densité",
        url: "densite",
        items: [
          {
            name: "Densité infographie.docx",
            url: "Densité infographie.docx",
          },
          {
            name: "Densité personnages nommés données brutes - CORPUS.xlsx",
            url: "Densité personnages nommés données brutes - CORPUS.xlsx",
          },
          {
            name: "Densité personnages nommés données brutes - Corpus EN FR.xlsx",
            url: "Densité personnages nommés données brutes - Corpus EN FR.xlsx",
          },
          {
            name: "Densité personnages nommés données brutes - Sagas EN FR.xlsx",
            url: "Densité personnages nommés données brutes - Sagas EN FR.xlsx",
          },
          {
            name: "Densité personnages nommés données brutes - Tomes EN FR.xlsx",
            url: "Densité personnages nommés données brutes - Tomes EN FR.xlsx",
          },
          {
            name: "Densité personnages non nommés données brutes - CORPUS.xlsx",
            url: "Densité personnages non nommés données brutes - CORPUS.xlsx",
          },
          {
            name: "Densité personnages non nommés données brutes - Corpus EN FR.xlsx",
            url: "Densité personnages non nommés données brutes - Corpus EN FR.xlsx",
          },
          {
            name: "Densité personnages non nommés données brutes - Sagas EN FR.xlsx",
            url: "Densité personnages non nommés données brutes - Sagas EN FR.xlsx",
          },
          {
            name: "Densité personnages non nommés données brutes - Tomes EN FR.xlsx",
            url: "Densité personnages non nommés données brutes - Tomes EN FR.xlsx",
          },
          {
            name: "Densité personnages total données brutes - CORPUS.xlsx",
            url: "Densité personnages total données brutes - CORPUS.xlsx",
          },
          {
            name: "Densité personnages total données brutes - Corpus EN FR.xlsx",
            url: "Densité personnages total données brutes - Corpus EN FR.xlsx",
          },
          {
            name: "Densité personnages total données brutes - Sagas EN FR.xlsx",
            url: "Densité personnages total données brutes - Sagas EN FR.xlsx",
          },
          {
            name: "Densité personnages total données brutes - Tomes EN FR.xlsx",
            url: "Densité personnages total données brutes - Tomes EN FR.xlsx",
          },
        ],
      },
      {
        name: "Différenciation du Héros",
        url: "differentiation-du-heros",
        items: [
          {
            name: "Différenciation du héros infographie.docx",
            url: "Différenciation du héros infographie.docx",
          },
          {
            name: "Différenciation du heros données brutes - CORPUS.xlsx",
            url: "Différenciation du heros données brutes - CORPUS.xlsx",
          },
          {
            name: "Différenciation du heros données brutes - Sagas EN FR.xlsx",
            url: "Différenciation du heros données brutes - Sagas EN FR.xlsx",
          },
        ],
      },
      {
        name: "Fréquence Occurentielle",
        url: "frequence-occurentielle",
        items: [
          {
            name: "Fréquence occurentielle infographie.docx",
            url: "Fréquence occurentielle infographie.docx",
          },
          {
            name: "Fréquence occurentielle heros données brutes - CORPUS.xlsx",
            url: "Fréquence occurentielle heros données brutes - CORPUS.xlsx",
          },
          {
            name: "Fréquence occurentielle heros données brutes - Corpus EN FR.xlsx",
            url: "Fréquence occurentielle heros données brutes - Corpus EN FR.xlsx",
          },
          {
            name: "Fréquence occurentielle heros données brutes - Sagas EN FR.xlsx",
            url: "Fréquence occurentielle heros données brutes - Sagas EN FR.xlsx",
          },
          {
            name: "Fréquence occurentielle heros données brutes - Tomes EN FR.xlsx",
            url: "Fréquence occurentielle heros données brutes - Tomes EN FR.xlsx",
          },
        ],
      },
      {
        name: "Taux d'Information",
        url: "taux-d-information",
        items: [
          {
            name: "Taux d_information infographie.docx",
            url: "Taux d_information infographie.docx",
          },
          {
            name: "Taux d_information données brutes - Sagas FR.xlsx",
            url: "Taux d_information données brutes - Sagas FR.xlsx",
          },
          {
            name: "Taux d_information données brutes - CORPUS.xlsx",
            url: "Taux d_information données brutes - CORPUS.xlsx",
          },
          {
            name: "Taux d_information données brutes - Corpus EN.xlsx",
            url: "Taux d_information données brutes - Corpus EN.xlsx",
          },
          {
            name: "Taux d_information données brutes - Corpus FR.xlsx",
            url: "Taux d_information données brutes - Corpus FR.xlsx",
          },
          {
            name: "Taux d_information données brutes - Sagas EN.xlsx",
            url: "Taux d_information données brutes - Sagas EN.xlsx",
          },
          {
            name: "Taux d_information données brutes - Tomes EN.xlsx",
            url: "Taux d_information données brutes - Tomes EN.xlsx",
          },
          {
            name: "Taux d_information données brutes - Tomes FR.xlsx",
            url: "Taux d_information données brutes - Tomes FR.xlsx",
          },
        ],
      },
    ],
  },
  {
    name: "Langue et Langage",
    imageUrl: langueLangage,
    url: "langue-langage",
    items: [
      {
        name: "Caractéristiques grammaticales",
        url: "caracteristiques-grammaticales",
        items: [
          {
            name: "Caractéristiques grammaticales données brutes - corpus.xlsx",
            url: "Caractéristiques grammaticales données brutes - corpus.xlsx",
          },
          {
            name: "Caractéristiques grammaticales données brutes - homogénéité.xlsx",
            url: "Caractéristiques grammaticales données brutes - homogénéité.xlsx",
          },
          {
            name: "Caractéristiques grammaticales données brutes - sagas.xlsx",
            url: "Caractéristiques grammaticales données brutes - sagas.xlsx",
          },
          {
            name: "Caractéristiques grammaticales données brutes - tomes.xlsx",
            url: "Caractéristiques grammaticales données brutes - tomes.xlsx",
          },
          {
            name: "Caractéristiques grammaticales infographie.docx",
            url: "Caractéristiques grammaticales infographie.docx",
          },
        ],
      },
      {
        name: "Page Turner",
        url: "page-turner",
        items: [
          {
            name: "Page Turner données brutes - CORPUS.xlsx",
            url: "Page Turner données brutes - CORPUS.xlsx",
          },
          {
            name: "Page Turner données brutes - Corpus EN FR.xlsx",
            url: "Page Turner données brutes - Corpus EN FR.xlsx",
          },
          {
            name: "Page Turner données brutes - tomes et sagas EN.xlsx",
            url: "Page Turner données brutes - tomes et sagas EN.xlsx",
          },
          {
            name: "Page Turner données brutes - tomes et sagas FR.xlsx",
            url: "Page Turner données brutes - tomes et sagas FR.xlsx",
          },
          {
            name: "Page Turner infographie.docx",
            url: "Page Turner infographie.docx",
          },
        ],
      },
      {
        name: "Proximité lexicale",
        url: "proximite-lexicale",
        items: [
          {
            name: "Proximité lexicale infographie.docx",
            url: "Proximité lexicale infographie.docx",
          },
        ],
      },
      {
        name: "Temporalité",
        url: "temporalite",
        items: [
          {
            name: "Temporalité données brutes - corpus.xlsx",
            url: "Temporalité données brutes - corpus.xlsx",
          },
          {
            name: "Temporalité données brutes - homogénéité.xlsx",
            url: "Temporalité données brutes - homogénéité.xlsx",
          },
          {
            name: "Temporalité données brutes - sagas.xlsx",
            url: "Temporalité données brutes - sagas.xlsx",
          },
          {
            name: "Temporalité données brutes - tomes.xlsx",
            url: "Temporalité données brutes - tomes.xlsx",
          },
          {
            name: "Temporalité infographie.docx",
            url: "Temporalité infographie.docx",
          },
        ],
      },
    ],
  },
  {
    name: "Le Corpus - Données Externes",
    imageUrl: coorpusDonneesExternes,
    url: "/le-corpus-donnees-externes",
    items: [
      {
        name: "Données sur le corpus.xlsx",
        url: "Données sur le corpus.xlsx",
      },
      {
        name: "Echantillon de marché",
        url: "echantillon-de-marche",
        items: [
          { name: "Chiffres de ventes.xlsx", url: "Chiffres de ventes.xlsx" },
          { name: "Données.xlsx", url: "Données.xlsx" },
          { name: "Prix moyens sagas.xlsx", url: "Prix moyens sagas.xlsx" },
          { name: "Prix moyens tomes.xlsx", url: "Prix moyens tomes.xlsx" },
        ],
      },
      {
        name: "Frise",
        url: "frise",
        items: [
          { name: "Auteurs.bin", url: "Auteurs.bin" },
          { name: "Auteurs.png", url: "Auteurs.png" },
          { name: "CorpusENTRAD.bin", url: "CorpusENTRAD.bin" },
          { name: "CorpusENTRAD.png", url: "CorpusENTRAD.png" },
          { name: "Corpusoriginal.bin", url: "Corpusoriginal.bin" },
          { name: "Corpusoriginal.png", url: "Corpusoriginal.png" },
          { name: "Corpustrad.bin", url: "Corpustrad.bin" },
          { name: "Corpustrad.png", url: "Corpustrad.png" },
        ],
      },
      { name: "Genres.xlsx", url: "Genres.xlsx" },
      { name: "Langues.xlsx", url: "Langues.xlsx" },
      { name: "Prix littéraires.xlsx", url: "Prix littéraires.xlsx" },
      { name: "Référencement.xlsx", url: "Référencement.xlsx" },
      { name: "Score de popularité.xlsx", url: "Score de popularité.xlsx" },
      { name: "Titresannexes.xlsx", url: "Titresannexes.xlsx" },
      { name: "Transmedia.xlsx", url: "Transmedia.xlsx" },
      { name: "Typologie auteurs.xlsx", url: "Typologie auteurs.xlsx" },
      { name: "graph.xlsx", url: "graph.xlsx" },
      { name: "pdm par tome.xlsx", url: "pdm par tome.xlsx" },
    ],
  },
  {
    name: "Le Récit",
    imageUrl: recit,
    url: "/le-recit",
    items: [
      {
        name: "Agencement textuel",
        url: "agencement-textuel",
        items: [
          {
            name: "Agencement textuel données brutes - CORPUS.xlsx",
            url: "Agencement textuel données brutes - CORPUS.xlsx",
          },
          {
            name: "Agencement textuel données brutes - Corpus EN FR.xlsx",
            url: "Agencement textuel données brutes - Corpus EN FR.xlsx",
          },
          {
            name: "Agencement textuel données brutes - tomes et sagas EN.xlsx",
            url: "Agencement textuel données brutes - tomes et sagas EN.xlsx",
          },
          {
            name: "Agencement textuel données brutes - tomes et sagas FR.xlsx",
            url: "Agencement textuel données brutes - tomes et sagas FR.xlsx",
          },
          {
            name: "Agencement textuel infographie.docx",
            url: "Agencement textuel infographie.docx",
          },
        ],
      },
      {
        name: "Dynamique textuelle",
        url: "dynamique-textuelle",
        items: [
          {
            name: "Dynamique textuelle données brutes - CORPUS.xlsx",
            url: "Dynamique textuelle données brutes - CORPUS.xlsx",
          },
          {
            name: "Dynamique textuelle données brutes - Corpus EN et FR.xlsx",
            url: "Dynamique textuelle données brutes - Corpus EN et FR.xlsx",
          },
          {
            name: "Dynamique textuelle données brutes - tomes et sagas.xlsx",
            url: "Dynamique textuelle données brutes - tomes et sagas.xlsx",
          },
          {
            name: "Dynamique textuelle infographie.docx",
            url: "Dynamique textuelle infographie.docx",
          },
        ],
      },
      {
        name: "Le Monomythe",
        url: "le-monomythe",
        items: [
          {
            name: "Le Monomythe données brutes - CORPUS.xlsx",
            url: "Le Monomythe données brutes - CORPUS.xlsx",
          },
          {
            name: "Le Monomythe données brutes - Corpus EN.xlsx",
            url: "Le Monomythe données brutes - Corpus EN.xlsx",
          },
          {
            name: "Le Monomythe données brutes - Corpus FR.xlsx",
            url: "Le Monomythe données brutes - Corpus FR.xlsx",
          },
          {
            name: "Le Monomythe données brutes - tomes et sagas EN.xlsx",
            url: "Le Monomythe données brutes - tomes et sagas EN.xlsx",
          },
          {
            name: "Le Monomythe données brutes - tomes et sagas FR.xlsx",
            url: "Le Monomythe données brutes - tomes et sagas FR.xlsx",
          },
          {
            name: "Le Monomythe infographie 1.docx",
            url: "Le Monomythe infographie 1.docx",
          },
          {
            name: "Le Monomythe infographie 2.docx",
            url: "Le Monomythe infographie 2.docx",
          },
        ],
      },
      {
        name: "Le schéma sequentiel du récit",
        url: "le-schema-sequentiel-du-recit",
        items: [
          {
            name: "Le schéma sequentiel du récit données brutes - CORPUS.xlsx",
            url: "Le schéma sequentiel du récit données brutes - CORPUS.xlsx",
          },
          {
            name: "Le schéma sequentiel du récit données brutes - Corpus EN.xlsx",
            url: "Le schéma sequentiel du récit données brutes - Corpus EN.xlsx",
          },
          {
            name: "Le schéma sequentiel du récit données brutes - Corpus FR.xlsx",
            url: "Le schéma sequentiel du récit données brutes - Corpus FR.xlsx",
          },
          {
            name: "Le schéma sequentiel du récit données brutes - tomes et sagas EN.xlsx",
            url: "Le schéma sequentiel du récit données brutes - tomes et sagas EN.xlsx",
          },
          {
            name: "Le schéma sequentiel du récit données brutes - tomes et sagas FR.xlsx",
            url: "Le schéma sequentiel du récit données brutes - tomes et sagas FR.xlsx",
          },
          {
            name: "Le schéma séquentiel du récit infographie.docx",
            url: "Le schéma séquentiel du récit infographie.docx",
          },
        ],
      },
    ],
  },
];
