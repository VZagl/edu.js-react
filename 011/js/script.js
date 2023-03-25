'use strict';

// простые типы:
// числа: 1, 2, ...
let number = 4;
console.log(number);
number = 4.6;
console.log(number);
number = Infinity;
console.log(number);
console.log(4 / 0);
console.log(-4 / 0);
console.log(4 / -0);
console.log(-4 / -0);
number = null;
console.log(number);
number = NaN; // Not A Number
console.log(number);
console.log('str' * 9);
console.log('2' * 9);

// строки: 'string', 'name John'
const persone = 'Alex lfd.,gm d.,fmg,. dfg.,sdf';

// логический (boolean): true/false
const bool = false;
console.log('bool=', bool);
const isOver18 = !bool;
console.log('!bool=', isOver18);

// null (чего-то не существует)
// console.log(something);
// получим ошибку:
// ReferenceError: Cannot access 'something' before initialization
// undefined (значение не определено)
let und;
console.log(und);

// Symbol
// https://learn.javascript.ru/symbol

// BigInt (большие числа. больше, чем (2^53)-1 )
// https://medium.com/@hydrock/bigint-%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D1%82%D0%B8%D0%BF-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%B2-js-dd5c29446570
console.log(BigInt.MIN_VALUE); //                   = undefined
console.log(BigInt.MAX_VALUE); //                   = undefined
console.log(Number.MAX_SAFE_INTEGER); //              = 9007199254740991
console.log(Number.MAX_SAFE_INTEGER * 7); //          = 63050394783186936
console.log( BigInt(Number.MAX_SAFE_INTEGER) * 7n); // = 63050394783186937n
// console.log(Number.MAX_SAFE_INTEGER * 7n); // TypeError: Cannot mix BigInt and other types
// console.log( BigInt(0.1) ); // RangeError: The number 900719925474099.1
// cannot be converted to a BigInt because it is not an integer

// объекты:
// специальные:
//   массивы: []
const arr = ['text', 5, {}, [], BigInt(123) ];
console.log(arr);
console.log('arr.length=', arr.length);
arr.map( (i) => { console.log('arr.map=', i); } );

for (let i = 0; i <= arr.length; i++) {
	// i<=arr.length это не ошибка а проверка не существующего элемента массива
	console.log(`arr[${i}]=`, arr[i]);
}

//   функции: function ...
// console.log();

//   объект даты:
// console.log();

//   регулярные выражения:
// console.log();

//   ошибки:
// console.log();

// определённые нами:
const obj = {
	name: 'John',
	age: 25,
	isMarried: false,
};
console.log(obj);
console.log(obj.name);
console.log(obj.name);
