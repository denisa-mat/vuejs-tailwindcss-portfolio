// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [

// ISKM01 Informační vědy
	{
		id: 1,
		type: "Kisk",
		title: 'ISKM01 Informační vědy',
		category: '1. semestr',
		img: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_1280.jpg',
		createdDate: '26. 9. 2023',
		tag: 'kisk',
		about: 'O předmětu',
		aboutDetail: [
			{
				title: 'Semetr',
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
				detail: 'OneDrive složka',
				url: 'https://ucnmuni-my.sharepoint.com/:f:/g/personal/485131_muni_cz/Em02sF2vt0xFg-8NetjxmKABQFtKyzmf953huGFg469Lmg?e=ETGttL',
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
		img: 'https://cdn.pixabay.com/photo/2015/05/28/14/38/ux-787980_1280.jpg',
		createdDate: 'Jul 26, 2021',
		tag: 'kisk',
		about: 'O předmětu',
		aboutDetail: [
			{
				title: 'Semetr',
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
				detail: 'OneDrive složka',
				url: 'https://ucnmuni-my.sharepoint.com/:f:/g/personal/485131_muni_cz/EgpPRGScl-tKpZ75KAR6sncBDxu6-exz_U7zqeQ06nUXaA?e=XeAbP2',
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
		img: 'https://cdn.pixabay.com/photo/2018/06/17/09/58/book-3480216_1280.jpg',
		createdDate: 'Jul 26, 2021',
		tag: 'kisk',
		about: 'O předmětu',
		aboutDetail: [
			{
				title: 'Semetr',
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
				detail: 'OneDrive složka',
				url: 'https://ucnmuni-my.sharepoint.com/:f:/g/personal/485131_muni_cz/EmxdVrFC9JZCtXSkK9gZlwQBh8cYrS4i0LcYN7Mh6CPGxw?e=T8gWtT',
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
		img: 'https://cdn.pixabay.com/photo/2020/05/31/16/48/write-5243229_1280.jpg',
		// img: 'https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_1280.jpg',
		createdDate: '00. 00. 0000',
		tag: 'kisk',
		about: 'O předmětu',
		aboutDetail: [
			{
				title: 'Semetr',
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
				detail: 'OneDrive složka',
				url: 'link_one_drive',
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
		img: 'https://cdn.pixabay.com/photo/2016/10/16/00/36/one-against-all-1744093_1280.jpg',
		createdDate: '00. 00. 0000',
		tag: 'kisk',
		about: 'O předmětu',
		aboutDetail: [
			{
				title: 'Semetr',
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
				detail: 'OneDrive složka',
				url: 'link_one_drive',
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
		img: 'https://cdn.pixabay.com/photo/2021/12/26/13/42/lego-6895159_1280.jpg',
		createdDate: '26. 9. 2023',
		tag: 'kisk',
		about: 'O předmětu',
		aboutDetail: [
			{
				title: 'Semetr',
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
				detail: 'OneDrive složka',
				url: 'https://ucnmuni-my.sharepoint.com/:f:/g/personal/485131_muni_cz/Em02sF2vt0xFg-8NetjxmKABie-40GBe1izOkuCdrQ6eBA?e=3Hp9uB',
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
				details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
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
		img: 'https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg',
		createdDate: '01. 10. 2023',
		tag: 'kisk',
		about: 'O předmětu',
		aboutDetail: [
		{
			title: 'Semetr',
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
			detail: 'OneDrive složka',
			url: 'https://ucnmuni-my.sharepoint.com/:f:/g/personal/485131_muni_cz/EkmCxEv6eO1Kjq-r9YbyEokB6c8zXJAk7eWf9fwpcD2kAQ?e=VTOAxl',
			link: true
		}
		],
			descriptionHeading: 'Popis předmětu',
			descriptionDetail: 'Cílem předmětu je poskytnutí studentům vhled do problematiky datové analýzy a nejpoužívanějších metod či nástrojů pro práci s daty.',
			toolsHeading: 'Nástroje a dovednosti',
			toolsDetail: [
			'CSV',
			'XML',
			'API'
			],
			//projectDetailsHeading: 'Předmět',
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
						id: 1,
						details: 'První úkol se skládá z více částí, konkrétně vytvoření CSV souboru zobrazující náš týdenní rozvrh, práce s GPX formátem a vyzkoušení práce s API.'
					},
					{
						id: 2,
						details: 'CSV soubor jsem navrhla tak, že entitou je jeden vyučovací blok, který obsahuje informace o kódu předmětu, název, místnost v níž výuka probíhá (lokace), den v týdnu a časové údaje od a do. CSV bylo vytvořené v textovém editoru sublime a následně otevřeno v excelu jako CSV soubor. Protože názvy předmmětů obsahují čárky, které jsem původně použila jako oddělovač změnila jsem oddělovač na středník.'
					},
					{
						id: 3,
						details: 'Pro vizualizaci trasy jsem zvolila cestu z Náměstí Svobody kolem Červeného kostela až k hlavní budově filozofické fakulty. Trasu jsem si naplánovala v mapy.cz odkud lze exportovat gpx soubor. GPX formát je XML schéma, navržené pro data GPS. Pro zobrazení vygenerovaného schématu je použit gpsvisualizer.com.'
					},
					{
						id: 4,
						details: 'Dalším pod-úkolem bylo zjistit jakým způsobem komunikuje iRIS se serverem, aby v aplikaci mapa.idsjmk.cz vozidla vypadala, že jsou v pohybu. Web pravidělně volá přepisovaný json soubor https://mapa.idsjmk.cz/api/vehicles.json který obsahuje informace o všech aktuálně jedoucích vozidlech. Každé vozidlo má několik atributů - ID, název linky, aktuální polohu GPS (zeměpisná šířka a délka), počíteční a koncovou zastávku a další. Přišlo mi zajímavé, že je použito API map.cz.'
					},
					{
						id: 5,
						details: 'Vyzkoušela jsem se dotazovat pomocí služby postman na PokeAPI. Musím říct, že jsem si pro zkoušení asi měla vybrat nějaké jednodušší. Vzhledem k množství pokemonů a informací, které o jednotlivých pokémonech jsou nebylo jednoduché se ve výsledku vyznat. Nicméně podařilo se mi získat například seznam všech pokémonů mužského pohlaví (pokeapi.co/api/v2/gender/2/) nebo informace o mém oblíbeném Piplupovi (https://pokeapi.co/api/v2/pokemon/piplup).'
					},
				]
			},
			{
				sectionHeading: 'Úkol 1',
				sectionId: 1,
				sectionDate: '2. 10. 2023',
				sectionParagraphs: [
					{
						id: 1,
						details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.',
					},
				],
			},
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
// 				title: 'Semetr',
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
