'use strict';

const num = 1;

// Такая функция выполняется сразу же после её объявления
(function(){
	let num = 2;
	console.log( num );
	console.log( num + 3 );
})();

console.log( num );

// 

const user = (function(){
	const privat = function(){
		console.log('I am private');
	};
	
	return {
		sayHello: privat
	};
})();

user.sayHello();
