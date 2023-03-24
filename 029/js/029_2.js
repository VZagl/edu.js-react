/*
Задачи:

1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. 
(Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, 
проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа 
будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно 
этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:
getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
getTimeFromMinutes(-150) => "Ошибка, проверьте данные"
*/

/*
2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:
findMaxNumber(1, 5, 6.6, 11); =>  11
findMaxNumber(1, 5, '6', '10');  =>  0

У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)
*/
'use strict';

function getTimeFromMinutes(_minutes) {
	if( typeof(_minutes)!='number' || !Number.isInteger(_minutes) || _minutes<0 ) 
		return 'Ошибка, проверьте данные';
	const vHours = Math.floor(_minutes/60);
	const vMinutes = _minutes - vHours*60;
	if( vHours === 1 )
		return `Это ${vHours} час и ${vMinutes} минут`;
	else if( [2,3,4].includes(vHours) )
		return `Это ${vHours} часа и ${vMinutes} минут`;
	else
		return `Это ${vHours} часов и ${vMinutes} минут`;

}
console.log( '\n1', getTimeFromMinutes(150) , '\n>', 'Это 2 часа и 30 минут' );
console.log( '\n2', getTimeFromMinutes(50)  , '\n>', 'Это 0 часов и 50 минут' );
console.log( '\n3', getTimeFromMinutes(0)   , '\n>', 'Это 0 часов и 0 минут' );
console.log( '\n4', getTimeFromMinutes(-150), '\n>', 'Ошибка, проверьте данные' );

console.log();
for(let i=1; i<=700; i+=60){
	console.log( `\t${i}\t`, getTimeFromMinutes(i) );
}
let i = 's';
console.log( `\t${i}\t`, getTimeFromMinutes(i) );
i = 12.34;
console.log( `\t${i}\t`, getTimeFromMinutes(i) );

// 2
function findMaxNumber(_n1, _n2, _n3, _n4) {
	if( typeof(_n1)!='number' || typeof(_n2)!='number' || typeof(_n3)!='number' || typeof(_n4)!='number')
		return 0;
	return Math.max( _n1, _n2, _n3, _n4 );
}

console.log( '\n1', findMaxNumber(1, 5, 6.6, 11)  , '\n>', 11 );
console.log( '\n2', findMaxNumber(1, 5, '6', '10'), '\n>',  0 );
console.log( '\n1', findMaxNumber(1, 5, 6.6, -11)  , '\n>', 6.6 );
