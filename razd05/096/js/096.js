'use strict';

/*
способы создания регулярных выражений
1. (редко используемый)
	new RegEx( 'pattern', 'flags');
2. xfcnj bcgjkmpetvsq ( 99+% )
	/pattern/flags

pattern
    Текст регулярного выражения.
flags
    Если определён, может принимать любую комбинацию нижеследующих значений:
    g = глобальное сопоставление
    i = игнорирование регистра при сопоставлении
    m = сопоставление по нескольким строкам; символы начала и конца (^ и $) начинают работать по нескольким строкам (то есть, происходит сопоставление с началом или концом каждой строки (строки разделяются символами \n или \r), а не только с началом или концом всей вводимой строки)
    y (Экспериментальная возможность) = «липкий» поиск; сопоставление в целевой строке начинается с индекса, на который указывает свойство lastIndex этого регулярного выражения (и не пытается сопоставиться с любого более позднего индекса).

*/

let ans = 'qN_nwerty'; //prompt('Введите текст:');

// const reg = /n/;

console.log('\t reg 1');
console.log( ans.search( /n/ ) ); // 3

console.log('\t reg 2');
console.log( ans.search( /n/i ) ); // 1

console.log('\t reg 3');
console.log( ans.match( /n/ig ) ); // [ 'N', 'n' ]

console.log('\t reg 4');
console.log( ans.replace( /n/ig, '#' ) ); // q#_#werty

ans = 'qN....._nwerty';

console.log('\t reg 5');
console.log( ans.replace( /./ig    , '#' ) ); // ##############
console.log( ans.replace( /\./ig   , '#' ) ); // qN#####_nwerty
console.log( ans.replace( /.\./ig  , '#' ) ); // q###_nwerty
console.log( ans.replace( /\../ig  , '#' ) ); // qN###nwerty
console.log( ans.replace( /\.\./ig , '#' ) ); // qN##._nwerty

ans = '-123px';
console.log( ans.replace( /\D/g, '') ); // 123
