// require('es6-promise').polyfill();
// import 'nodelist-foreach-polyfill';

import { tns } from '../node_modules/tiny-slider/src/tiny-slider';

window.addEventListener('DOMContentLoaded', () => {

	tns({
		container: '.my-slider',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		fixedWidth: 800
	});

});
