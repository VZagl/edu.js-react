'use strict';
{
  let x = 5;
  log('1', x++ ); // 5
  log('>', 5 );
}
log('2', [] + false - null + true ); // NaN
log('>', true );
{
  let y = 1;
  let x = y = 2;
  log('3', x ); // 2
  log('>', 1 );
}
log('4', [] + 1 + 2 ); // "12"
log('>', 'error' );

log('5', "1"[0] ); // "1"
log('>', '10' );

log('6', 2 && 1 && null && 0 && undefined ); // null
log('>', false );
{
  log('7', 'есть ли разница между "!!(a && b)" и "(a && b)"' ); // да
  log('>', 'нет' );
  let a = 1, b = 2;
  console.log('\t\t ', '!!(a && b)', !!(a && b), typeof(!!(a && b)) ); // !!(a && b) true boolean
  console.log('\t\t ', '(a && b)', (a && b), typeof((a && b)) );       // (a && b) 1 number
}
log('8', null || 2 );
log('8', 2 && 3 );
log('8', null || 2 && 3 || 4 ); // 3
log('>', true, 2 );
{
  let a = [1,2,3];
  let b = [1,2,3];
  log('9', a == b ); // false
  log('>', true );
}
log('10', +"Infinity" ); // Infinity
log('>', Infinity );

log('11', "Ёжик" > "яблоко" ); // false
log('>', true );

log('12', 0 || "" || 2 || undefined || true || falsе ); // false
log('>', 2 );

//--

function log(_text, _v) {
	console.log( _text, '\tvalue=', _v, `\t\ttypeof(${_v})=`, typeof(_v) );
	// console.log( _text, '\tvalue=', _v );
	// console.log( _text );
}
