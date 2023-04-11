/*
Задача:

У вас есть список учеников, которые хотят поиграть в игру:
    const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

Пример:
sortStudentsByGroups(students)  =>
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]

Если убрать одно студента из списка, то результат будет:
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]

А если добавить одного, то:
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]

То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. 
Просто распишите логику действий строка за строкой.
*/

'use strict';

let students;

students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
console.log('\ninp:\n', students)
console.log('\nout:\n', sortStudentsByGroups(students) );

students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Sam'];
console.log('\ninp:\n', students)
console.log('\nout:\n', sortStudentsByGroups(students) );

students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Somebody'];
console.log('\ninp:\n', students)
console.log('\nout:\n', sortStudentsByGroups(students) );

function sortStudentsByGroups (_data) {
  _data.sort();
  const res = [];
  for (let i = 0; i < 3; i++) {
    res[i] = [];
    for (let j = 0; j < 3; j++) {
      res[i][j] = _data[ i * 3 + j ];
    }
  }
  res[3] = 'Оставшиеся студенты: ';
  if (_data.length <= 9){
    res[3] += '-';
  } else {
    for (let i = 9; i<_data.length; i++) {
      if(i > 9) {
        res[3] += ', ';
      }
      res[3] += _data[i];
    }
  }
  return res;
}