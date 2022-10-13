// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Luna',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '17fe48fe487f74b83b68e5452e0e4040', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '26.41224',
	defaultLongitude: '127.75044',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Map',
			icon: 'map-pin',
			link: 'http://act.hoyolab.com/ys/app/interactive-map/index.html?lang=en-us',
		},
		{
			id: '2',
			name: 'Planner',
			icon: 'book-open-check',
			link: 'http://genshin-center.com/planner',
		},
		{
			id: '3',
			name: 'Tracker',
			icon: 'search',
			link: 'http://paimon.moe',
		},
		{
			id: '4',
			name: 'Check-In',
			icon: 'calendar-heart',
			link: 'https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481&lang=en-us',
		},
		{
			id: '5',
			name: 'Optimizer',
			icon: 'zap',
			link: 'https://frzyc.github.io/genshin-optimizer/#/characters',
		},
		{
			id: '6',
			name: 'Builds',
			icon: 'swords',
			link: 'http://tinyurl.com/genshinbuilds',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'coffee',
			id: '1',
			links: [
				{
					name: 'Music',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Pinterest',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Twitch',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'YouTube',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
			],
		},
		{
			icon: 'shopping-bag',
			id: '2',
			links: [
				{
					name: 'Amazon',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Etsy',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'Mercari',
					link: 'https://www.trello.com',
				},
				{
					name: 'Sephora',
					link: 'https://www.slack.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Builds',
					link: 'https://www.spotify.com',
				},
				{
					name: 'KQM',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Ambr',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Optimizer',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
