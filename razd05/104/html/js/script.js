// const globalObj = {};
// import {globalObj} from '../services/globals';

import calc   from './modules/calc'  ;
import cards  from './modules/cards' ;
import forms  from './modules/forms' ;
import modal  from './modules/modal' ;
import slider from './modules/slider';
import tabs   from './modules/tabs'  ;
import timer  from './modules/timer' ;

window.addEventListener('DOMContentLoaded', () => {
	forms ('form');
	globalObj.modal =	modal('.modal');
	calc  ();
	cards ();
	tabs  ('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	timer ('.timer', '2023-06-22');
	slider({
		container: 'div.offer__slider',
		slide: '.offer__slide',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		totalCounter: '#total',
		currentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner'
	});
});

console.log('>>> globalObj =', globalObj);
