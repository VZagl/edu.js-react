'use strict';
/*
Задачи:

1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, 
программа сделает это за вас.

P.S. возвращать - это использовать ключевое слово return.

P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.
*/

function sayHello(name) {
	return `Привет, ${name}!`;
}
//console.log( sayHello('Антон') );

/*
2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив 
из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
*/

function returnNeighboringNumbers( num ) {
	const res = [];
	for( let i = 0; i < 3; i++) {
		res[i] = num - 1 + i;
	}
	return res;
}
//console.log( returnNeighboringNumbers(5) );

/*
3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. 
Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). 
Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, 
разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. 
(Проверяем через оператор typeof)

Примеры:

Вызов функции getMathResult(5, 3) даст ответ 5---10---15

Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

Вызов функции getMathResult(10, '5') даст ответ 10

Вызов функции getMathResult(10, 0) даст ответ 10

Вызов функции getMathResult(20, -5) даст ответ 20

Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, 
проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается 
по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, 
каждый раз увеличиваясь на само себя. 
*/
function getMathResult( arg1, arg2) {
	if( typeof(arg2) != 'number' || arg2 <= 0) {
		return arg1;
	}
	let res = '';
	for (let i = 1; i <= arg2; i++) {
		res += arg1 * i;
		if(i < arg2) {
			res += '---';
		}
	}
	return res;
}
console.log( '\n1', getMathResult(5, 3)   , '\r> 5---10---15');
console.log( '\n2', getMathResult(3, 10)  , '\r> 3---6---9---12---15---18---21---24---27---30');
console.log( '\n3', getMathResult(10, 5)  , '\r> 10---20---30---40---50');
console.log( '\n4', getMathResult(10, '5'), '\r> 10');
console.log( '\n5', getMathResult(10, 0)  , '\r> 10');
console.log( '\n6', getMathResult(20, -5) , '\r> 20');
