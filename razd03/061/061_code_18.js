/*
Задание:
Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. 
Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, 
поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).

Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. 
Если строка является панграммой - вернется true, если нет - false.

Пример:
isPangram(«The quick brown fox jumps over the lazy dog») => true
isPangram(«Hello world») => false

P.S. Эта задача имеет много вариантов решения, часть из которых использует возможности, 
которые мы будем проходить дальше по курсу. Но и без них можно это сделать. 

*/

'use strict';

function isPangram(_str) {
	let s = _str.toUpperCase();
	let arr = Array.from(new Set(s)).filter( (v) => (v>='A')&&(v<='Z') );
	return arr.length === 26;
}

console.log( isPangram('The quick brown fox jumps over the lazy dog') , '=> true' );
console.log( isPangram('Hello world')                                 , '=> false');
