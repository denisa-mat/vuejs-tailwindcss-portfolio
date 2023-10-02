// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	// ISKM01 Informační vědy
	{
		id: 1,
		type: "Kisk",
		title: 'ISKM01 Informační vědy',
		category: '1. semestr',
		img: require('@/assets/images/web-project-2.jpg'),
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
			// {
			// 	title: 'Vyučující',
			// 	detail: 'PhDr. M. Lorenz, Ph.D.',
			// 	link: false
			// },
			{
				title: 'Sylabus',
				detail: 'ISKM01',
				url: 'https://is.muni.cz/predmet/phil/podzim2023/ISKM01',
				link: true
			},
			// {
			// 	title: 'Soubory',
			// 	detail: 'OneDrive složka',
			// 	url: 'https://ucnmuni-my.sharepoint.com/:f:/g/personal/485131_muni_cz/Em02sF2vt0xFg-8NetjxmKABie-40GBe1izOkuCdrQ6eBA?e=3Hp9uB',
			// 	link: true
			// }
		],
		descriptionHeading: 'Popis předmetu',
		descriptionDetail: 'Cílem předmětu je představit nová témata a trendy v informační vědě, seznámit se stěžejními teoriemi, poukázat na různé aplikace poznatků informační vědy či na oblasti působení otevřené absolventům oboru. ',
		toolsHeading: 'Nástroje a dovednosti',
		toolsDetail: [
			'HTML',
			'JS',
			'VUE'
		],

		projectDetailsHeading: 'Předmět informační vědy',
		projectDetails: [
			{
				id: 1,
				details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
			},
			// {
			// 	id: 2,
			// 	details: 'Integer tempor. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Nulla pulvinar eleifend sem. Nullam sit amet magna in magna gravida vehicula. In enim a arcu imperdiet malesuada. Praesent in mauris eu tortor porttitor accumsan. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Maecenas sollicitudin. Nam sed tellus id magna elementum tincidunt. In rutrum. Proin in tellus sit amet nibh dignissim sagittis. Nullam sit amet magna in magna gravida vehicula. Aliquam erat volutpat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam dapibus fermentum ipsum. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Duis pulvinar. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. '
			// }
		],

		content: [
			{
				sectionHeading: 'Očekávání od předmětu',
				sectionId: 1,
				sectionDate: '23. 10. 2023',
				sectionParagraphs: [
					{
						id: 1,
						details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
					},
					// {
					// 	id: 2,
					// 	details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
					// }
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
		img: require('@/assets/images/web-project-2.jpg'),
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
			// {
			// 	title: 'Vyučující',
			// 	detail: 'Kudrnáč, Lass, Lorenz',
			// 	link: false
			// },
			{
				title: 'Sylabus',
				detail: 'ISKM01',
				url: 'https://is.muni.cz/auth/predmet/phil/podzim2023/ISKM02',
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
		projectDetailsHeading: 'Předmět DISRI',
		projectDetails: [
			{
				id: 1,
				details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
			},
			// {
			// 	id: 2,
			// 	details: 'Integer tempor. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Nulla pulvinar eleifend sem. Nullam sit amet magna in magna gravida vehicula. In enim a arcu imperdiet malesuada. Praesent in mauris eu tortor porttitor accumsan. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Maecenas sollicitudin. Nam sed tellus id magna elementum tincidunt. In rutrum. Proin in tellus sit amet nibh dignissim sagittis. Nullam sit amet magna in magna gravida vehicula. Aliquam erat volutpat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam dapibus fermentum ipsum. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Duis pulvinar. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. '
			// },
			// {
			// 	id: 3,
			// 	details: 'In rutrum. Pellentesque ipsum. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Proin mattis lacinia justo. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer imperdiet lectus quis justo. Phasellus faucibus molestie nisl. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Vivamus ac leo pretium faucibus. Vivamus luctus egestas leo. Fusce nibh. Pellentesque ipsum. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Etiam neque. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. '
			// },
			// {
			// 	id: 4,
			// 	details: 'In enim a arcu imperdiet malesuada. Mauris tincidunt sem sed arcu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. '
			// },
			// {
			// 	id: 5,
			// 	details: 'Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Pellentesque sapien. Nulla non arcu lacinia neque faucibus fringilla. Nam sed tellus id magna elementum tincidunt. Integer lacinia. Phasellus faucibus molestie nisl. Mauris dictum facilisis augue. Vivamus ac leo pretium faucibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum fermentum tortor id mi. '
			// }
		],

		content: [
			{
				sectionHeading: 'Očekávání od předmětu',
				sectionId: 1,
				sectionDate: '23. 10. 2023',
				sectionParagraphs: [
					{
						id: 1,
						details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
					},
					// {
					// 	id: 2,
					// 	details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
					// }
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
		img: require('@/assets/images/web-project-2.jpg'),
		createdDate: 'Jul 26, 2021',
		tag: 'projekt',
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
			// {
			// 	title: 'Vyučující',
			// 	detail: 'Kudrnáč, Lass, Lorenz',
			// 	link: false
			// },
			{
				title: 'Sylabus',
				detail: 'ISKM03',
				url: 'https://is.muni.cz/predmet/phil/podzim2023/ISKM03',
				link: true
			},
			// {
			// 	title: 'Soubory',
			// 	detail: 'OneDrive složka',
			// 	url: 'https://ucnmuni-my.sharepoint.com/:f:/g/personal/485131_muni_cz/Em02sF2vt0xFg-8NetjxmKABie-40GBe1izOkuCdrQ6eBA?e=3Hp9uB',
			// 	link: true
			// }
		],
		descriptionHeading: 'Popis předmetu',
		descriptionDetail: 'Předmět má dva stěžejní cíle. Dát studentům relevantní poznání knižního trhu a knihovních procesů na pozadí vývoje literatury, společnosti a humanitních věd. Vést studenty k tomu, aby si uvědomili a chápali faktory, které se na vývoji pojetí spisovatele, literárního pole a akvizice podílely v minulosti a které jsou hybateli současného dění. ',
		toolsHeading: 'Nástroje a dovednosti',
		toolsDetail: [
			// 'HTML',
			// 'JS',
			// 'VUE'
		],

		content: [
			{
				sectionHeading: 'Ocekavani od predmetu',
				sectionId: 1,
				sectionDate: '23. 10. 2023',
				sectionParagraphs: [
					{
						id: 1,
						details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
					},
					// {
					// 	id: 2,
					// 	details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
					// }
				]
			}
		],

		projectDetailsHeading: 'Předmět Literatura a knihovní procesy',
		projectDetails: [
			{
				id: 1,
				details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
			},
			// {
			// 	id: 2,
			// 	details: 'Integer tempor. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Nulla pulvinar eleifend sem. Nullam sit amet magna in magna gravida vehicula. In enim a arcu imperdiet malesuada. Praesent in mauris eu tortor porttitor accumsan. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Maecenas sollicitudin. Nam sed tellus id magna elementum tincidunt. In rutrum. Proin in tellus sit amet nibh dignissim sagittis. Nullam sit amet magna in magna gravida vehicula. Aliquam erat volutpat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam dapibus fermentum ipsum. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Duis pulvinar. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. '
			// }
		],
	},

	// ISKM55 Nástroje a metody datové analytiky
	{
	id: 1,
	type: "Kisk",
	title: 'ISKM55 Nástroje a metody datové analytiky',
	category: '1. semestr',
	img: require('@/assets/images/preview_img/ISKM55.jpg'),
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
		url: 'https://ucnmuni-my.sharepoint.com/:f:/g/personal/485131_muni_cz/EkmCxEv6eO1Kjq-r9YbyEokB6c8zXJAk7eWf9fwpcD2kAQ?e=ZJxpi5',
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

	// projectDetailsHeading: 'Předmět informační vědy',
	// projectDetails: [
	// {
	// 	id: 1,
	// 	details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
	// },
	//],

	content: [
	{
		sectionHeading: 'Úkol 1',
		sectionId: 1,
		sectionDate: '2. 10. 2023',
		sectionParagraphs: [
			{
				id: 1,
				details: 'První úkol se skládá z více částí konkrétně vytvoření CSV souboru zobrazující náš týdenní rozvrh, práce s GPX formátem a vyzkoušení práce s API.'
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
			{
				id: 6,
				details: 'Snímky obrazovky jsou ve sdílené složce na kterou je odkaz v bočím panelu.'
			},
		]
	}
],
},

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
	// {
	// 	id: 4,
	// 	title: 'Cloud Storage Platform',
	// 	category: 'UI/UX Design',
	// 	img: require('@/assets/images/ui-project-2.jpg'),
	// 	createdDate: 'Jul 26, 2021',
	// 	tag: 'kisk',
	// },
	// {
	// 	id: 5,
	// 	title: 'React Social App',
	// 	category: 'Mobile Application',
	// 	img: require('@/assets/images/mobile-project-1.jpg'),
	// 	createdDate: 'Jul 26, 2021',
	// 	tag: 'kisk',
	// },
	// {
	// 	id: 6,
	// 	title: 'Apple Design System',
	// 	category: 'Web Application',
	// 	img: require('@/assets/images/web-project-1.jpg'),
	// 	createdDate: 'Jul 26, 2021',
	// 	tag: 'kisk',
	// },
];

export default projects;
