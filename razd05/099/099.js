'use strict';

const persone = {
	name: 'Alex',
	age: 25,

	get userAge() {
		return this.age;
	},

	set userAge(value) {
		this.age = value;
	}
};

console.log( persone );
console.log( persone.userAge = 30 );
console.log( persone );

