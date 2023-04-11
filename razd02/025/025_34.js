'use strict';


function getFunc() {
	let value = 'test';

	let func = new Function('{console.log("value=", value); return value;}');

	return func;
}

let value = 123;
let f1 = getFunc();
console.log('f1=', f1);
let v1 = f1();
console.log('v1=', v1);
