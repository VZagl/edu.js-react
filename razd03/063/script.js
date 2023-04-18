'use strict';

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('div#first');
/*
console.log(btns);
console.log(btns[0].classList);
console.log( btns[0].classList.item(0) );
console.log( btns[0].classList.add('red') );
// console.log( btns[1].classList.toggle('blue') );
console.log( btns[1].classList.remove('blue') );

if (btns[0].classList.contains('blue')){
	console.log( btns[0].classList.toggle('blue-class') );
}

btns[0].addEventListener( 'click', (i) => {
	i.target.classList.toggle('red');
	btns[1].classList.toggle('red');
});
*/
wrapper.addEventListener( 'click', (event) => {
	if (!event.target || !event.target.matches('button.red')) return;
	// if (!event.target || event.target.nodeName !== 'BUTTON') return;
	// event.target.classList.toggle('red');
	btns[1].classList.toggle('red');
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
