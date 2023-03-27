'use strict';

/*
1 способ объявить объект:
const obj = new Object();

2 способ объявить объект:
const obj = {};
*/

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	}
};

console.log(options);

// удалить у объекта 'options' свойство 'name'
delete options.name;
console.log(options);

// перебрать свойства у объекта 'options'
console.log(`\n for (let key in options) ...`);
console.log(`options {`);
for (let key in options) {
	if( typeof(options[key]) === 'object' ) {
		console.log(`\t${key} = {`);
		for (let i in options[key]) {
			console.log(`\t\t${i} = ${options[key][i]}`);
		}
		console.log(`\t}`);
	} else {
		console.log(`\t${key} = ${options[key]}`);
	}
}
console.log(`}`);

