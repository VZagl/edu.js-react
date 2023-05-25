module.exports = {
	env: {
		browser: true,
		es2021: true,
	},

	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		// 'airbnb',
	],

	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		// allowIndentationTabs: 1, // 0 = off, 1 = warn, 2 = error
		indent: [
			'warn',
			'tab',
		],
		'linebreak-style': [
			'error',
			'windows',
		],
		quotes: [
			'warn',
			'single',
		],
		semi: [
			'error',
			'always',
		],
		'no-unused-vars': [
			'warn',
			// , { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }
		],
		'no-inner-declarations': ['warn'],
	},
};
