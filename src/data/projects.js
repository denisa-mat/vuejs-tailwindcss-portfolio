// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'ISKM01 Informační vědy',
		category: '1. semestr',
		img: require('@/assets/images/web-project-2.jpg'),
		createdDate: 'Jul 26, 2021',
		tag: 'kisk',
	},
	{
		id: 2,
		title: 'Phoenix Digital Agency',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
		createdDate: 'Jul 26, 2021',
		tag: 'kisk',
	},
	{
		id: 3,
		title: 'Project Management UI',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-1.jpg'),
		createdDate: 'Jul 26, 2021',
		tag: 'kisk',
	},
	{
		id: 4,
		title: 'Cloud Storage Platform',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-2.jpg'),
		createdDate: 'Jul 26, 2021',
		tag: 'kisk',
	},
	{
		id: 5,
		title: 'React Social App',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-1.jpg'),
		createdDate: 'Jul 26, 2021',
		tag: 'kisk',
	},
	{
		id: 6,
		title: 'Apple Design System',
		category: 'Web Application',
		img: require('@/assets/images/web-project-1.jpg'),
		createdDate: 'Jul 26, 2021',
		tag: 'kisk',
	},
];

export default projects;
