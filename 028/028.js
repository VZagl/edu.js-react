'use strict';

{ // String
	let n=0;

	let s = 'tesTы';
	console.log( '>', `"${s}"` );

	console.log( n++, s.length );
	console.log( n++, s[1] ); // нумерация начинается с "0"


	console.log( n++, s.toUpperCase() );
	console.log( n++, s.toLocaleUpperCase() );

	console.log( n++, s.toLowerCase() );
	console.log( n++, s.toLocaleLowerCase() );

	s += '\n'; // длина +1 символ
	console.log( n++, s.length );
	console.log( n++, s );

	console.log( n++, 'поиск подстроки' );
	const fruit = 'Some fruit ss ыЫ-';
	console.log( '>', `"${fruit}"` );
	console.log( n++, fruit.indexOf('fruit') ); // 5
	console.log( n++, fruit.indexOf('s') );     // 11
	console.log( n++, fruit.indexOf('S') );     // 0
	console.log( n++, fruit.indexOf('s',5) );   // 11
	console.log( n++, fruit.indexOf('S',5) );   // -1 = не найдено
	console.log( n++, fruit.indexOf('ы') );     // 14
	console.log( n++, fruit.indexOf('Ы') );     // 15

	console.log( n++, `вернуть подстроку из "${fruit}"` );
	console.log( n++, fruit.slice(0,2) ); // 'So'
	console.log( n++, fruit.slice(2,0) ); // '' = пустая строка
	console.log( n++, fruit.slice(2,2) ); // '' = пустая строка
	console.log( n++, fruit.slice(5) );   // 'fruit ss ыЫ-' = строка с n символа до конца
}
{ //Numeric

	console.log(  );
}
