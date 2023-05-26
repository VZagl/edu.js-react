'use strict';
/*
console.log(1);

setTimeout( () => {
	console.log('timeout 1');
}, 1000);

setTimeout( () => {
	console.log('timeout 2');
}, 1000);

console.log(2);
*/

/*
console.log('start');

let k = 0;

async function count() {
	for (let i = 0; i<1e7;i++) {
		await (()=>k += 1)();
	}
	console.log('done');
}

count();

console.log('end');
*/

setTimeout( () => {
	console.log(1);
}, 0);
console.log(2);
