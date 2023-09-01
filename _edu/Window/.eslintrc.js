module.exports = {
	env: {
		browser: true,
		es2021: true,
	},

	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		// 'airbnb',
	],

	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],

	rules: {
		// 'prettier/prettier': 'error', // Обязательно!! Подсвечивает ошибки из Prettier.
		'react/prop-types': 0, // Отключаем правило проверки передаваемых типов.
		// allowIndentationTabs: 1, // 0 = off, 1 = warn, 2 = error
		// indent: ['warn', 'tab'],
		// linebreakStyle: ['warn', 'windows'],
		quotes: ['warn', 'single'],
		semi: ['error', 'always'],
		'no-unused-vars': [
			'warn',
			// , { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }
		],
		'no-inner-declarations': ['warn'],
		'no-mixed-spaces-and-tabs': [0],
	},
};
