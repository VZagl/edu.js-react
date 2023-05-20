'use strict';

console.log( 'BEGIN');
try {
	console.log( 'normal');
	console.log( a );
	// throw 123;
	console.log( 'result');
} catch( _err ) {
	console.log( 'error', _err );
} finally {
	console.log( 'fin');
}
// console.log( a );

console.log( 'END');
