'use strict';

{
	console.log('\n\tto String');

	// 1
	console.log('\t1');
	logS(null);
	logS(4);
	logS(undefined);
	logS(NaN);
	// 2
	console.log('\t2');
	logS(5 + '');
	logS(null + '');
	logS(26 + 'px');

	// ---
	function logS(_v) {
		log(_v, (_v) => String(_v), `String(${_v})` );
	}
}

{
	console.log('\n\tto Number');
	// 1	
	console.log('\t1');
	logN(26 + 'px', (_v) => `Number(${_v})`);
	// 2
	console.log('\t2');
	logN( +'12', (_v)=>`+${_v}`);
	// 3
	console.log('\t3');
	logN( parseInt('15px', 10), (_v) => `parseInt(${_v}, 10)`);

	// ---
	function logN(_v, _text) {
		log(_v, (_v) => Number(_v), _text(_v) );
	}
}

{
	console.log('\n\tto Boolean');
	//1
	console.log('\t1');
	console.log('всегда будет false:');
	console.log("0, '', null, undefined, NaN");
	// 2
	console.log('\t2');
	console.log( "Boolean('4')=", Boolean('4') );
	// 3
	console.log('\t3');
	console.log( "!!'123'=", !!'123' );
}
// ---------------------------

function log(_v, fn, _text) {
	console.log('value=', _v, `\t\ttypeof(${_v})=`, typeof(_v), `\t\ttypeof( ${(_text)?_text:`fn(${_v})`} )=`, typeof(fn(_v)) );
}
