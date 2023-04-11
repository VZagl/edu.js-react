'use strict';

function first() {
  setTimeout(function() {
    console.log('\t1 first');
  }, 1000);
}

function second() {
  console.log('\t2 second');
}

// console.log(`\n\t >> first & second`);
// first();
// second();

function learnJS(lang, callback) {
  console.log(`Я учу ${lang}`);
  console.log(`перед callback`);
  callback();
  console.log(`после callback`);
}

console.log(`\n\t>> 1`);
learnJS('JavaScript', function() {
  console.log(`Я прошёл этот урок!`);
});

function done(){
  console.log(`Я прошёл этот урок!`);
}
console.log(`\n\t>> 2`);
learnJS('JavaScript', done);

console.log(`\n\t>> 3`);
learnJS('test callback', first);
