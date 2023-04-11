'use strict';

/*
1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
*/
function showFamily(_family) {
  if (_family.length == 0) return 'Семья пуста';
  let vStr = 'Семья состоит из:';
  _family.map( (i) => vStr += ` ${i}` );
  return vStr;
}

const family = [ 'Peter', 'Ann', 'Alex', 'Linda'];
  console.log( '\n\t(1)');
  console.log( '1>', showFamily(family) );
  console.log( '2>', 'Семья состоит из: Peter Ann Alex Linda');

/*
2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк 
и будет выводить в консоль эти строки в нижнем регистре.

Пример:
standardizeStrings(favoriteCities)  выведет в консоль

    lisbon
    rome
    milan
    dublin

Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. 
В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.
*/
function standardizeStrings(_favoriteCities) {
  _favoriteCities.map( (i) => { 
      console.log( i.toLocaleLowerCase() );
    }
  );
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
console.log( '\n\t(2)');
standardizeStrings(favoriteCities);
console.log( '2>\n', 'lisbon\nrome\nmilan\ndublin' );
