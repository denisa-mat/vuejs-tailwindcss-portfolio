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
        img: 'https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_960_720.jpg',
        //img: 'https://drive.google.com/uc?export=view&id=1cFkkjWiNUjKbNbOl_ENhO4cd8l1s3Gmn',
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
                sectionVisible: false,
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
        img: 'https://cdn.pixabay.com/photo/2015/05/28/14/38/ux-787980_960_720.jpg',
        //img: 'https://drive.google.com/uc?export=view&id=1ByxWBV01cs3Bvqo71EVuZRVoQPcxOdVs',
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
                sectionVisible: false,
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
        img: 'https://cdn.pixabay.com/photo/2020/05/23/20/08/books-5211309_960_720.jpg',
        //img: 'https://drive.google.com/uc?export=view&id=1dCvDpojo17X8C4QHKgvDjMZEqyeXhejk',
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
        //projectDetailsHeading: 'Příspěvek se připravuje',
        projectDetails: [
            {
                id: 1,
                details: 'Ukončení tohoto předmětu se skádá z několika dílčích částí. Jednou z nich je esej na zvolené literární téma. Dále splnění třech volitelných kreativních výzev a jedné zaměřené na knihovny. Poslední částí je skupinový projekt zaměřený na simulaci nakladatelství a žádost o grant na vytvoření knižní miniedice.'
            },
        ],
        content: [
            {
                sectionHeading: 'Kreativní výzva číslo 6 návštěva kulturně kreativního centra KUMST',
                sectionId: 1,
                sectionDate: '09. 01. 2024',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        id: 1,
                        details: "V rámci plnění výzev jsme s Kačkou vyrazily devátého ledna v mrazivém podvečeru na vernisáž do Kreativního hubu KUMST. KUMST je místo, které se snaží propojovat profesionály v kreativních odvětvích. Pořádají se zde přednášky, diskuse, workshopy. V KUMSTU je také možnost pronajmout si prostory od židle přes ateliér až po celý sál. Pro začínající kreativce jsou k dispozici i konzultace, jak začít podnikat nebo založit firmu."
                    },
                    {
                        id: 2,
                        details: "Dnes jsme navštívily jsme vernisáž s název WHERE DO BROKEN HEARTS GO brněnského abstraktního malíře Robina Blažka. Robin se malbě profesionálně věnuje poměrně krátce, ovšem kreativní práce se věnuje od dětství. Jak jsme se dozvěděly z kurátorského úvodu v rámci skupinových výstav měl své obrazy na výstavách v Milánu a Londýně."
                    },
                    {
                        id: 3,
                        details: "Hlavním tématem, kterému se ve svých dílech věnuje jsou lidé, mezilidské vztahy a poznatky z psychologie. Zároveň vzhledem k tomu, že jde o abstrakci jsou tematicky inspirované bouřkovými mračny a vesmírnými objekty."
                    },
                    {
                        id: 4,
                        details: "Osobně se mi obrazy velmi líbí, přišly mi svěží a poměrně pozitivní. Přestože obrazy jsou reflexí Robinových vlastních stavů nebo etap života snaží se o to, aby odkazovaly na způsoby, kterými se každý z nás vyrovnává se situacemi, která nás v životě potkají. V každém obrazu výstavy lze najít světlý bod, značící způsob, kterým lze každý problém vyřešit pozitivně."
                    },
                    {
                        id: 5,
                        details: "Vernisáže se účastnili především mladí lidé v autorově věku, výjimku mezi nimi tvořila jednoznačně odlišitelná skupina seniorů. Tito lidé nebyli na takovou akci vhodně oblečeni a jak jsem se dozvěděla na takové akce chodí poměrně často, a to pouze za účelem občerstvení z rautu. O tomto fenoménu jsem slyšela poprvé a celkem to kazilo jinak velmi dobrý dojem z výstavy i vernisáže."
                    },
                    {
                        id: 6,
                        details: "Výstava trvá až do posledního ledna, takže pokud půjdete kolem KUMSTu v pracovní den mezi devátou ráno a půl pátou odpoledne doporučuji udělat si zastávku. Zaujal mě i doprovodný program v rámci kterého se 24. ledna koná komentovaná prohlídka a diskuse s psychoterapeutkou na téma boření mýtů v oblasti psychoterapie a zvládání techniky mindfulness."
                    }
                ]

            },
            {
                sectionHeading: 'Kreativní výzva číslo 10 aneb proč lidi pracují v kavárně',
                sectionId: 2,
                sectionDate: '09. 01. 2024',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        id: 1,
                        details: "Jelikož sama chodím do kaváren za učením i prací poměrně často, přišel mi tenhle úkol velmi zajímavý. Byla jsem z něho zároveň poměrně nervózní, protože oslovit cizího člověka s tím, že bych si s ním chtěla povídat je velký výstup z mé komfortní zóny. Několikrát jsem si říkala, že tenhle člověk vypadá mile, přívětivě a že nikam nespěchá, odhodlat se mi ale trvalo tak dlouho, že ten člověk mezitím odešel a chytat někoho na odchodu mi přišlo nevhodné. Nakonec jsem však odhodlala. Žijeme přece na rozhraní."
                    },
                    {
                        id: 2,
                        details: "Navštívila jsem kavárnu Podnebí. Prozkoumávala terén a psala reflexi kreativní výzvy z vernisáže. Přišlo mi, že tam mnoho lidí nepracuje, což se v osm večer dalo očekávat, ale našla jsem dva lidi, kteří vypadli, že by pracovat mohli. Jak jsem psala výše, jeden z nich mi stihl odejít, než jsem se odvážila."
                    },
                    {
                        id: 3,
                        details: "Rozhodla jsem se, že už nebudu váhat, a vydala jsem se za druhým vybraným. Oslovila jsem mladšího muže, který většinu času trávil u stolu s ostatními lidmi, ale ti právě odešli. I když nevypadal, že by měl velký zájem o konverzaci, vytáhl si sluchátko z ucha. Vysvětlila jsem mu situaci a sdělila, co by mě zajímalo. Zjistila jsem, že je zaměstnancem této kavárny, ačkoli nevím přesně, jakou pozici tam zastává. Dochází tam pracovat, primárně protože si může dát kávu zdarma. Jako další výhodu oproti domovu zmínil výrazně větší vzdálenost od postele. Občas prý navštěvuje i jiné kavárny z podobných důvodů (někde má prý i tu kávu zdarma). Zeptala jsem se ho, zda vidí nějaká negativa v práci v kavárně, ale odpověděl stručně, že ne."
                    },
                    {
                        id: 4,
                        details: "Bylo mi trochu nepříjemné někoho takhle vyrušovat z jeho práce, jsem ráda, že jsem si to vyzkoušela, ale nejsem si jistá, zda to chci někdy opakovat. Příběhy lidí mohou být velmi zajímavé a pokud někdy na někoho takového narazím a seberu odvahu zeptat se znovu, budou odpovědi doplněny."
                    }
                ]

            },
            {
                sectionHeading: 'Kreativní výzva číslo 15/20 návštěva galerií',
                sectionId: 3,
                sectionDate: '30. 11. 2023',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        id: 1,
                        details: "Rozhodla jsem se upravit si kreativní výzvu týkající se návštěvy výstavy v Moravské galerii a Domě umění. Zadání tedy zní: Navštivte dvě výstavy či galerie v zahraničí."
                    },
                    {
                        id: 2,
                        details: "Na podzim jsem vyrazila na prodloužený víkend do Barcelony, kde jsme si jako správní turisti zakoupili Barcelona Card a když jsem na seznamu míst, které jsou s touto kartou zdarma viděla hned několik muzeí, galerií a dalších podobných prostor, bylo mi jasné, že by byla velká škoda je nenavštívit a tím si nesplnit nějakou z kreativních výzev."
                    },
                    {
                        id: 3,
                        details: "Hned první odpoledne jsem zavelela a vydali jsme se směrem Museu Picasso de Barcelona, což je dle letáčku nejnavštěvovanějším muzeem v Barceloně a obsahuje více než 4500 Picassových děl. Muzeum sídlí v historickém centru, což je jedna z nejhezčích částí Barcelony."
                    },
                    {
                        id: 4,
                        details: "Aktuálně v muzeu probíhá výstava Miró-Picasso, která odkazuje na jejich vzájemné přátelství a koná se zároveň zde a ve Fundació Joan Miró, jako součást akcí připomínající 50 let od úmrtí Pabla Picassa. Picassova sbírka je v muzeu skutečně ohromná a doplnění o díla Joana Miró jim dodalo další kontext. Abych však byla upřímná nepotkala jsem žádné Picassovo ikonické dílo, na které jsem se poměrně těšila a celkem mě to zklamalo. Je zde možnost, že nějaký takový obraz je v druhé části výstavy, kam jsme se nedostali nebo, a to je asi pravděpodobnější budou tato díla pravděpodobně součástí sbírek Pařížských galerií."
                    },
                    {
                        id: 5,
                        details: "Palácový komplex, ve kterém se muzeum nachází je skutečně rozlehlý a orientovat se v něm nebylo vůbec jednoduché. Přestože jednotlivé místnosti byli očíslovány, tak jsme se opakovaně dostávali do míst, kde už jsme byli a jsem s celkem jistá, že jsme nějakou část vynechali."
                    },
                    {
                        id: 6,
                        details: "I přes mírné zklamání, které je z části způsobeno milnými očekáváními, a ne úplně ideálním uspořádání prostor výstava stála za vidění."
                    },
                    {
                        id: 7,
                        details: "Druhé místo, na které jsme se vydali bylo Museu Nacional d’Art de Catalunya, které sídlí v Palau Nacional na kopci Montjuïc. Budova byla původně postavena pro mezinárodní výstavu v roce 1929 v současnosti jsou zde sbírky středověkého umění, románského i moderní umění především od katalánských umělců."
                    },
                    {
                        id: 8,
                        details: "Budova muzea je skutečně ohromující, stojí nad náměstím s kaskádami a zpívající fontánou, ta byla však během naší návštěvy v rekonstrukci. V muzeu je velká vstupní hala, z které je možné se dostat do všech expozic, které jsou k dispozici (a na které máte vstupenku). I zde mi přišlo nelogické uspořádání, i tady jsme bloudili a nebyli si jistí, kde už jsme byli. Některé expozice mají dokonce dva různé vstupy a jdou procházet dvěma způsoby, ale nikde není napsané, co který znamená a personál nám řekl, že je to jedno. Jeden jsme tedy zvolili a šli proto od nejnovějších děl po nejstarší. Osobně bych raději volila opačnou cestu."
                    },
                    {
                        id: 9,
                        details: "Dalším zklamáním byla absence popisů jednotlivých děl. Každé dílo mělo uvedené pouze autora a název v katalánštině. Až později jsem zjistila, že existuje mobilní aplikace s audioprůvodcem. Neměli jsem ale s sebou sluchátka a ani ta by nám tedy nepomohla."
                    },
                    {
                        id: 10,
                        details: "Kdybychom tušili naše zklamání předem šli bychom i jako nefanoušci fotbalu místo toho na El Clasico ženské fotbalové ligy, které se tou dobou hrálo vedle na Olympijském stadionu."
                    }
                ]

            },
            {
                sectionHeading: 'Další kreativní výzvy',
                sectionId: 4,
                sectionDate: '10. 01. 2024',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        id: 1,
                        details: "Mnoho výzev mi přišlo zajímavých, a přestože jsem je například nesplnila kompletně přijde mi zajímavé je zde okrajově zmínit."
                    },
                    {
                        id: 2,
                        details: "Výzva jedna: Makerspace – Během tohoto semestru jsem se vyskytla hned v několika makerspace prostorech. První byl v rámci exkurze do poboček Pražské městské knihovny, kde v centrální pobočce na mariánském náměstí mají řekla bych velké množství nejrůznějších strojů. Druhá návštěva byla v rámci exkurze do knihovny v Poličce Půda, kde makerspace tvoří samostatné oddělení tamní městské knihovny. A byla jsem i v makerspace v knihovně filozofické fakulty podívat se jaké tam mají robotické pomůcky."
                    },
                    {
                        id: 3,
                        details: "Výzva třináct: Brněnské architektonické stezky – Zatím neabsolvováno, ale nějaké jsem si uložila a hned jak bude po zkouškách a aktuálních mrazech se na nějakou chystám."
                    },
                    {
                        id: 4,
                        details: "Výzva šestnáct: Edukativní videohra – Zvažovala jsem, že toto bude jedna z mých výzev a narazila jsem na hru https://galaxycodr.com/sk, která slouží k procvičení základů algoritmizace. Hra je slovenská a je velmi pěkně zvládnutá. Já vyzkoušela jen základní úroveň, ale dostalo se ke mně, že je tam chyba, která znemožňuje dostat se ve hře dál. Můžete ji zkusit najít."
                    },
                    {
                        id: 5,
                        details: "Výzva osmnáct: Nástroj AI – S umělou inteligencí jsem si tento semestr kreativně vyhrála v rámci předmětu vzdělávací technologie. O co přesně šlo si můžete přečíst v příspěvcích k předmětu."
                    }
                ]

            },
        ],
    },


