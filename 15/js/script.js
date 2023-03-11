console.log('=> js/script.js');
'use strict';

console.log( 4 + '5');
console.log( 4 + +'5');
console.log( 4 + +'5s');

let incr = 10, decr = 10;
console.log( `incr = ${incr}, incr++=${incr++}, incr = ${incr}, ++incr=${++incr}` );
console.log( `decr = ${decr}, decr--=${decr--}, decr = ${decr}, --decr=${--decr}` );

console.log( `5%2= ${5%2}` );

console.log( `2*4 ==  8  (${2*4 == 8})` );
console.log( `2*4 == '8' (${2*4 == '8'})` );

console.log( `2*4 ===  8  (${2*4 === 8})` );
console.log( `2*4 === '8' (${2*4 === '8'})` );

let isChecked = false,
	isClosed = false;
console.log(`${isChecked} && ${isClosed} = ${isChecked && isClosed}`);
console.log(`${isChecked} || ${isClosed} = ${isChecked || isClosed}`);
isClosed = true;
console.log(`${isChecked} && ${isClosed} = ${isChecked && isClosed}`);
console.log(`${isChecked} || ${isClosed} = ${isChecked || isClosed}`);
isChecked = true;
console.log(`${isChecked} && ${isClosed} = ${isChecked && isClosed}`);
console.log(`${isChecked} || ${isClosed} = ${isChecked || isClosed}`);

// приоритет операторов
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table

// Побитовые операторы
// https://learn.javascript.ru/bitwise-operators
