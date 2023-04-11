'use strict';
/*
let num=5; 

function logNum() {
	let num=4; 
	console.log(num);
	return () => {
		debugger
		console.log(num); 
	}
}

num = 6;
let f1 = logNum();
f1();
*/

function createCounters() {
	let counter = 0;

	const myF = function() {
		debugger
		counter += 1;
		return counter;
	}

	return myF;
}

const i = createCounters();
const c1 = i();
const c2 = i();

console.log(c1, c2);
