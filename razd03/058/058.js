'use strict';

const user = {
	name: 'Alex',
	surname: 'Smith',
	birthday: '20/04/1993',
	showMyPublicData: function () {
		console.log( `${this.name} ${this.surname}` );
	}
};
const arr = ['b', 'a', 'c'];
const str = 'df,g';

{
	console.log('\n\t', 'for...in');
	console.log('\n\t', 'user', user);
	for (const key in user) {
		console.log(key, user[key]);
	};

	console.log('\n\t', 'arr', arr);
	for (const key in arr) {
		console.log(key, arr[key]);
	};

	console.log('\n\t', 'str', str);
	for (const key in str) {
		console.log(key, str[key]);
	};
}

{
	console.log('\n\t', 'for...of');

	console.log('\n\t', 'arr', arr);
	for (const [key, value] of arr) {
		console.log(key, value, arr[key]);
	};

	console.log('\n\t', 'str', str);
	for (const [key, value] of str) {
		console.log(key, value, str[key]);
	};
}

{
	const salaries = {
		john: 500,
		ivan: 1000,
		ann: 2000,
		sayHello: () => console.log('Hello')
	}
	
	console.log('\n\t', 'salaries');
	console.log(salaries);
	// добавить объекту итератор
	salaries[Symbol.iterator] = function () {
		return {
			current: this.john,
			last: this.ann,
			// функция-итератор
			next() {
				if (this.current < this.last) {
					this.current += 500;
					// "done: false" значит перебор не закончен
					return {done: false, value: this.current};
				} else {
					// "done: екгу" значит перебор закончен
					return {done: true};
				}
			}
		}
	};
	console.log('\n\t', 'salaries');
	console.log(salaries);

	for(let key of salaries){
		console.log(key);

	}

	// ручной вызов итератора
	// получаем функцию итератора
	const iterator = salaries[Symbol.iterator]();
	let key;
	do {
		// вызываем функцию итератора
		key = iterator.next();
		console.log(key);
	} while (!key.done); // пока есть возвращаемые данные
}