'use strict';
/*
	localStorage.setItem('number', 5);
	localStorage.clear();
	localStorage.removeItem('number');
	console.log( localStorage.getItem('number') );
*/

const vCeckBox = document.querySelector('#checkbox');
const vForm    = document.querySelector('form');
const vChange  = document.querySelector('#color');

const vIsChecked = localStorage.getItem('isChecked');
if ( vIsChecked ) {
	vCeckBox.checked = vIsChecked;
}

vCeckBox.addEventListener('change', () => {
	localStorage.setItem('isChecked', vCeckBox.checked);
});

if ( localStorage.getItem('bg') ) {
	vForm.style.background = 'red';
}
vChange.addEventListener('click', () => {
	if ( localStorage.getItem('bg') ) {
		localStorage.removeItem('bg');
		vForm.style.background = 'white';
	} else {
		localStorage.setItem('bg', 'changed');
		vForm.style.background = 'red';
	}
});

const persone = {
	name: 'Alex',
	age: 25
};
localStorage.setItem('persone', JSON.stringify(persone) );
console.log( localStorage.getItem('persone') );
console.log( JSON.parse( localStorage.getItem('persone') ) );
