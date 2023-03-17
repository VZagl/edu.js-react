module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'warn',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'warn',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-unused-vars': [
			'warn'
			//, { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }
		],
		'no-inner-declarations' : ['warn']
	}
};
