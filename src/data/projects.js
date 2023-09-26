// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		type: "Kisk",
		title: 'ISKM01 Hello wolrd',
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
			{
				title: 'Vyučující',
				detail: 'Kudrnáč, Lass, Lorenz',
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
				url: 'https://ucnmuni-my.sharepoint.com/:f:/g/personal/485131_muni_cz/Em02sF2vt0xFg-8NetjxmKABie-40GBe1izOkuCdrQ6eBA?e=3Hp9uB',
				link: true
			}
		],
		descriptionHeading: 'Popis předmetu',
		descriptionDetail: 'Cílem předmětu je představit nová témata a trendy v informační vědě, seznámit se stěžejními teoriemi, poukázat na různé aplikace poznatků informační vědy či na oblasti působení otevřené absolventům oboru. ',
		toolsHeading: 'Nástroje a dovednosti',
		toolsDetail: [
			'HTML',
			'JS',
			'VUE'
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
					{
						id: 2,
						details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
					}
				]
			}
		],

		projectDetailsHeading: 'Předmět informační vědy',
		projectDetails: [
			{
				id: 1,
				details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
			},
			{
				id: 2,
				details: 'Integer tempor. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Nulla pulvinar eleifend sem. Nullam sit amet magna in magna gravida vehicula. In enim a arcu imperdiet malesuada. Praesent in mauris eu tortor porttitor accumsan. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Maecenas sollicitudin. Nam sed tellus id magna elementum tincidunt. In rutrum. Proin in tellus sit amet nibh dignissim sagittis. Nullam sit amet magna in magna gravida vehicula. Aliquam erat volutpat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam dapibus fermentum ipsum. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Duis pulvinar. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. '
			}
		],
	},
	{
		id: 2,
		type: "Kisk",
		title: 'ISKM02 Hello wolrd',
		category: '2. semestr',
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
			{
				title: 'Vyučující',
				detail: 'Kudrnáč, Lass, Lorenz',
				link: false
			},
			{
				title: 'Sylabus',
				detail: 'ISKM01',
				url: 'https://is.muni.cz/auth/predmet/phil/podzim2023/ISKM01',
				link: true
			}
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
			{
				id: 2,
				details: 'Integer tempor. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Nulla pulvinar eleifend sem. Nullam sit amet magna in magna gravida vehicula. In enim a arcu imperdiet malesuada. Praesent in mauris eu tortor porttitor accumsan. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Maecenas sollicitudin. Nam sed tellus id magna elementum tincidunt. In rutrum. Proin in tellus sit amet nibh dignissim sagittis. Nullam sit amet magna in magna gravida vehicula. Aliquam erat volutpat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam dapibus fermentum ipsum. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Duis pulvinar. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. '
			},
			{
				id: 3,
				details: 'In rutrum. Pellentesque ipsum. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Proin mattis lacinia justo. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer imperdiet lectus quis justo. Phasellus faucibus molestie nisl. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Vivamus ac leo pretium faucibus. Vivamus luctus egestas leo. Fusce nibh. Pellentesque ipsum. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Etiam neque. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. '
			},
			{
				id: 4,
				details: 'In enim a arcu imperdiet malesuada. Mauris tincidunt sem sed arcu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. '
			},
			{
				id: 5,
				details: 'Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Pellentesque sapien. Nulla non arcu lacinia neque faucibus fringilla. Nam sed tellus id magna elementum tincidunt. Integer lacinia. Phasellus faucibus molestie nisl. Mauris dictum facilisis augue. Vivamus ac leo pretium faucibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum fermentum tortor id mi. '
			}
		]
	},
	{
		id: 3,
		type: "Projects",
		title: 'ISKM01 Hello wolrd',
		category: '3. semestr',
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
			{
				title: 'Vyučující',
				detail: 'Kudrnáč, Lass, Lorenz',
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
				url: 'https://ucnmuni-my.sharepoint.com/:f:/g/personal/485131_muni_cz/Em02sF2vt0xFg-8NetjxmKABie-40GBe1izOkuCdrQ6eBA?e=3Hp9uB',
				link: true
			}
		],
		descriptionHeading: 'Popis předmetu',
		descriptionDetail: 'Cílem předmětu je představit nová témata a trendy v informační vědě, seznámit se stěžejními teoriemi, poukázat na různé aplikace poznatků informační vědy či na oblasti působení otevřené absolventům oboru. ',
		toolsHeading: 'Nástroje a dovednosti',
		toolsDetail: [
			'HTML',
			'JS',
			'VUE'
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
					{
						id: 2,
						details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
					}
				]
			}
		],

		projectDetailsHeading: 'Předmět informační vědy',
		projectDetails: [
			{
				id: 1,
				details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam quis nulla. Suspendisse nisl. Duis risus. Nulla pulvinar eleifend sem. Maecenas libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. '
			},
			{
				id: 2,
				details: 'Integer tempor. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Nulla pulvinar eleifend sem. Nullam sit amet magna in magna gravida vehicula. In enim a arcu imperdiet malesuada. Praesent in mauris eu tortor porttitor accumsan. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Maecenas sollicitudin. Nam sed tellus id magna elementum tincidunt. In rutrum. Proin in tellus sit amet nibh dignissim sagittis. Nullam sit amet magna in magna gravida vehicula. Aliquam erat volutpat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam dapibus fermentum ipsum. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Duis pulvinar. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. '
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
