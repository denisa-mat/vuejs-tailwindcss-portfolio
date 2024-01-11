// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.
import {ElementTypeEnum} from "@/model/ElementTypeEnum.ts";

const projects = [

// ISKM01 Informační vědy
    {
        id: 1,
        type: "Kisk",
        title: 'ISKM01 Informační vědy',
        category: '1. semestr',
        img: 'https://drive.google.com/uc?export=view&id=1cFkkjWiNUjKbNbOl_ENhO4cd8l1s3Gmn',
        //img: 'https://ucnmuni-my.sharepoint.com/personal/485131_muni_cz/Documents/KISK/IMG/ISKM01.jpg',
        createdDate: '26. 9. 2023',
        tag: 'kisk',
        about: 'O předmětu',
        aboutDetail: [
            {
                title: 'Semestr',
                detail: 'podzim 2023',
                link: false
            },
            {
                title: 'Ukončení',
                detail: 'zkouška',
                link: false
            },
            {
                title: 'Počet kreditů',
                detail: '5',
                link: false
            },
            {
                title: 'Sylabus',
                detail: 'ISKM01',
                url: 'https://is.muni.cz/predmet/phil/podzim2023/ISKM01',
                link: true
            },
            {
                title: 'Soubory',
                detail: 'Google disk',
                url: 'https://drive.google.com/drive/folders/1CQZDPc48bOBTuyjJFrs1w8bCgdARksov?usp=sharing',
                link: true
            }
        ],
        descriptionHeading: 'Popis předmětu',
        descriptionDetail: 'Cílem předmětu je představit nová témata a trendy v informační vědě, seznámit se stěžejními teoriemi, poukázat na různé aplikace poznatků informační vědy či na oblasti působení otevřené absolventům oboru. ',
        toolsHeading: 'Nástroje a dovednosti',
        toolsDetail: [
            // 'HTML',
            // 'JS',
            // 'VUE'
        ],
        projectDetailsHeading: 'Příspěvek se připravuje',
        projectDetails: [
            {
                id: 1,
                details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
            },
        ],
        content: [
            {
                sectionHeading: 'Lorem ipsum',
                sectionId: 1,
                sectionDate: '23. 10. 2023',
                sectionParagraphs: [
                    {
                        id: 1,
                        details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
                    },
                    {
                        id: 2,
                        details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
                    }
                ]
            }
        ],
    },


// ISKM02 Design informačních služeb, rozhraní a interakcí
    {
        id: 2,
        type: "Kisk",
        title: 'ISKM02 Design informačních služeb, rozhraní a interakcí',
        category: '1. semestr',
        img: 'https://drive.google.com/uc?export=view&id=1ByxWBV01cs3Bvqo71EVuZRVoQPcxOdVs',
        //img: 'https://ucnmuni-my.sharepoint.com/personal/485131_muni_cz/Documents/KISK/IMG/ISKM02.jpg',
        createdDate: 'Jul 26, 2021',
        tag: 'kisk',
        about: 'O předmětu',
        aboutDetail: [
            {
                title: 'Semestr',
                detail: 'podzim 2023',
                link: false
            },
            {
                title: 'Ukončení',
                detail: 'zkouška',
                link: false
            },
            {
                title: 'Počet kreditů',
                detail: '5',
                link: false
            },
            {
                title: 'Sylabus',
                detail: 'ISKM02',
                url: 'https://is.muni.cz/auth/predmet/phil/podzim2023/ISKM02',
                link: true
            },
            {
                title: 'Soubory',
                detail: 'Google disk',
                url: 'https://drive.google.com/drive/folders/1aFrEdCimEDhlHC_V6g0bzXfiW434KB03?usp=sharing',
                link: true
            }
        ],
        descriptionHeading: 'Popis předmetu',
        descriptionDetail: 'Cílem tohoto předmětu je poskytnout studujícím mezioborové znalosti v oblasti inovací a designu informačních služeb a otevřít témata společná pro studijní profilaci Design informačních služeb. ',
        toolsHeading: 'Nástroje a dovednosti',
        toolsDetail: [
            // 'HTML',
            // 'JS',
            // 'VUE'
        ],
        projectDetailsHeading: 'Příspěvek se připravuje',
        projectDetails: [
            {
                id: 1,
                details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
            },
        ],
        content: [
            {
                sectionHeading: 'Lorem ipsum',
                sectionId: 1,
                sectionDate: '23. 10. 2023',
                sectionParagraphs: [
                    {
                        id: 1,
                        details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
                    },
                    {
                        id: 2,
                        details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
                    }
                ]
            }
        ],
    },


// ISKM03 Literatura, knihovní procesy a trh
    {
        id: 3,
        type: "Kisk",
        title: 'ISKM03 Literatura, knihovní procesy a trh',
        category: '1. semestr',
        img: 'https://drive.google.com/uc?export=view&id=1dCvDpojo17X8C4QHKgvDjMZEqyeXhejk',
        //img: 'https://ucnmuni-my.sharepoint.com/personal/485131_muni_cz/Documents/KISK/IMG/ISKM03.jpg',
        createdDate: 'Jul 26, 2021',
        tag: 'kisk',
        about: 'O předmětu',
        aboutDetail: [
            {
                title: 'Semestr',
                detail: 'podzim 2023',
                link: false
            },
            {
                title: 'Ukončení',
                detail: 'zkouška',
                link: false
            },
            {
                title: 'Počet kreditů',
                detail: '5',
                link: false
            },
            {
                title: 'Sylabus',
                detail: 'ISKM03',
                url: 'https://is.muni.cz/predmet/phil/podzim2023/ISKM03',
                link: true
            },
            {
                title: 'Soubory',
                detail: 'Google disk',
                url: 'https://drive.google.com/drive/folders/1qu1w1LHs6siV_VVBMiIzZqsdgEVtC_ZQ?usp=sharing',
                link: true
            }
        ],
        descriptionHeading: 'Popis předmetu',
        descriptionDetail: 'Předmět má dva stěžejní cíle. Dát studentům relevantní poznání knižního trhu a knihovních procesů na pozadí vývoje literatury, společnosti a humanitních věd. Vést studenty k tomu, aby si uvědomili a chápali faktory, které se na vývoji pojetí spisovatele, literárního pole a akvizice podílely v minulosti a které jsou hybateli současného dění. ',
        toolsHeading: 'Nástroje a dovednosti',
        toolsDetail: [
            // 'HTML',
            // 'JS',
            // 'VUE'
        ],
        projectDetailsHeading: 'Příspěvek se připravuje',
        projectDetails: [
            {
                id: 1,
                details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
            },
        ],
        content: [
            {
                sectionHeading: 'Lorem ipsum',
                sectionId: 1,
                sectionDate: '00. 00. 0000',
                sectionParagraphs: [
                    {
                        id: 1,
                        details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
                    },
                    {
                        id: 2,
                        details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
                    }
                ]
            }
        ],
    },


// ISKM04 Seminář k diplomové práci I: Východiska a metodologie
    {
        id: 4,
        type: "Kisk",
        title: 'ISKM04 Seminář k diplomové práci I: Východiska a metodologie',
        category: '1. semestr',
        img: 'https://drive.google.com/uc?export=view&id=1avWnmOJqyZU9NvgTavNyR_FLnCUrYQNv',
        createdDate: '00. 00. 0000',
        tag: 'kisk',
        about: 'O předmětu',
        aboutDetail: [
            {
                title: 'Semestr',
                detail: 'podzim 2023',
                link: false
            },
            {
                title: 'Ukončení',
                detail: 'zkouška',
                link: false
            },
            {
                title: 'Počet kreditů',
                detail: '5',
                link: false
            },
            {
                title: 'Sylabus',
                detail: 'ISKM04',
                url: 'https://is.muni.cz/predmet/phil/podzim2023/ISKM04',
                link: true
            },
            {
                title: 'Soubory',
                detail: 'Google disk',
                url: 'https://drive.google.com/drive/folders/1akMk_7e2sX729-asC04z3bE91xd5xMme?usp=sharing',
                link: true
            }
        ],
        descriptionHeading: 'Popis předmetu',
        descriptionDetail: 'Seznámit studenty s různými paradigmaty, potenciálními tematickými okruhy diplomových prací a na ně navazujícími výzkumnými metodami využívanými v ISK, které mohou využít jako inspiraci při přípravě projektu diplomové práce. ',
        toolsHeading: 'Nástroje a dovednosti',
        toolsDetail: [
            // 'HTML',
            // 'JS',
            // 'VUE'
        ],
        projectDetailsHeading: 'Příspěvek se připravuje',
        projectDetails: [
            {
                id: 1,
                details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
            },
        ],
        content: [
            {
                sectionHeading: 'Lorem ipsum',
                sectionId: 1,
                sectionDate: '00. 00. 0000',
                sectionParagraphs: [
                    {
                        id: 1,
                        details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
                    },
                    {
                        id: 2,
                        details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
                    }
                ]
            }
        ],
    },


// ISKM29 Blok expertů
    {
        id: 7,
        type: "Kisk",
        title: 'ISKM29 Blok expertů',
        category: '1. semestr',
        img: 'https://drive.google.com/uc?export=view&id=1US-FlUWd6SewlPiMSwS0MAyzTrmrkdlg',
        createdDate: '00. 00. 0000',
        tag: 'kisk',
        about: 'O předmětu',
        aboutDetail: [
            {
                title: 'Semestr',
                detail: 'podzim 2023',
                link: false
            },
            {
                title: 'Ukončení',
                detail: 'zkouška',
                link: false
            },
            {
                title: 'Počet kreditů',
                detail: '5',
                link: false
            },
            {
                title: 'Sylabus',
                detail: 'ISKM29',
                url: 'https://is.muni.cz/predmet/phil/podzim2023/ISKM29',
                link: true
            },
            {
                title: 'Soubory',
                detail: 'Google disk',
                url: 'https://drive.google.com/drive/folders/19fnd-APi7GBzG26zTWIPlLWZaE5kjxk3?usp=sharing',
                link: true
            }
        ],
        descriptionHeading: 'Popis předmetu',
        descriptionDetail: ' Vzdělávací obsah předmětu tvoří přednášky zajímavých osobností z oboru i transdisciplinárních expertů a expertek z praxe. Cílem předmětu je zprostředkovat studentům aktuální dění v oboru i v transdisciplinárním pohledu',
        toolsHeading: 'Nástroje a dovednosti',
        toolsDetail: [
            // 'HTML',
            // 'JS',
            // 'VUE'
        ],
        projectDetailsHeading: 'Příspěvek se připravuje',
        projectDetails: [
            {
                id: 1,
                details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
            },
        ],
        content: [
            {
                sectionHeading: 'Lorem ipsum',
                sectionId: 1,
                sectionDate: '00. 00. 0000',
                sectionParagraphs: [
                    {
                        id: 1,
                        details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
                    },
                    {
                        id: 2,
                        details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
                    }
                ]
            }
        ],
    },


// ISKM31 Vzdělávací technologie
    {
        id: 6,
        type: "Kisk",
        title: 'ISKM31 Vzdělávací technologie',
        category: '1. semestr',
        img: 'https://drive.google.com/uc?export=view&id=1YkrEHVTBt2s5Ml2F0EdP_lG1ExaRh120',
        createdDate: '26. 9. 2023',
        tag: 'kisk',
        about: 'O předmětu',
        aboutDetail: [
            {
                title: 'Semestr',
                detail: 'podzim 2023',
                link: false
            },
            {
                title: 'Ukončení',
                detail: 'zkouška',
                link: false
            },
            {
                title: 'Počet kreditů',
                detail: '5',
                link: false
            },
            {
                title: 'Sylabus',
                detail: 'ISKM31',
                url: 'https://is.muni.cz/predmet/phil/podzim2023/ISKM31',
                link: true
            },
            {
                title: 'Soubory',
                detail: 'Google disk',
                url: 'https://drive.google.com/drive/folders/1vKJk6SvVVHVUMm5GNDCHXMDbAmfiUnxK?usp=sharing',
                link: true
            }
        ],
        descriptionHeading: 'Popis předmetu',
        descriptionDetail: 'Cílem předmětu je nabídnout studentům základní vhled do problematiky vzdělávacích technologií. To, co se student teoreticky naučí, může hned konfrontovat s praxí. Studenti získají kontakt se skutečně aktuálními a důležitými trendy a budou připraveni na jejich širokou aplikaci do praxe. ',
        toolsHeading: 'Nástroje a dovednosti',
        toolsDetail: [
            // 'HTML',
            // 'JS',
            // 'VUE'
        ],
        projectDetailsHeading: 'Příspěvek se připravuje',
        projectDetails: [
            {
                id: 1,
                details: 'Lorem ipsum dolor sit amet, consectetuer adipisci	ng elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
            },
        ],
        content: [
            {
                sectionHeading: 'První přednáška',
                sectionId: 1,
                sectionDate: '00. 00. 0000',
                sectionParagraphs: [
                    {
                        id: 1,
                        details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
                    },
                    {
                        id: 2,
                        details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
                    }
                ]
            }
        ],
    },


// ISKM55 Nástroje a metody datové analytiky
    {
        id: 5,
        type: "Kisk",
        title: 'ISKM55 Nástroje a metody datové analytiky',
        category: '1. semestr',

        img: 'https://drive.google.com/uc?export=view&id=154xI9RxiFQN52_5AomIvgB5ylX2WlwFa',
        createdDate: '01. 10. 2023',
        tag: 'kisk',
        about: 'O předmětu',
        aboutDetail: [
            {
                title: 'Semestr',
                detail: 'podzim 2023',
                link: false
            },
            {
                title: 'Ukončení',
                detail: 'kolokvium',
                link: false
            },
            {
                title: 'Počet kreditů',
                detail: '5',
                link: false
            },
            {
                title: 'Sylabus',
                detail: 'ISKM55',
                url: 'https://is.muni.cz/predmet/phil/podzim2023/ISKM55',
                link: true
            },
            {
                title: 'Soubory',
                detail: 'Google disk',
                url: 'https://drive.google.com/drive/folders/1768MVSjUAzpVZaH0WUSU5PvHDvGWhryt?usp=drive_link',
                link: true
            }
        ],
        descriptionHeading: 'Popis předmětu',
        descriptionDetail: 'Cílem předmětu je poskytnutí studentům vhled do problematiky datové analýzy a nejpoužívanějších metod či nástrojů pro práci s daty.',
        toolsHeading: 'Nástroje a dovednosti',
        toolsDetail: [
            'CSV',
            'XML',
            'API',
            'Excel',
            'Power BI',
            'Pandas'
        ],
        projectDetails: [
            {
                id: 1,
                details: 'Následující odstavce budu věnovány úkolům do předmětu nástroje datové analytiky. Vytvořené soubory budou vždy uložené ve veřejně dostupné složce, na kterou vede odkaz z levého panelu této stránky.'
            },
        ],
        content: [
            {
                sectionHeading: 'Úkol 1',
                sectionId: 1,
                sectionDate: '2. 10. 2023',
                sectionParagraphs: [
                    {
                        id: 0,
                        type: ElementTypeEnum.Link,
                        linkName: 'Úkol 1',
                        details: 'https://drive.google.com/drive/folders/1x0E5q3EQX63fRamtpGclYZUqvvqNgm8M?usp=drive_link'
                    },
                    {
                        id: 1,
                        details: 'První úkol se skládá z více částí, konkrétně vytvoření CSV souboru zobrazující náš týdenní rozvrh, práce s GPX formátem a vyzkoušení práce s API.'
                    },
                    {
                        id: 2,
                        details: 'CSV soubor jsem navrhla tak, že entitou je jeden vyučovací blok, který obsahuje informace o kódu předmětu, název, místnost v níž výuka probíhá (lokace), den v týdnu a časové údaje od a do. CSV bylo vytvořené v textovém editoru sublime a následně otevřeno v excelu jako CSV soubor. Protože názvy předmmětů obsahují čárky, které jsem původně použila jako oddělovač změnila jsem oddělovač na středník.'
                    },
                    {
                        id: 3,
                        details: 'Pro vizualizaci trasy jsem zvolila cestu z Náměstí Svobody kolem Červeného kostela až k hlavní budově filozofické fakulty. Trasu jsem si naplánovala v mapy.cz odkud lze exportovat gpx soubor. '
                    },
                    {
                        id: 11,
                        type: ElementTypeEnum.Image,
                        details: 'https://drive.google.com/uc?export=view&id=1bBO3VqsDko2D2hetcKQbPU5ADElH9wpT'
                    },
                    {
                        id: 4,
                        details: 'GPX formát je XML schéma, navržené pro data GPS. Pro zobrazení vygenerovaného schématu je použit gpsvisualizer.com.'
                    },

                    {
                        id: 12,
                        type: ElementTypeEnum.Image,
                        details: 'https://drive.google.com/uc?export=view&id=176e28sZLe_FbTq10dr4yYf1CFAvEJMv_'
                    },

                    {
                        id: 5,
                        details: 'Dalším pod-úkolem bylo zjistit jakým způsobem komunikuje iRIS se serverem, aby v aplikaci mapa.idsjmk.cz vozidla vypadala, že jsou v pohybu. Web pravidělně volá přepisovaný json soubor https://mapa.idsjmk.cz/api/vehicles.json který obsahuje informace o všech aktuálně jedoucích vozidlech. Každé vozidlo má několik atributů - ID, název linky, aktuální polohu GPS (zeměpisná šířka a délka), počíteční a koncovou zastávku a další. Přišlo mi zajímavé, že je použito API map.cz.'
                    },
                    {
                        id: 6,
                        details: 'Vyzkoušela jsem se dotazovat pomocí služby postman na PokeAPI. Musím říct, že jsem si pro zkoušení asi měla vybrat nějaké jednodušší. Vzhledem k množství pokemonů a informací, které o jednotlivých pokémonech jsou nebylo jednoduché se ve výsledku vyznat. Nicméně podařilo se mi získat například seznam všech pokémonů mužského pohlaví (pokeapi.co/api/v2/gender/2/) nebo informace o mém oblíbeném Piplupovi (https://pokeapi.co/api/v2/pokemon/piplup).'
                    },
                ]
            },
            {
                sectionHeading: 'Úkol 2',
                sectionId: 1,
                sectionDate: '9. 10. 2023',
                sectionParagraphs: [
                    {
                        id: 0,
                        type: ElementTypeEnum.Link,
                        linkName: 'Úkol 2',
                        details: 'https://drive.google.com/drive/folders/1ojW9vUkzSKbV4WsiHUwKqpW60roS5VXm?usp=drive_link'
                    },
                    {
                        id: 1,
                        details: 'Na druhém cvičení jsme se zabývali web scrapingem (získávání strukturovaných dat z webu) pomocí xPath. Totéž bylo za cílem v první části druhého úkolu. Zadáním bylo vytvořit v tabulkách google dynamický seznam 48 sporttesterů obsahující název, cenové rozpětí a hodnocení.',
                    },
                    {
                        id: 2,
                        details: 'Získat název nebylo obtížné a moje xPath vypadá následovně: //a[@class=\'c-product__link\'. Problém nastal, když bylo potřeba získat 48 výsledků, protože na stránce je jich 24. Je možné, že existuje i lepší řešení, já jsem zvolila postup úpravy URL. V rámci URL adresy je parametr f, který obsahuje informaci o čísle stránky, provedla jsem tedy dvakrát IMPORTXML s hodnotami tohoto atributu 1 a 2.',
                    },
                    {
                        id: 3,
                        details: 'Totéž jsem udělala pro cenu a hodnocení zákazníků. Největší problém byl v občasné neexistenci hodnocení. Čekala bych, že se vynechá řádek, což se ovšem neděje, a tedy se následně hodnocení zobrazuje posunuté a u jiných produktů, než je správně. Možná je to pokročilou noční hodinou ovšem tenhle problém se mi nepodařilo nijak vyřešit. ',
                    },
                    {
                        id: 4,
                        details: 'Odkaz na výslednou tabulku se nachází ve sdílené složce k tomuto úkolu.',
                    },
                    {
                        id: 5,
                        details: 'V druhé části úkolu jsem se rozhodla vyzkoušet nástroj Geneea, který o sobě tvrdí, že dokáže analyzovat velké množství textů. Celkem mě překvapilo, že jde o český nástroj, a tedy velmi dobře pracuje s češtinou.',
                    },
                    {
                        id: 6,
                        details: 'Po nahrání článku do demo verze, nástroj vrátí základní atributy textu a například také návrh na tagy, což by se dalo využít například při tvorbě článků nebo organizaci poznámek. Dále si dokážu představit využití entities cloudu například pro účel prezentace nějakého obsáhlejšího písemného textu. Nevím, jestli jsem jen neobjevila tu možnost, ale přišlo by mi užitečné, analyzovat články i na základě URL adresy.',
                    },
                ],
            },
            {
                sectionHeading: 'Úkol 3',
                sectionId: 1,
                sectionDate: '20. 11. 2023',
                sectionParagraphs: [
                    {
                        id: 0,
                        type: ElementTypeEnum.Link,
                        linkName: 'Úkol 3',
                        details: 'https://drive.google.com/drive/folders/15vLghZriXhjTeizAjP-G6WL4MfHOrZg-?usp=sharing'
                    },
                    {
                        id: 1,
                        details: 'Analýza v Excelu',
                    }
                ]
            },
            {
                sectionHeading: 'Úkol 4',
                sectionId: 1,
                sectionDate: '27. 11. 2023',
                sectionParagraphs: [
                    {
                        id: 0,
                        type: ElementTypeEnum.Link,
                        linkName: 'Úkol 4',
                        details: 'https://drive.google.com/drive/folders/1A2ODVXdOcezlwEmfunjES4JwlrRiM6Ly?usp=drive_link'
                    },
                    {
                        id: 1,
                        details: 'Cílem úkolu bylo vizualizovat data týkající se teroristických útoků ve světě od roku 1970. Nejprve jsem do Power BI nahrála data z excelu a provedla základní transformace. V případě delší práce s daty by bylo potřeba provést transformací asi více, já udělala pouze ty, o kterých jsem tušila, že by mi způsobili potíže při následné tvorbě vizuálu. V průběhu tvorby jsem ještě došla na to, že by se mi hodilo mít data o tom zda byl útok úspěšný i textově ne pouze jako hodnoty 1 a 0.',
                    },
                    {
                        id: 2,
                        details: 'Nejprve jsem si zvolila barvy a rozhodla jsem se, co chci, aby report obsahoval za výstupy. Měla jsem na výběr splnit bodové zadání nebo vytvořit stránky s vlastním obsahem. Zvolila jsem střední cestu a vytvořila vlastní inspirovaný zadáním. Podmínkou však bylo mít dvě strany - kompletní přehled a detail na zvolený region.',
                    },
                    {
                        id: 3,
                        details: 'Vytvořený report není statický a umožňuje filtrování dat pomocí slicerů. První slicer slouží k filtraci podle roku útoku a je typu posuvník. Druhý slicer se zaměřuje na typy útoků a je ve formátu dlaždic. Třetí slicer filtruje data podle regionu a je ve formě vícevýběrového výčtu.',
                    },
                    {
                        id: 10,
                        type: ElementTypeEnum.Image,
                        details: 'https://drive.google.com/uc?export=view&id=1YEOm9RlGFmacQt_XsKOtdIpLPg62PnTY'
                    },
                    {
                        id: 4,
                        details: 'Report má dvě stránky: "Přehled" a "Detail pro daný region." Slicery jsou pro obě stránky stejné, s výjimkou třetího sliceru, který filtruje buď podle regionu nebo země. Oba slicery však zobrazují odlišný obsah.',
                    },
                    {
                        id: 5,
                        details: 'Na stránce "Přehled" jsou zobrazeny dvě číselné karty: celkový počet útoků a procentuální úspěšnost útoků. Dále jsou data vizualizována dvěma grafy. První je horizontální sloupcový graf zobrazující absolutní počet útoků podle regionu. Druhý je spojnicový graf ukazující vývoj počtu teroristických útoků v čase s rozdělením na úspěšné a neúspěšné útoky.',
                    },
                    {
                        id: 6,
                        details: 'Přesuneme se na stránku "Detail" pomocí funkce drill-through, a zpět se vrátíme pomocí tlačítka v levém horním rohu detailu. Stránka "Detail" obsahuje kromě slicerů tabulku s detaily jednotlivých zemí, zahrnující počet útoků, absolutní počet úspěšných útoků a procentuální podíl úspěšných útoků. Další tabulka zobrazuje top 5 nejčastějších cílů s informacemi o cíli útoku a absolutním počtu. Poslední vizuál na stránce "Detail" je skládaný plošný graf ukazující vývoj počtu útoků v čase.',
                    },
                    {
                        id: 11,
                        type: ElementTypeEnum.Image,
                        details: 'https://drive.google.com/uc?export=view&id=1v0NXFScSxMF_5FA2wDbqVfMLXxt4yqi-'
                    },
                    {
                        id: 7,
                        details: 'Jednou z výzev při tvorbě vizuálu bylo filtrování podle typu útoku, který byl rozptýlen do tří sloupců. Řešením bylo vytvořit sloupec pro každý typ útoku a použít slicery dlaždicového typu pro filtraci. Každý slicer má nastavený filtr pouze pro neprázdné hodnoty, obsahuje tedy vždy jednu dlaždici. Při užití tohoto sliceru i mizí ostatní možnosti, které nemají s vybraným průnik. Pomocí záložky jsem přidala tlačítko s funkcí vymazat filtry pro lepší uživatelské ovládání.',
                    },
                    {
                        id: 8,
                        details: 'Zkoušela jsem integrovat vizuální mapu, ale vyskytlo se nečekané umístění západního Německa v Oceánii a další podobné chyby, které přisuzuju historickým datům. Výsledné vizuály jsem prošla a nepotkala jsem žádné na první pohled viditelné nesrovnalosti.',
                    },
                    {
                        id: 9,
                        details: 'Odkaz na vzniklý pbix soubor a snímky obrazovky se nachází ve sdílené složce k tomuto úkolu.',
                    },
                ],
            },
            {
                sectionHeading: 'Úkol 5',
                sectionId: 1,
                sectionDate: '4. 12. 2023',
                sectionParagraphs: [
                    {
                        id: 1,
                        details: 'Pátým úkolem bylo upravit vzhled reportu a jednotlivých vizuálů podle designových principů. Protože jsem tyto principy aplikovala už při vytvoření reportu, rozhodla jsem se v tomto úkolu nic nepředělávat.'
                    }
                ]
            }
        ],
    },


// KOD NAZEV
// 	{
// 		id: 0,
// 		type: "Kisk",
// 		title: 'KOD Nazev',
// 		category: '0. semestr',
// 		img: 'https://cdn.pixabay.com/photo/2018/06/17/09/58/book-3480216_1280.jpg',
// 		createdDate: '00. 00. 0000',
// 		tag: 'kisk',
// 		about: 'O předmětu',
// 		aboutDetail: [
// 			{
// 				title: 'Semestr',
// 				detail: 'semestr',
// 				link: false
// 			},
// 			{
// 				title: 'Ukončení',
// 				detail: 'zkouška',
// 				link: false
// 			},
// 			{
// 				title: 'Počet kreditů',
// 				detail: '0',
// 				link: false
// 			},
// 			{
// 				title: 'Sylabus',
// 				detail: 'ISKM00',
// 				url: 'https://is.muni.cz/predmet/phil/podzim2023/ISKM00',
// 				link: true
// 			},
// 			{
// 				title: 'Soubory',
// 				detail: 'OneDrive složka',
// 				url: 'link_one_drive',
// 				link: true
// 			}
// 		],
// 		descriptionHeading: 'Popis předmetu',
// 		descriptionDetail: 'Předmět má cíle.',
// 		// toolsHeading: 'Nástroje a dovednosti',
// 		// toolsDetail: [
// 		// 	'HTML',
// 		// 	'JS',
// 		// 	'VUE'
// 		// ],
// 		projectDetailsHeading: 'Příspěvek se připravuje',
// 		projectDetails: [
// 			{
// 				id: 1,
// 				details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
// 			},
// 		],
// 		content: [
// 			{
// 				sectionHeading: 'Lorem ipsum',
// 				sectionId: 1,
// 				sectionDate: '00. 00. 0000',
// 				sectionParagraphs: [
// 					{
// 						id: 1,
// 						details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
// 					},
// 					{
// 						id: 2,
// 						details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
// 					}
// 				]
// 			}
// 		],
// 	},


    // {
    // 	id: 2,
    // 	title: 'Phoenix Digital Agency',
    // 	category: 'Mobile Application',
    // 	img: require('@/assets/images/mobile-project-2.jpg'),
    // 	createdDate: 'Jul 26, 2021',
    // 	tag: 'kisk',
    // },
    // {
    // 	id: 3,
    // 	title: 'Project Management UI',
    // 	category: 'UI/UX Design',
    // 	img: require('@/assets/images/ui-project-1.jpg'),
    // 	createdDate: 'Jul 26, 2021',
    // 	tag: 'kisk',
    // },
];

export default projects;
