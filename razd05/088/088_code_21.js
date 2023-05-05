/*
Задачи:

1) У вас есть небольшой массив с данными о доходах каждой торговой точки. 
Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных 
и возвращает сумму только положительных значений из каждого объекта. (число)

Пример:
getPositiveIncomeAmount(funds) => 13300

2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. 
Если хотя бы один из объектов содержит отрицательное значение поля amount, 
то функция возвращает сумму всех значений. (число) 
Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.

Пример:
getTotalIncomeAmount(funds) => -500
*/

'use strict';

const funds = [
	{amount: -1400},
	{amount: 2400},
	{amount: -1000},
	{amount: 500},
	{amount: 10400},
	{amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
	return data.reduce( (_prev, _cur) => _prev + (_cur.amount > 0 ? _cur.amount : 0), 0);
};

const getTotalIncomeAmount = (data) => {
	if ( data.some( _v => _v.amount < 0) ) {
		return data.reduce( (_prev, _cur) => _prev + _cur.amount, 0);
	} else {
		return getPositiveIncomeAmount(data);
	}
};

console.log( funds );
console.log( '\n', getPositiveIncomeAmount(funds), '=> 13300' );
console.log( '\n', getTotalIncomeAmount(funds), '=> -500' );
