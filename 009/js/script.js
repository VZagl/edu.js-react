console.log('=> js/script.js');

// 12:20 = Строгий режим — "use strict" - директива
'use strict';
//b=1;
//console.log('b=',b);

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log('number=', number);

///leftBorderWidth = 10;
console.log('leftBorderWidth=', leftBorderWidth);

// 05:40 = особенность const: внутри объекта-const можно менять значения переменных.
const obj = {
	a: 50
};

obj.a = 1;
console.log('obj=', obj);
console.log('obj.a=', obj.a);

// 07:05 = проблемы устаревшего объявления переменной через "var"
console.log('0 name=', name);
var name = 'Ivan';
console.log('1 name=', name);
name = 'Alex';
console.log('2 name=', name);
name = 123;
console.log('3 name=', name);
 