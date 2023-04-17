/*
В каждой книге есть n страниц с номерами страниц от 1 до n. 
Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. 
Эта функция возвращает число - количество страниц n в книге. 
Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.

Пример:
Если на входе функции summary = 25, то на результат должен быть 17. 
Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.

Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.

amountOfPages(5) => 5
amountOfPages(25) => 17
amountOfPages(1095) => 401   
amountOfPages(185) => 97
*/

'use strict';

function amountOfPages(_summary){
	let s = '';
	let n = 0;
	while (s.length < _summary) {
		n += 1;
		s += n;
	};
	return n;
}

console.log( amountOfPages(5)    , '=> 5'  );
console.log( amountOfPages(25)   , '=> 17' );
console.log( amountOfPages(1095) , '=> 401'); 
console.log( amountOfPages(185)  , '=> 97' );
