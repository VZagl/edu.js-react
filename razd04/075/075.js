'use strict';

function User(_name, _id = 1) {
  this.name = _name;
	this.id = _id;
  this.human = true;
	this.hello = function () {
		console.log(`Hello, ${this.name}.`);
	};
}

// расширяем прототип - объект "User"
User.prototype.exit = function () {
	console.log(`exit ${this.name}...`);
};

// создать несколько экземпляров User
let ivan = new User("Ivan", 28);
let alex = new User("Alex");

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

ivan.exit();
alex.exit();
