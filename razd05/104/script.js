'use strict';

window.addEventListener('DOMContentLoaded', () => {
	const obj1 = new Ctest();
	// в this экземпляр объекта
	document.querySelector('#btn').addEventListener('click', () => obj1.say() );

	// так не работает - в this кнопка из "querySelector('#btn')"
	// document.querySelector('#btn').addEventListener('click', obj1.say );
});

class Ctest {
	constructor(){
		this.text = 'Ctest.constructor this.text';
		console.log('this = ', this);
	}

	say(){
		console.log('Ctest.say()');
		console.log('this = ', this);
	}

}
