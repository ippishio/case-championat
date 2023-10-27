module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{jpg,png,jpeg,css,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};