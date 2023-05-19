'use strict';

let path = require('path');

//console.log('>>> path =', path);
console.log('>>> __dirname =', __dirname);

module.exports = {
	mode: 'development',
	entry: './js/script.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/js'
	},
	watch: true,

	devtool: 'source-map',

	module: {}
};
