'use strict';

const n = Number.MAX_SAFE_INTEGER;
console.log('n>', n, typeof(n) );
let n1 = n + 1;
console.log('n1>', n1, typeof(n1) );
let bn = BigInt(n) + 1n - BigInt(n1) ;
console.log('bn>', bn, typeof(bn) );

console.log('5n / 2n = ', 5n / 2n );
console.log('1n + BigInt(2) = ', 2n + BigInt(1) );
console.log('Number(1n) + 2 = ', Number(2n) + 1 );
