'use strict';

class User {
	#age;

	constructor(_name, _age) {
		this.name = _name;
		this.#age = _age;
	}

	// стрелочная функция получает this - экземпляр класса
	say = () => {
		console.log(`Имя пользователя: ${this.name}, возраст ${this.#age}`);
	};

	get age() { return this.#age; }

	set age(_age) {
		if (typeof (_age) === 'number' && _age > 0 && _age < 100) {
			this.#age = _age;
		} else {
			console.log('Недопустимое значение');
		}
	}
}

const ivan = new User('Ivan', 27);
console.log( ivan.age );
ivan.age = 99;
ivan.age = 300;
console.log( ivan.age );
ivan.say();
/*
27
Недопустимое значение
99
Имя пользователя: Ivan, возраст 99
*/