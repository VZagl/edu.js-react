'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');
const scr = document.querySelector('.sctollLabel');

const width = box.clientWidth;
const height = box.clientHeight;
console.log('client...', width, height);

const offsetWidth = box.offsetWidth;
const offsetHeight = box.offsetHeight;
console.log('offset...', offsetWidth, offsetHeight);

const scrollWidth = box.scrollWidth;
const scrollHeight = box.scrollHeight;
console.log('scroll...', scrollWidth, scrollHeight);

btn.addEventListener('click', () => {
	box.style.height = box.scrollHeight + 'px';
});

box.addEventListener('scroll', () => {
	scr.innerText = `scroll: ${box.scrollTop} of ${box.scrollHeight-box.clientHeight}`;
});

// элемент.getBoundingClientRect() - получить
console.log('getBoundingClientRect', box.getBoundingClientRect() );

// window.getComputedStyle( элемент ) - получить текущие стили для определённого элемента.
const style = window.getComputedStyle(box);
console.log('', style );

document.addEventListener('scroll', () => {
	console.log( 
		'document.documentElement.scroll',
		document.documentElement.scrollTop,
		'of',
		document.documentElement.scrollHeight - document.documentElement.clientHeight
	);
});
