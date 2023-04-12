'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

// найти элементы с классом "this" в коллекции элементов с классом "box"
// то есть найти элементы с классом ".box .this"
boxesQuery.forEach( box => {
  if (box.matches('.this')) console.log(box);
});

// boxesQuery[0].remove();
// boxesGet[0].remove();

// в дереве родителей найти родителя с классом 'wrapper'
console.log( boxesQuery[0].closest('.wrapper') );

console.log(boxesQuery);
// console.log(boxesGet);
// console.log(document.body.children);
// console.log( Array.from(boxesGet) ); // преобразовать коллекцию в массив
