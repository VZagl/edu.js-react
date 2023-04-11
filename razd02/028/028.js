'use strict';

{ // String
	console.log('>> строки');
	let n = 0;

	let s = 'tesTы';
	console.log('>', `"${s}"`);

	console.log(n++, s.length);
	console.log(n++, s[1]); // нумерация начинается с "0"


	console.log(n++, s.toUpperCase() );
	console.log(n++, s.toLocaleUpperCase() );

	console.log(n++, s.toLowerCase() );
	console.log(n++, s.toLocaleLowerCase() );

	s += '\n'; // длина +1 символ
	console.log(n++, s.length);
	console.log(n++, s);

	console.log(n++, 'indexOf() = поиск подстроки');
	const fruit = 'Some fruit ss ыЫ-';
	console.log( '>', `"${fruit}"`);
	console.log(n++, fruit.indexOf('fruit') ); // 5
	console.log(n++, fruit.indexOf('s') );     // 11
	console.log(n++, fruit.indexOf('S') );     // 0
	console.log(n++, fruit.indexOf('s', 5) );  // 11
	console.log(n++, fruit.indexOf('S', 5) );  // -1 = не найдено
	console.log(n++, fruit.indexOf('ы') );     // 14
	console.log(n++, fruit.indexOf('Ы') );     // 15

	console.log(n++, `slice() = вернуть подстроку из "${fruit}"`);
	console.log(n++, fruit.slice(0, 2) );   // 'So'
	console.log(n++, fruit.slice(2, 0) );   // '' = пустая строка
	console.log(n++, fruit.slice(2, 2) );   // '' = пустая строка
	console.log(n++, fruit.slice(5) );      // 'fruit ss ыЫ-' = строка с n символа до конца
	console.log(n++, fruit.slice(-5) );     // 's ыЫ-' = строка с n символа с конца
	console.log(n++, fruit.slice(-5, -2) ); // 's ы-' = строка с -5 символа с конца до -2 от конца
	
	s = 'tesTы';
	console.log(n++, `substring() или substr() = вернуть подстроку из "${s}"`);
	console.log(n++, s.substring(1, 3) ); // 'es'
	console.log(n++, s.substr(1, 3) );    // 'esT' = n1 начиная с какого n2 сколько символов вернуть
	console.log(n++, s.substring(-5) );   // 'tesTы' = отрицательные преобразует в 0
}
{ //Numeric
	console.log('>> числа');
	let n = 0;
	const num = 12.3;
	console.log('>> ', num);
	console.log(n++, Math.round(num) ); // 12

	const test = '12.3px';
	console.log(n++, parseInt(test) ); // 12
	console.log(n++, parseFloat(test) ); // 12.3
}