// ISKM04 Seminář k diplomové práci I: Východiska a metodologie
    {
        id: 4,
        type: "Kisk",
        title: 'ISKM04 Seminář k diplomové práci I: Východiska a metodologie',
        category: '1. semestr',
        img: 'https://cdn.pixabay.com/photo/2020/05/31/16/48/write-5243229_960_720.jpg',
        //img: 'https://drive.google.com/uc?export=view&id=1avWnmOJqyZU9NvgTavNyR_FLnCUrYQNv',
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
                sectionVisible: false,
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
        img: 'https://cdn.pixabay.com/photo/2017/02/06/23/57/lecture-2044621_960_720.jpg',
        //img: 'https://drive.google.com/uc?export=view&id=1US-FlUWd6SewlPiMSwS0MAyzTrmrkdlg',
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
                sectionVisible: false,
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
        img: 'https://cdn.pixabay.com/photo/2021/12/26/13/42/lego-6895159_960_720.jpg',
        //img: 'https://drive.google.com/uc?export=view&id=1YkrEHVTBt2s5Ml2F0EdP_lG1ExaRh120',
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
        //projectDetailsHeading: 'Příspěvek se připravuje',
        projectDetails: [
            {
                id: 1,
                details: 'Níže jsou dostupné všechny úkoly k přednáškám. Okomentované úkoly z cvičení budou doplněny později.'
            },
        ],
        content: [
            {
                sectionHeading: 'Umělá inteligence I',
                sectionId: 1,
                sectionDate: '06. 10. 2023',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        id: 1,
                        details: "První přenáška z předmětu vzdělávací technologie se věnovala tématu umělé inteligence v oblasti vzdělávání. Zadáním úkolu k této přednášce je najít nějaké eticky či sociálně problematické využití AI, ke kterému může dojít, když učitelé budou tento nástroj využívat ke své výuce. Následující odstavce popisují příklad práce s AI, způsobený problém a jeho důsledky na proces vzdělávání."
                    },
                    {
                        id: 2,
                        details: "Umělá inteligence nabízí zásadní vylepšení personalizace výuky a zefektivnění pedagogické činnosti. Většinu práce a času zabere v současnosti učitelům nepřímá pedagogická činnost, tedy administrativa, ale i samotná příprava na hodiny. Stále častěji se zmiňuje personalizovaná a individualizovaná výuka. Příprava takových lekcí, však zabírá neúměrné množství času, s čímž si dokážu představit, že by AI dokázala pomoc a přizpůsobovat studijní materiály individuálním potřebám studentů."
                    },
                    {
                        id: 3,
                        details: "Takový systém založený na AI sbírá a analyzuje data o chování a výkonu jednotlivých studentů, aby vytvořil vzdělávací plán na míru. Systém sleduje rychlost pokroku, ale i silné a slabé stránky. Na základě posbíraných dat pak dokáže upravit obsah i tempo výuky."
                    },
                    {
                        id: 4,
                        details: "Problémem takového systému může být vytváření problematických a diskriminujících zobecnění a následnému z(ne)výhodňování určitých studentů. Systém může například preferovat konkrétní vzdělávací styly nebo se spoléhá na data, která jsou něčím zkreslená. To může mít zásadní dopad na výuku, protože pokud se určitým skupinám studentům budou generovat náročnější úlohy je pravděpodobné, že v závěrečném srovnávání budou úspěšnější. To vede k nerovnostem ve výsledcích, ale i následnému přístupu k dalšímu vzdělávání. Dalším aspektem je omezení diverzity myšlení. Tím, že algoritmy upřednostňují určité vzdělávací přístupy, hrozí zúžení perspektiv a přístupů k učení. Tato omezení mohou bránit vzniku živých diskusí a interakcí, což je v rámci výuky klíčové pro podporu kreativity ve vzdělávacím procesu."
                    },
                    {
                        id: 5,
                        details: "Integrace umělé inteligenci do vzdělávacích systémů s ohledem na etické zásady a společenské hodnoty je velmi aktuální téma. Jak uvádí Anetta Jedličková: \"Etické požadavky vycházející z obecných etických principů byly co nejvíce konkretizovány, protože jen v konkrétní formě mohou být  využitelné  v  praxi,  a  využití  moderních technologií tak může být v souladu s individuálními i společenskými hodnotami a potřebami.\"[1]. Závěrem lze konstatovat, že využití AI ve vzdělávání má obrovský potenciál, ale současně přináší výzvy týkající se etiky a rovnosti. Je nezbytné nadále zdokonalovat a implementovat etické směrnice, aby se zajistilo, že moderní technologie slouží k prospěchu všem studentům a podporují inkluzivní vzdělávací prostředí."
                    },
                    {
                        id: 6,
                        details: "[1] JEDLIČKOVÁ, Anetta. Etické aspekty rozvoje umělé inteligence. Anthropologia integra [online]. 2022, Vol. 13, No. 2. [cit. 2024-10-05]. Dostupné z: https://journals.muni.cz/anthropologia_integra/article/view/32983/28375"
                    },
                    {
                        id: 7,
                        details: "K zobrazení komentářové sekce dole na stránce je třeba zadat mé UČO: 485131."
                    },
                ]
            },
            {
                sectionHeading: 'Umělá inteligence II',
                sectionId: 2,
                sectionDate: '06. 10. 2023',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        "id": 1,
                        "details": "Úkol vztahující k druhé přednášce má dvě části. V první jsme si měli několik minut chatovat s ChatGPT a popsat naše pocity. V druhá část se odkazuje na úkol ze cvičení, kterým bylo vytvoření chatbota, konkrétně je úkolem popsat proces vymýšlení tématu."
                    },
                    {
                        "id": 2,
                        "details": "ChatGPT používám poměrně běžně, nejčastěji pro tematické vnuknutí myšlenky, když mi docházejí nápady nebo pro generování strukturovaných textů, na základě podkladů, které dodám. Povídat jsem si s tím zkoušela už před poměrně dlouhou dobou, takže mě zajímalo, jestli došlo k nějakému pokroku v této oblasti."
                    },
                    {
                        "id": 3,
                        "details": "Na úvod jen uvedu, že při komunikaci, pokud potřebuju oslovit, tak primárně používám střední rod z důvodu cílené depersonifikaci umělé inteligence. Zkoušela jsem začít rozhovor tím, že bych si chtěla povídat a nemám preferované téma. To fungovalo až nečekaně dobře a bylo navrženo téma cestování. V diskusi už jsem však narážela na to, že AI nemá vlastní názory, což je v pořádku, nic méně pro oboustrannou komunikaci je to poměrně náročné. Když jsem řekla, kde se mi líbilo reakcí byly komplimenty na dané místo a otázka rozvíjející konverzaci. Tyhle otázky mi po několika opakováních přišli vlastně dost otravné, měla jsem pocit, že nemám prostor sdělit, co bych chtěla a že se o druhé straně nic nedozvídám, což dává smysl, ale pro mě rozhovor neměl žádnou hodnotu. Zkoušela jsem i pokládat otázky na doporučení, ale odpovědí byl číslovaný seznam s možnostmi. Všechny uvedené aspekty ve mně jen utvrzovaly v pocitu, že člověk na druhé straně není. Zároveň to však může být ovlivněno mojí dosavadní snahou o odosobnění."
                    },
                    {
                        "id": 4,
                        "details": "Dala jsem tomu ještě jeden pokus a zkusila popsat, že si chci psát se ženou, které je 25 let, hraje volejbal a ráda cestuje a vaří. Začátek byl velmi příjemný a skutečně jako kdyby na druhé straně byl člověk, který se ptá na mé zájmy a sděluje něco i o sobě. Dokonce tam byli použité smajlíky. Když jsem se začala ptát na to, jestli někde byla, a co si myslí, tak mi začala připomínat, že je jen virtuální model. I tak, ale tahle konverzace byla mnohem příjemnější než ta předchozí. I ze strany AI byla konverzace hodnocena jako příjemná a inspirativní."
                    },
                    {
                        "id": 5,
                        "details": "Jako téma jsem si zvolila osobnosti kvíz týkající se osobností z historie IT, a to hned z několika důvodů. Když jsem začala přemýšlet, jakého chatbota vytvořit říkala jsem si, že nějaká forma kvízu se vzhledem k požadovanému rozsahu a mé dosavadní nezkušenosti s nástrojem bude vytvářet nejlépe. Pak jsem uvažovala nad tím, jaké konkrétně vybrat téma. Že vyberu něco z informatiky jsem asi věděla od začátku, protože je to téma, které je mi blízké. Pak jsem si vzpomněla na IT tábory, které jsem několik let spoluvedla, tam seznamujeme děti se zásadními osobnostmi historie. Došla jsem k tomu, že kvíz na osobnosti by mohl být fajn a mít teoreticky i praktické využití právě v rámci tábora. Konkrétní osobnosti jsem zvolila ty, o kterých si každý rok povídáme, takže to už bylo poměrně snadné. Žádný plánovací nástroj jsem při vymýšlení tématu nepoužila."
                    },
                    {
                        "id": 6,
                        "details": "Odkaz na vytvořeného chatbota je následující: https://webbot.me/c4c3663aa34008da8fff2a81ca1311872522a7ccd834d594d3c9ffa03a8d5419"
                    }
                ]
            },
            {
                sectionHeading: 'Zpracování emocí',
                sectionId: 3,
                sectionDate: '12. 10. 2023',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        "id": 1,
                        "details": "V návaznosti na lekci, která se věnovala počítačovému zpracování emocí je mým úkolem zjistit, co všechno se v oblasti vzdělávání a počítačového zpracování emocí nyní dělá a navrhnout s využitím konkrétního nástroje nebo podle postupu z literatury uplatnění v edukační praxi."
                    },
                    {
                        "id": 2,
                        "details": "Podle studie Affective computing in education: A systematic review and future research z roku 2019 se výzkumy nyní zaměřují na zkoumání vztahů mezi emocemi, motivací, stylem učení a poznáváním a zkoumání vlivu emocí na záměr, úspěch a výkon uživatelů [1]. To jsou faktory, které mají potenciál poskytnout užitečné informace sloužící k optimalizaci výukových metod a dosažení efektivnějšího vzdělávání."
                    },
                    {
                        "id": 3,
                        "details": "Trend výzkumu afektivních počítačů ve vzdělávání se zvyšuje a očekává se, že všechny výukové aplikace budou mít zabudované schopnosti detekovat a monitorovat emoce žáků [1]. S rychlým rozvojem online vzdělávání je vývoj emočních modelů pro integraci do mobilních zařízení klíčový. Vzdělávací instituce hrají významnou roli ve společnosti, znalostech a technologiích, a proto jsou strategie pro výuku a výzkum zásadní."
                    },
                    {
                        "id": 4,
                        "details": "Navzdory flexibilitě a personalizovanému učení, které e-learningové prostředí nabízí, není tajemstvím, že e-learningová prostředí trpí nízkou účastí a vysokou mírou odchodů. Je známo, že předčasné ukončování e-learningových kurzů je výrazně vyšší než u kurzů probíhajících prezenčně. To je způsobeno jedním z hlavních nevýhod e-learningových prostředí, a to nedostatkem emocionální výměny ve srovnání s klasickým výukovým prostředím. [2]"
                    },
                    {
                        "id": 5,
                        "details": "V tomto vidím hlavní benefit sledování a zpracování emocí pro vzdělávací proces. Již dnes existují nástroje, které jsou schopny v reálném čase detekovat emoce (například https://visagetechnologies.com/HTML5/latest/Samples/ShowcaseDemo/ShowcaseDemo.html) . Takový nástroj by i v případě online výuky mohl vzdělavatele upozornit, že se něco děje například pokud vyhodnotil, že student je při plnění posledních dvou lekcí smutný. Následně by nějaký systém nebo sám tutor by mohl kontaktovat studenta, zda nepotřebuje konzultaci nebo jinou formu podpory."
                    },
                    {
                        "id": 6,
                        "details": "Dalším zajímavé uplatnění mi přijde určování emocionálního tónu textů. To umí pro anglické texty například imentiv.ai, když jsem zkusila češtinu na nástroj si nestěžoval, ale vše vyhodnotil jako neutrální. Zajímavý je také nástroj Watson z dílny IBM (https://www.ibm.com/demos/live/natural-language-understanding/self-service/home ), ten je ovšem plně placený."
                    },
                    {
                        "id": 7,
                        "details": "Zaujal mě ještě projekt Emotion Navigation (https://www.media.mit.edu/projects/emotional-navigation-system/overview/). Jeho hlavním cílem je asistovat lidem při transformaci zážitků z řízení. Tyto zážitky mohou být emocionálně stresující a vést k nepříznivým a potenciálně bezpečným situacím. Projekt se snaží tyto situace přeměnit na zdravé a příjemné zážitky, které podporují odolnost a pohodu."
                    },
                    {
                        "id": 8,
                        "details": ""
                    },
                    {
                        "id": 9,
                        "details": "[1] https://www.sciencedirect.com/science/article/pii/S0360131519302027"
                    },
                    {
                        "id": 10,
                        "details": "[2] https://link.springer.com/article/10.1007/s10639-021-10769-9"
                    }
                ]
            },
            {
                sectionHeading: 'Výukové programovací jazyky',
                sectionId: 4,
                sectionDate: '05.01.2024',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        id: 1,
                        details: "Úkolem ke čtvrté přednášce je vybrat jeden výukový programovací jazyk a popsat k němu nějakou vzdělávací lekci včetně jejího cíle, cílové skupiny a průběhu lekce."
                    },
                    {
                        id: 2,
                        details: "Moje zkušenost s programovacími jazyky, a to včetně těch výukových, je vzhledem k předchozímu studiu poměrně široká. Konkrétně jsem vedla kroužek Scratche pro děti ve věku 8-12 let, Pythonu, který byl určen středoškolákům. V bakalářské práci jsem se věnovala tvorbě výukových materiálů zaměřených na algoritmizaci a programování s využitím micro:bit. Měla jsem taky možnost vyzkoušet si jednu lekci s hedycode.com, což je stupňovitý programovací jazyk, který jak postupuje, tak se stále více blíží Pythonu. Přestože hedycode není český projekt, tak se díky dobrovolníkům průběžně překládá do češtiny a nyní jsou v češtině dostupné instrukce k úvodním úkolům, zbytek je dostupný v angličtině."
                    },
                    {
                        id: 3,
                        details: "Pro vypracování tohoto úkolu jsem zvolila Scratch protože ho znám nejlépe a myslím si, že dokážu dobře odhadnout, co se dá stihnout"
                    },
                    {
                        id: 4,
                        details: "Cíl lekce: Vytvoření základu pro první hru na principu chytání padajících objektů, na které si žáci vyzkouší:"
                    },
                    {
                        id: 5,
                        details: "•	Pracovat se Scratchem"
                    },
                    {
                        id: 6,
                        details: "•	Rozpohybovat postavy"
                    },
                    {
                        id: 7,
                        details: "•	Jak Scratch pracuje s cykly a jaké jsou druhy"
                    },
                    {
                        id: 8,
                        details: "•	Jak ve Scratchi fungují podmínky"
                    },
                    {
                        id: 9,
                        details: "Cílová skupina: Cíleno je na děti ve veku kolem deseti let, které už slyšeli o cyklu a podmínce (pokud ne, je potřeba vzít pomaleji. Vyzkoušeno, že baví i dospělé."
                    },
                    {
                        id: 10,
                        details: "Průběh lekce:"
                    },
                    {
                        id: 11,
                        details: "15 minut Seznámení se Scratchem"
                    },
                    {
                        id: 12,
                        details: "•	Otevřít Scratch, nastavit jazyk, otevřít prázdný projekt, nastavit pozadí"
                    },
                    {
                        id: 13,
                        details: "15 minut Postavy a kostýmy"
                    },
                    {
                        id: 14,
                        details: "•	Přidat postavu ježka a jablka, odstranit postavu kocoura"
                    },
                    {
                        id: 15,
                        details: "•	Podívat se na kostýmy ježka a připravit na otáčení"
                    },
                    {
                        id: 16,
                        details: "20 minut Pohyb ježka"
                    },
                    {
                        id: 17,
                        details: "•	Ukázat: kde jsou bloky, které budou potřeba"
                    },
                    {
                        id: 18,
                        details: "•	Úkol: Naprogramovat pohyb a otáčení ježka"
                    },
                    {
                        id: 19,
                        details: "PAUZA"
                    },
                    {
                        id: 20,
                        details: "40 minut Padání jablka"
                    },
                    {
                        id: 21,
                        details: "•	Vysvětlit cyklus – opakuj stále X opakuj dokud"
                    },
                    {
                        id: 22,
                        details: "•	Vysvětlit souřadnice – Scratch má [0;0] uprostřed"
                    },
                    {
                        id: 23,
                        details: "•	Úkol: Nastavit padání jablka"
                    },
                    {
                        id: 24,
                        details: "20 minut Podmínky"
                    },
                    {
                        id: 25,
                        details: "•	Potřebujeme, aby se jablko vrátilo zpátky na začátek, kdy?"
                    },
                    {
                        id: 26,
                        details: "•	-> Když něco"
                    },
                    {
                        id: 27,
                        details: "•	Oranžový blok s podmínkou – Co do ní můžeme vložit?"
                    },
                    {
                        id: 28,
                        details: "•	-> To, co bude v tom bloku tak se vykoná po splnění té podmínky."
                    },
                    {
                        id: 29,
                        details: "•	Úkol 1: Přidat dvě když: 1) dotýká se ježka 2) je moc dole (y < -160)"
                    },
                    {
                        id: 30,
                        details: "•	Úkol 2: Nastavit pomoci modrých bloku, aby se jablko vrátilo zpátky nahoru (y = 160)"
                    },
                    {
                        id: 31,
                        details: "Pokud se bude stíhat"
                    },
                    {
                        id: 32,
                        details: "•	Proměnné"
                    },
                    {
                        id: 33,
                        details: "•	Vytvořit proměnnou body"
                    },
                    {
                        id: 34,
                        details: "•	Nastavit ji po spuštěni hry na 0"
                    },
                    {
                        id: 35,
                        details: "•	Bude se zvětšovat pokaždé když jablko chytneme – kde je příslušný kus kódu?"
                    },
                    {
                        id: 36,
                        details: "Případně dál:"
                    },
                    {
                        id: 37,
                        details: "•	Vytvořit proměnou životy"
                    },
                    {
                        id: 38,
                        details: "•	Nastavit po spuštěni na 3"
                    },
                    {
                        id: 39,
                        details: "•	Odečítat při spadnuti jablka"
                    },
                    {
                        id: 40,
                        details: "•	Teď můžeme mít i záporný počet životů, jak to opravit?"
                    },
                    {
                        id: 41,
                        details: "Pokud bude někdo napřed a nudí se:"
                    },
                    {
                        id: 42,
                        details: "•	Scratch má možnost vytvářet vlastní bloky"
                    },
                    {
                        id: 43,
                        details: "•	Nemusí padat jen jablka, ale i něco jiného – rychleji/pomaleji, přidávat více/méně bodů"
                    },
                    {
                        id: 44,
                        details: "Odkaz na projekt: https://scratch.mit.edu/projects/573567541"
                    }
                ]
            },
            {
                sectionHeading: 'Počítačové sítě',
                sectionId: 5,
                sectionDate: '05.01.2024',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        id: 1,
                        details: "V pátém úkolu máme najít a popsat nějaký nástroj umožňující využít mobilní zařízení připojené na internet. Pokusit se najít situace ve kterých by byla lekce bez vybraných nástrojů realizovaná složitě a vyžadovala by využití jiných vyučovacích metod."
                    },
                    {
                        id: 2,
                        details: "Jednou z technologií, která umožňuje s efektivním využitím mobilních zařízení zatraktivnit výuku je rozšířená realita. Rozšířená realita má potenciál zlepšit různé aspekty vzdělávání, včetně zeměpisu, vědy, dějepisu, umění a odborného vzdělávání. AR dokáže oživit ploché mapy, v biologii může pomoci studentům prozkoumat lidské tělo, fyziku a chemii ve 3D, čímž se abstraktní pojmy stanou hmatatelnými."
                    },
                    {
                        id: 3,
                        details: "Nástrojem je zde aplikace Arloopa, která pracuje na principu rozšířené reality. Zobrazuje virtuální objekty do skutečného prostoru prostřednictvím kamery a obrazovky mobilního zařízení. Systém není zcela dokonalý, očekávám, že se v budoucnu bude tato nebo jiná aplikace rozvíjet, zlepšovat a nabídne větší množství objektů k zobrazení a tím i rozšíří využití."
                    },
                    {
                        id: 4,
                        details: "Jde o hybridní lekci v rámci školní výuky. Úvod lekce zahrnuje stručný přehled oběhové soustavy a jejích funkcí. Poté následuje představení mobilní aplikace pro rozšířenou realitu, kde studenti stahují aplikaci. Praktická část lekce zahrnuje úkol, kde studenti zobrazují virtuální modely srdce, cév a dalších orgánů v okolním prostoru, zkoumají struktury a sledují vzájemnou spolupráci částí. Následuje diskuse a otázky, které podporují rozpravu o získaných informacích a funkcích oběhové soustavy. Lekce končí závěrečným zhodnocením klíčových poznatků a zhodnocení práce s rozšířenou realitou."
                    },
                    {
                        id: 5,
                        details: "Studenti jsou schopni na 3D modelu identifikovat jednotlivé části lidského těla."
                    },
                    {
                        id: 6,
                        details: "Studenti dokáží popsat, jak spolu jednotlivé orgány kooperují."
                    },
                    {
                        id: 7,
                        details: "Studenti s ostatními sdílí své individuálně získané znalosti s 3D objektem."
                    },
                    {
                        id: 8,
                        details: "Situace:"
                    },
                    {
                        id: 9,
                        details: "Hybridní hodina: V případě nemožnosti využití mobilního zařízení a AR by studenti, kteří nejsou přítomni fyzicky byli omezení jen na 2D zobrazení, což by jim značně ztížilo učení a vytvořilo nerovnost v přístupu ke vzdělání."
                    },
                    {
                        id: 10,
                        details: "Nedostatek fyzických modelů: Ve třídě není k dispozici dostatek modelů pro studenty. Pokud má student k dispozici každý jeden orgán těžko bude zkoumat, jak interaguje s ostatními a následně to prezentovat ostatním."
                    },
                    {
                        id: 11,
                        details: "Výuka v učebně bez promítacího plátna: Vyučující má možnost ukazovat jen na (většinou) malém modelu, na kterém není mnoho vidět. Animace by mez plátna i mobilních zařízení by musel studentům ukazovat na nějaké vytvořené replice (například plíce z balónků)."
                    }
                ]
            },
            {
                sectionHeading: 'Multimedia I',
                sectionId: 6,
                sectionDate: '05.01.2024',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        id: 1,
                        details: "Úkolem tohoto týdne je popsat nějaký multimediální vzdělávací projekt a jak jeho tvůrci pracují s multimediálním obsahem. Toto doplnit o rady, které by mohli využít ostatní při tvorbě vlastního multimediálního vzdělávacího projektu."
                    },
                    {
                        id: 2,
                        details: "Pro tento úkol jsem si zvolila online platformu Google Arts & Culture na kterou jsem narazila, když jsem hledala nástroje, které pracují s rozšířenou realitou a velmi mě zaujal. Jsou zde dostupné obrazy a videa uměleckých děl z partnerských kulturních institucí po celém světě. Kromě pouhého zpřístupnění umění široké veřejnosti mě zaujal způsob, jakým s díly Google pracuje."
                    },
                    {
                        id: 3,
                        details: "Práce s multimédii v tomto projektu (https://artsandculture.google.com/):"
                    },
                    {
                        id: 4,
                        details: "Digitální sbírky: Google Arts & Culture obsahuje ve vysokém rozlišení digitální reprodukce uměleckých děl, historických artefaktů a kulturního dědictví z různých muzeí a institucí. Tyto digitální sbírky jsou nyní volně dostupné online a umožňují uživatelům pokročilé vyhledávání a doporučování děl na základě pokročilých filtrů. Je zde také možnost vytvářet si vlastní virtuální umělecké sbírky a kolekce."
                    },
                    {
                        id: 5,
                        details: "Virtuální prohlídky: Projekt poskytuje možnost virtuálních prohlídek muzeí a historických lokalit. Uživatelé mohou „procházet“ galeriemi, prohlížet si exponáty a zkoumat historická místa prostřednictvím rozhraní s možností pohybu. V některých institucích jsou k těmto prohlídkám dostupné i audio komentáře, které dodávají zážitku další rozměr."
                    },
                    {
                        id: 6,
                        details: "Interaktivní obsah: Google Arts & Culture nabízí interaktivní obsah, včetně výstav, příběhů, článků a projektů spojených s uměním a kulturou. Jsou zde k dispozici například hry a kvízy na mnoho různých témat. Tyto prvky nabízejí edukativní přístup a propojují umělecké dějiny s interaktivním přístupem ke vzdělání. Zajímavostí je funkce mobilní aplikace umožňující najít na základě selfie umělecká díla s portréty z databáze, které jsou osobě na fotce nejpodobnější."
                    },
                    {
                        id: 7,
                        details: "Inovativní technologie: Projekt využívá různé technologie, jako jsou umělá inteligence (například pro rozpoznávání obličejů nebo vyhledávání podobných uměleckých děl) a virtuální reality (pro virtuální prohlídky), což poskytuje uživatelům nový a zajímavý zážitek."
                    },
                    {
                        id: 8,
                        details: "Inspirace a rady pro tvůrce dalších multimediálních vzdělávací projektů:"
                    },
                    {
                        id: 9,
                        details: "Otevřený přístup k obsahu – Umožnění širokého přístupu k obsahu prostřednictvím digitálních sbírek. Zpřístupnění informací, které by jinak mohly být omezeny, a vytvoření prostoru pro šíření znalostí."
                    },
                    {
                        id: 10,
                        details: "Interaktivita a zapojení uživatelů – Integrace interaktivních prvků do projektu. Tyto prvky budou zapojovat uživatele. Virtuální prohlídky, hry nebo interaktivní lekce mohou posílit edukativní hodnotu."
                    },
                    {
                        id: 11,
                        details: "Multimediální přístup – Využívání různých forem médií. Od textu a obrázků po videa, zvuk a interaktivní prvky. Tím lze oslovit různorodé skupiny uživatel."
                    },
                    {
                        id: 12,
                        details: "Inovativní technologie – Aktuální technologie jako umělá inteligence nebo virtuální a rozšířená realita mohou přinést nové možnosti pro interakci a učení."
                    },
                    {
                        id: 13,
                        details: "Transparentnost platformy – Jasné informace o platformě, použitých technologiích a dostupnosti obsahu jsou klíčové pro uživatelskou přívětivost."
                    },
                    {
                        id: 14,
                        details: "Spolupráce s institucemi – Stojí za zvážení, zda nelze navázat spolupráci s muzei, školami nebo dalšími institucemi, dle zaměření projektu. To může otevřít dveře k rozsáhlejšímu obsahu a věrohodnosti."
                    },
                ]
            },
            {
                sectionHeading: 'Multimedia II',
                sectionId: 7,
                sectionDate: '05.01.2024',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        id: 1,
                        details: "Zadání osmého úkolu: Rád bych si od Vás přečetl zamyšlení o tom, co si myslíte, že by bylo možné snadno učit jako VR aktivitu, k čemu by se hodilo AR a kde si naopak na běžnou třídu nenecháte sáhnout. Motivace – některé studie píší, že vzdělávání je už hodně technizované a že současná situace nás vede k tomu, že málo sníme – zapomínáme na to, jak by mohla vypadat ideální výuka. A právě k takovému snění bych Vás rád přivedl."
                    },
                    {
                        id: 2,
                        details: "Vzdělávání již nějakou dobu stojí před výzvou využít technologie k vytvoření prostředí, které podporuje interaktivní a efektivní učení a studenty připraví na život v technologické době. Virtuální a rozšířená realita se staly neopomenutelnými v transformaci vzdělávání. Přinášejí nové možnosti pro pedagogy a mají zásadní vliv na zážitek studentů."
                    },
                    {
                        id: 3,
                        details: "Jako téměř vždy, řeší bude někde na pomezí. Z mého pohledu je nejdůležitější různorodost a přizpůsobení nejen žákům, ale i učitelům. Každý vyučující se cítí komfortně v jiném stylu výuky a to by se nemělo zapomínat."
                    },
                    {
                        id: 4,
                        details: "Výuku ve virtuální realitě si dokážu představit především v situacích, kdy není možné nebo finančně výhodné zažít danou situaci na vlastní kůži například virtuální prohlídky vzdálených nebo historických míst. Obecně však virtuální realita, v níž se nemůžeme pohybovat (což z prostorového omezení obvykle nelze) více než pár kroků, nemá z mého pohledu v běžné školní výuce příliš velkou přidanou hodnotu."
                    },
                    {
                        id: 5,
                        details: "Naopak v rozšířené realitě vidím velký potenciál. Není potřeba žádné speciální vybavení ani upravený prostor. Každý student může daný objekt studovat svým tempem a možností je mnoho. AR lze využívat jak jako rozšíření standardních, tak multimediálních učebnic. AR objekty jsou užitečné pro přírodní vědy při zkoumání nejrůznějších struktur. V historii při exkurzi si na zařízení, které nosíme v kapse přehrát co se na daném místě stalo. Téměř jako bychom tam byli. V matematice při zobrazování geometrických konstrukcí."
                    },
                    {
                        id: 6,
                        details: "Jistě někdo může namítnout, že s VR by byl zážitek intenzivnější, ale náklady, technická zařízení, potíže například lidí s brýlemi… Jsem fanoušek rozšířené reality. Pokud bych se měla skutečně zasnít, tak se velmi těším na holografické promítání, nic takového zatím neexistuje a musíme si vystačit s dvourozměrným promítání."
                    },
                    {
                        id: 7,
                        details: "Nemám aktuálně žádnou situaci, ve které bych si na „standardní“ podobu nenechala sáhnout. Mám ráda rozmanitost a střídání aktivit. Ostatně ještě před nějakými patnácti lety se ve výuce především diktovalo nebo opisovalo z učebnic. Před deseti jsme se spolužáky všechno zběsile opisovali z barevných prezentací. Co je běžná třída a hodina dnes už ani nevím. Klíčové je neustrnout a využívat technologie tak, aby nás nezatěžovaly. Technologie nejsou spásným a univerzálním řešením pro každý aspekt vzdělání. Tradiční třídy zůstávají nenahraditelným prvkem výuky, zejména v oblastech, kde je klíčový osobní kontakt, sociální interakce a týmová spolupráce."
                    }
                ]
            },
            {
                sectionHeading: 'Webináře a online vzdělávání',
                sectionId: 8,
                sectionDate: '05.01.2024',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        id: 1,
                        details: "Úkolem k další přednášce je prozkoumat existující webináře v naší oblasti zájmu a získat tak představu o tom jaká je situace v této oblasti. Cílem je v daném okruhu zmapovat konkurenci pro případ, že bychom se rozhodli vytvořit vlastní webinář."
                    },
                    {
                        id: 2,
                        details: "Rozhodla jsem se prozkoumat oblast webinářů na téma robotických hraček a interaktivní výuky informatiky především na základních školách. O této oblasti je nyní vzhledem ke změnám v RVP platným od září 2023 poměrně dost slyšet."
                    },
                    {
                        id: 3,
                        details: "Nejčastěji se webináře dělí na první a druhý stupeň ZŠ a pak na ty, které se týkají přímo hodin informatiky a ty, které se týkají rozvoje digitálních kompetencí v jiných předmětech. Dále pak jsou webináře přímo určené tematicky na konkrétní oblast nebo technologii. Měla jsem pocit, že je webinářů v této oblasti hodně, po začátku hledání myslím, že už nastal trochu útlum. Nacházím mnoho webinářů především z předešlých let. Také opakovaně narážím na webináře k umělé inteligenci ve výuce a pro děti."
                    },
                    {
                        id: 4,
                        details: "V minulosti jsem se nejčastěji o webinářích informovala prostřednictvím skupin pro učitele na sociálních sítích nebo přímo na webových stránkách institucí, jako je například národní pedagogický institut. Vzhledem k tomu, že cílovou skupinou jsou učitelé, by mohlo být efektivní propagovat tyto akce přímo ve školách. Protože se ve školním prostředí nepohybuju, nedokážu posoudit zda se ta děje a v jaké podobě."
                    },
                    {
                        id: 5,
                        details: "Co mě však zaujalo a překvapilo, byl obecný popis mnoha webinářů. Často narazím na názvy typu \"Robotika pro 1. stupeň\", které jsou poměrně nekonkrétní a mohou být matoucí. Mnohdy chybí podrobnější informace o obsahu, které by pomohly potenciálním účastníkům lépe pochopit, o co přesně půjde. To může vést k nízkému zájmu, protože lidé nemají jasno, co mohou od webináře očekávat."
                    },
                    {
                        id: 6,
                        details: "Dalším aspektem, který mě zaujal, byla různorodost platforem, na kterých se webináře konají. Některé organizace využívají vlastní platformy, některé zase preferují Zoom a u některých jsem se o konkrétní platformě bez registrace nedozvěděla. Jasná komunikace ohledně použité platformy by mohly přispět k větší transparentnosti a pohodlí pro potenciální účastníky."
                    },
                    {
                        id: 7,
                        details: "Webináře k tématu vypsané v budoucnu, na které jsem během průzkumu narazila:"
                    },
                    {
                        id: 8,
                        details: "https://vlavici.cz/webinar/1780"
                    },
                    {
                        id: 9,
                        details: "https://www.projektsypo.cz/webinare/kabinet-informatika-a-ict.html"
                    },
                    {
                        id: 10,
                        details: "https://elixir-do-skol-online-centrum.webnode.cz/l/setkani-6-robotika/"
                    },
                    {
                        id: 11,
                        details: "Mnoho dalších již proběhlých je dostupných ze záznamu i na youtube."
                    }
                ]

            },
            {
                sectionHeading: 'Informační systémy ve vzdělávání',
                sectionId: 9,
                sectionDate: '05.01.2024',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        id: 1,
                        details: "Cílem je vyzkoušet si práci se školním vzdělávacím systémem edookit a nabídnout uživatelskou recenzi."
                    },
                    {
                        id: 2,
                        details: "Už jsem měla možnost s edookitem pracovat v rámci mých bakalářských praxí na střední škole, proto mě trochu překvapilo, že demo verze, kterou jsme dostali na vyzkoušení se trochu liší. Na základě proklikáni demo aplikace bych řekla, že tato verze ukazuje zobrazení pro ředitele, zatímco já pracovala se standardním zobrazením pro učitele."
                    },
                    {
                        id: 3,
                        details: "Edookit je jedním z mála nástrojů na českém trhu, který má zabudované takové množství funkcí s tím však souvisí to, že minimálně na první pohled působí značně přeplácaně. Mám z aplikace pocit, že tam úplně všechno, ale s tím, kde to najdu už příliš nepomáhá. Naopak oceňuji horní lištu, která zůstává neměnná ať jsem v rámci webu kdekoli a usnadňuje přepínání mezi jednotlivými částmi. Tlačítka jsou v liště navíc opatřená popisky, takže není třeba se spoléhat jen na ikony."
                    },
                    {
                        id: 4,
                        details: "Když se zaměřím na několik, řekla bych nejpoužívanějších částí. Zobrazení pošty není vůbec špatné především proto, že se rozložením podobá většině užívaných e-mailových klientů. Pozitivně hodnotím také oddělení omluvenek od ostatních zpráv."
                    },
                    {
                        id: 5,
                        details: "Další stránka je rozvrh, zde mi přijde poněkud nepraktické, že jako výchozí je zobrazen rozvrh, kterým je potřeba horizontálně scrolovat. Je zde však mnoho dalších možností, jaký rozvrh, jakým způsobem zobrazit. Myslím si, že se některé možnosti nacházejí i na více místech."
                    },
                    {
                        id: 6,
                        details: "Dále jsem zkusila zadat studentům známky. Nebyl to úkol, který bych zvládla bez nápovědy. Výběr hodnocení byl jasný, následná nutnost vytvořit nový sloupec asi dává smysl, ale pojmenování není příliš popisné a bez nápovědy bych na něho neklikla."
                    },
                    {
                        id: 7,
                        details: "Jsem zvyklá pracovat s obrazovkou rozdělenou mezi dvě aplikace abych nemusela často překlikávat. Zmenšení edookitu na polovinu není příliš praktická, mnoho obsahu se schová a není to moc komfortní."
                    },
                    {
                        id: 8,
                        details: "Celkový dojem není úplně špatný. Nejvíce bych doporučila zapracovat na designu a celkové přehlednosti systému. Pro uživatele, kteří v systému pracují často pravděpodobně není problém něco najít, protože ho znají dobře, pro začátečníky mi nepřijde intuitivní."
                    }
                ]

            },
            {
                sectionHeading: 'OER a Universal design',
                sectionId: 10,
                sectionDate: '05.01.2024',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        id: 1,
                        details: "Úkolem je položit si otázku, jak otevřený kurz udržet otevřený, ale současně k němu najít nějaký funkční ekonomický model. Nějaký model popsat uvést k němu okomentované výhody a nevýhody."
                    },
                    {
                        id: 2,
                        details: "V tomto semestru jsem absolvovala kurz KPI55, takže se mé návrhy budou vztahovat primárně k tomu, jak probíhal tento kurz. Očekávám však, že CORE053 má velmi podobnou organizaci."
                    },
                    {
                        id: 3,
                        details: "Napadají mě dva možné směry"
                    },
                    {
                        id: 4,
                        details: "Protože jde o primárně online kurzy, které mají poměrně vysokou míru studijní neúspěšnosti nabízí se zde možnost zavést nějakou penalizaci za nedokončení. Forma takového poplatku je nejlépe vymahatelná před započetím kurzu. Samozřejmě nesmí jít o kurz povinný nebo k němu musí být patřičná bezplatná náhrada. Vstupní poplatek v nějaké rozumné výši, který se úspěšným absolventům po skončení kurzu vrátí jednak zvyšuje pravděpodobnost dokončení a zároveň přinese finance pro tvůrce kurzu a umožní jeho další rozvoj."
                    },
                    {
                        id: 5,
                        details: "Pozitivem by měli být motivovanější účastníci, když za něco zaplatím svoje peníze obvykle o ně nechci přijít, navíc s vidinou získat je zpět. Další výhodou je možnost získat finanční prostředky od těch, kteří kurz nedokončí. Proti variantě obsahující nevratné školné zde student má vidinu návratu svých peněz i finančně nikoli “pouze“ ve formě nových znalostí a nemělo by to tedy tolik odrazovat."
                    },
                    {
                        id: 6,
                        details: "Negativem může být vysoké náklady na režii spojenou s hlídáním splněných podmínek a zaplacení poplatku. Negativem může být také finanční nedostupnost pro některé zájemce. Což se dá řešit splátkami nebo stipendiem, ale to opět zvyšuje nároky na organizaci."
                    },
                    {
                        id: 7,
                        details: "Obdobný model nyní využívá organizace Czechitas, která ve spolupráci s Googlem za startovné poskytne licenci ke studiu na Courseře [1]. K samotnému kurzu jsou podpůrné aktivity a skupiny. K dispozici jsou účastníkům konzultační hodiny s koučem a připomínky jednotlivých milníků ve studiu. Za splnění všech milníků a dokončení kurzu v daném čase účastníci dostanou certifikát, zůstane jim licence na kurz, a ještě dostanou zpět své startovné."
                    },
                    {
                        id: 8,
                        details: "Druhou variantou, která mě napadá je za poplatek možnost rozšířených konzultací a zpětných vazeb na úkoly nebo například zisk potvrzení o absolvování kurzu. Tento přístup umožňuje nechat kurz přístupný všem, ale těm, kteří mají zájem nabídne rozšířené služby."
                    },
                    {
                        id: 9,
                        details: "[1] https://www.czechitas.cz/google-cybersecurity-certificate"
                    }
                ]

            },
            {
                sectionHeading: 'Výzkum v EdTechu',
                sectionId: 11,
                sectionDate: '14.01.2024',
                sectionVisible: false,
                sectionParagraphs: [
                    {
                        id: 1,
                        details: "Posledním úkolem vycházejícím z přednášek je popsat nějaký etický problém v EdTechovém výzkumu a napsat, jak bychom ho řešili."
                    },
                    {
                        id: 2,
                        details: "V edTechu se lze zabývat výzkumem edukačních technologií na základě poptávky konkrétní firmy. Výzkumníci jsou pak financování těmito společnostmi a může dojít k tlaku na prezentaci pozitivních výsledků, což může narušit objektivitu a spolehlivost výzkumu. Potom hrozí vytváření a šíření zkreslených výsledků v důsledku konfliktu zájmů."
                    },
                    {
                        id: 3,
                        details: "Pro vyřešení takového problému se jako nejjednodušší východisko zdá nespolupracovat s takovými institucemi, jak to ale udělat, když není jiná cesta? Pro zachování nezávislosti výzkumného procesu je zásadní transparentnost finančních vztahů, což znamená, že výzkumníci by měli otevřeně prezentovat informace o jakýchkoliv finančních spojeních s firmami nebo jinými organizacemi, které mají zájem na výsledcích jejich výzkumu. Tato transparentnost by měla zahrnovat detaily o sponzorech a podmínkách finanční spolupráce."
                    },
                    {
                        id: 4,
                        details: "Zároveň je nezbytné ponechat k datům otevřený přístup a poskytnout tak možnost ostatním vědcům zkontrolovat a reprodukovat výsledky. Tím lze zvýšit transparentnost a snížit riziko zkreslení ve prospěch sponzorujících firem. S tím souvisí nezávislé hodnocení výsledků a metodiky, které může sloužit jako mechanismus kontroly a prevence případného zkreslení v důsledku konfliktu zájmů."
                    },
                    {
                        id: 5,
                        details: "V neposlední řadě je dobré zdůraznit vědeckou integritu výzkumníků. Hodnota vědecké integrity by měla mít přednost před krátkodobými zájmy, což zahrnuje pravdivou prezentaci výsledků. Jak pozitivních, tak negativních aspektů studie. Tím lze dosáhnout důvěryhodného, transparentního a etického výzkumného prostředí."
                    }
                ]
            },
        ],
    },


// ISKM55 Nástroje a metody datové analytiky
    {
        id: 5,
        type: "Kisk",
        title: 'ISKM55 Nástroje a metody datové analytiky',
        category: '1. semestr',

        img: 'https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_960_720.jpg',
        //img: 'https://drive.google.com/uc?export=view&id=154xI9RxiFQN52_5AomIvgB5ylX2WlwFa',
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
                sectionVisible: false,
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
                sectionId: 2,
                sectionDate: '9. 10. 2023',
                sectionVisible: false,
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
                sectionId: 3,
                sectionDate: '20. 11. 2023',
                sectionVisible: false,
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
                sectionId: 4,
                sectionDate: '27. 11. 2023',
                sectionVisible: false,
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
                sectionId: 5,
                sectionDate: '4. 12. 2023',
                sectionVisible: false,
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
//              sectionVisible: false,
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
