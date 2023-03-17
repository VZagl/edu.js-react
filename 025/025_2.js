// =================================================================
'use strict';
// =================================================================
//	замыкание:
//		создаётся новый экземпляр "createCounter.counter" из области "область_2" при создании экземпляра "myFunction"
//	на этот экземпляр "createCounter.counter" создаётся замыкание.
//		это похоже на создание экземпляра класса "createCounter", имеющего переменную "counter"
//	и при каждом создании "const переменная = createCounter();" создаётся новый экземпляр класса "createCounter".
//		замыкание происходит в случае, если при выходе из области объявления становятся недоступными переменные, 
//	использующиеся внутри объявления фукции.
//
{ // область "область_1"
	let counter = 10;
	function createCounter() { // область "область_2"
		let counter = 20;
		const myFunction = function() {
			counter = counter + 1;
			return counter;
		};
		return myFunction;
	}
	const inc1 = createCounter();
	const c11 = inc1();
	const c12 = inc1();
	const c13 = inc1();
	console.log('c1*:', c11, c12, c13);
	const inc2 = createCounter();
	const c21 = inc2();
	const c22 = inc2();
	console.log('c2*:', c21, c22);
	console.log('counter', counter);
}
/* результат:
c1*: 21 22 23
c2*: 21 22
counter 10
*/
// =================================================================
//	НЕ замыкание:
//		создаётся ССЫЛКА на экземпляр "counter" из области "область_1" при создании экземпляра "myFunction"
//	( ближайшая предыдущая относительно "const myFunction = function() {" область, 
//	в которой присутствует переменная "counter" ).
//		при каждом создании экземпляра "const myFunction = function() {"
//	ссылается на один и тот же экземпляр "counter" из области "область_1".
//
{ // область "область_1"
	let counter = 10;
	function createCounter() { // область "область_2"
		//let counter = 20;
		const myFunction = function() {
			counter = counter + 1;
			return counter;
		};
		return myFunction;
	}
	const inc1 = createCounter();
	const c11 = inc1();
	const c12 = inc1();
	const c13 = inc1();
	console.log('c1*:', c11, c12, c13);
	const inc2 = createCounter();
	const c21 = inc2();
	const c22 = inc2();
	console.log('c2*:', c21, c22);
	console.log('counter', counter);
}
/* результат:
c1*: 11 12 13
c2*: 14 15
counter 15
*/

// =================================================================
/*
	1: function createCounter() {
	2:   let counter = 0
	3:   const myFunction = function() {
	4:     counter = counter + 1
	5:     return counter
	6:   }
	7:   return myFunction
	8: }
	9: const increment = createCounter()
 10: const c1 = increment()
 11: const c2 = increment()
 12: const c3 = increment()
 13: console.log('example increment', c1, c2, c3)
*/
// =================================================================
