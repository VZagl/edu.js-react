'use strict';

console.log('\nспособы объявить объект');
/*
1 способ объявить объект:
const obj = new Object();

2 способ объявить объект:
const obj = {};
*/
const obj1 = new Object({
	name: 'test'
});
console.log('obj1 =', obj1);

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	length0: function () { return Object.keys(this).length; }
};

console.log('\noptions =', options);

{	console.log('\nудалить у объекта "options" свойство "name"');
	delete options.name;
	console.log(options);
}

{	console.log('\nперебрать свойства у объекта "options"');
	console.log('\n for (let key in options) ...');
	console.log('options {');
	let counter = 0;
	for (let key in options) {
		if( typeof(options[key]) === 'object' ) {
			console.log(`\t${key} = {`);
			counter += 1;
			for (let i in options[key]) {
				console.log(`\t\t${i} = ${options[key][i]}`);
			}
			console.log(`\t}`);
		} else {
			console.log(`\t${key} = ${options[key]}`);
			counter += 1;
		}
	}

	console.log('}');
	console.log(`counter = ${counter}`);
	console.log(`obj.keys = ${Object.keys(options).length}`);
	console.log(`options.length() = ${options.length0()}`);
}

{ console.log('\nдобавляю функцию-счётчик количества всех ключей');
	options.lengthAll = function(){
		console.log(`\nlengthAll ==>`)
		let cnr = 0;
		cnr = myCounter(this);
		console.log(`<== lengthAll\n`)
		return cnr;

		function myCounter( _obj ){
			for (let key in _obj) {
				if( typeof(_obj[key]) === 'object' ) {
					cnr += 1;
					console.log(`\t${cnr} =>`, key)
					myCounter(_obj[key]);
				} else {
					cnr += 1;
					console.log(`\t${cnr} =>`, key)
				}
			}
			return cnr;
		}
	}
	console.log(`options.lengthAll() = ${options.lengthAll()}`);
	console.log('\noptions = ', options);
}

{
	console.log("options['colors']['border'] =", options['colors']['border'] );
	console.log('options.colors.border =', options.colors.border );
}

{	console.log('\nдеструктуризация объектов');
	// вытащить свойства объекта в отдельные переменные
	let {border, bg} = options.colors;
	console.log('{border, bg} =', border, bg );
	border = 'yellow';       // не работает
	options.colors.bg = 123; // работает
	console.log('2 {border, bg} =', border, bg, options );
	const {colors} = options;
	colors.added = 'added';
	console.log('3 {colors} =', colors );
	console.log('options =', options );
}
