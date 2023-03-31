'use strict';

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%'
    },
    exp: '1 month'
  }
};

/*
У вас есть готовый объект с данными. Разработчик Х хочет написать часть функционала, но ему не хватает навыков. 
Выполните часть заданий за него.

Задачи:

1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

Пример:
showExperience(personalPlanPeter) => '1 month'

P.S. желательно использовать деструктуризацию, но не обязательно
*/
function showExperience(_plan) {
  const vSkills = _plan.skills;
  return vSkills.exp;
}

console.log( '\n\t(1)');
console.log( '1>', showExperience(personalPlanPeter) );
console.log( '2>', '1 month' );

/*
2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными 
и возвращать строку в нужном виде.

Пример:
showProgrammingLangs(personalPlanPeter)  => "Язык js изучен на 20% Язык php изучен на 10%"

Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, 
то возвращается пустая строка.

P.S. Для переноса строки используется \n в конце строки.
*/
function showProgrammingLangs(_plan) {
  let vStr = '';
  const vSkills = _plan.skills;
  for (let i in vSkills.programmingLangs) {
    if (vStr.length > 0) vStr += '\n';
    vStr += `Язык ${i} изучен на ${vSkills.programmingLangs[i]}`;
  }
  return vStr;
}
console.log( '\n\t(2)');
console.log( '1>', showProgrammingLangs(personalPlanPeter) );
console.log( '2>', "Язык js изучен на 20%\nЯзык php изучен на 10%");

/*
3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет 
принимать в себя объект и возвращать строку в нужном виде.

Пример:

    personalPlanPeter.showAgeAndLangs(personalPlanPeter)

=> 'Мне 29 и я владею языками: RU ENG'

Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем 
регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

P.S. Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, в котором он расположен. 
Но пока делаем это менее удобным способом)
*/

personalPlanPeter.showAgeAndLangs = function (_plan) {
  let vStr = `Мне ${_plan.age} и я владею языками:`;
  const vSkills = _plan.skills;
  for (let i of vSkills.languages) {
    vStr += ` ${ i.toLocaleUpperCase() }`;
  }
  return vStr;
}

console.log( '\n\t(3)');
console.log( '1>', personalPlanPeter.showAgeAndLangs(personalPlanPeter) );
console.log( '2>', 'Мне 29 и я владею языками: RU ENG');
