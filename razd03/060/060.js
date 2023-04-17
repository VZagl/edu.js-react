'use strict';

//const arr = [1, 1, 2, 2, 4, 5, 6, 5];
const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];
console.log('arr>', arr);
console.log( 'uniqueArr (_arr) >', uniqueArr(arr) );

function uniqueArr (_arr){
	return Array.from(new Set(_arr) );
}

const set = new Set(arr);
set.add('Ivan')
	 .add('Oleg');
console.log('set>', set);
 /*
 set.delete(value);
 set.has(value);
 set.clear();
 set.size;
*/

for (let v of set) {
	console.log('1 v>', v);
}

set.forEach( (v,v2) => {
	console.log('2 v>', v, v2);
});

console.log( 'set.values() >', set.values() );
console.log( 'set.keys() >', set.keys() );
console.log( 'set.entries() >', set.entries() );

