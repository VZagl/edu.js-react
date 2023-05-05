'use strict';
// ==============================
function log(..._args) { console.log(new Date(),'\t\t', ..._args); }
// ==============================

//#region filter
log('\n\tfilter');
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemar'];

const shortNames = names.filter( _v => _v.length < 5 );

log(names);
log(shortNames);
//#endregion filter

//#region map
log('\n\tmap');
const answers = ['IvAn', 'AnnA', 'Hello'];
const result = answers.map( _v => _v.toLowerCase() );

log(answers);
log(result);
//#endregion map

//#region every/some
log('\n\tevery/some');
const some = ['123', 4, 'qwq', 'asdasd'];
log(some, 'хоть однин элемент число?', some.some( _v => typeof(_v) === 'number' ) );
log(some, 'все элементы числа?', some.every( _v => typeof(_v) === 'number' ) );

const every = [1, 2, 3];
log(every, 'все элементы числа?', every.every( _v => typeof(_v) === 'number' ) );
//#endregion every/some

//#region reduce
log('\n\treduce');
let arr = [4, 5, 1, 3, 2, 6];

let res = arr.reduce( (_sum, _current) => _sum + _current, 100 );
log(arr);
log(res);

arr = ['apple', 'pear', 'plum'];
res = arr.reduce( (_sum, _current) => `${_sum}, ${_current}` );
log(arr);
log(res);
//#endregion reduce

//#region Object.entries
log('\n\tObject.entries');
const obj = {
	ivan: 'persone',
	ann:  'persone',
	dog:  'animal',
	cat:  'animal'
};
log(obj);

const ent = Object.entries(obj)
	.filter( _v => _v[1] === 'persone' ) // [ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]
	.map( _v => _v[0] ); // [ 'ivan', 'ann' ]
log(ent);
//#endregion Object.entries
