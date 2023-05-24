'use strict';
/*
{
	function* idMaker() {
		let index = 0;
		while (index < 3) {
			console.log('* 1');
			yield index++;
			console.log('* 2');
		}
		console.log('* 3');
	}
	
	console.log('gen 1');
	const gen = idMaker();
	console.log('gen 2');
	
	let res;
	do {
		console.log('\nnext 1');
		res = gen.next();
		console.log('next 2');
		console.log(`value = ${res.value}, done = ${res.done}`);
	} while(!res.done);

}
*/
/*
function * generator(){
	yield 'S';
	yield 'c';
	yield 'r';
	yield 'i';
	yield 'p';
	yield 't';
};

const gen = generator();
let res;
do {
	res = gen.next();
	console.log( res );
} while(!res.done);

res = gen.next();
console.log( res );
*/

function * count(_n) {
	for( let i = 0; i < _n; i++ ) {
		yield i;
	}
}

// const cnr = count(2);
// console.log( cnr.next() );
// console.log( cnr.next() );
// console.log( cnr.next() );
// console.log( cnr.next() );

for( let k of count(3) ){
 console.log( k );
}
