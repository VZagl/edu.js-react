'use strict';

class Rectangle {
	#id = 123; // private
	constructor(height, width) {
		this.height = height;
		this.width = width;
		console.log( 'this.#id=', this.#id );
	}
	calcArea() {
		return this.height * this.width;
	}
}

class ColoredRectangleText extends Rectangle {
	constructor(height, width, text, bgColor) {
		super(height, width);
		this.text = text;
		this.bgColor = bgColor;
	}
	showMyProps() {
		console.log( `Текст: ${this.text}, цвет: ${this.bgColor}`);
	}
	get area() {
    return this.calcArea();
  }
}
/*
const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log( long.calcArea() );
console.log( square.calcArea() );
*/
const div = new ColoredRectangleText(25, 10, 'Hello, World.', 'red');
div.showMyProps();
console.log( div.calcArea() );
console.log( div.area );
console.log( div.id ); // undefined
