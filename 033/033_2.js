'use strict';

let arr = [10, 21, 15, 45, 12, 6, 1, 2, 3];
console.log('arr =',arr);
mySort(0, arr.length-1);
console.log('arr =',arr);


function mySort(_i, _j) {
	let i = _i;
	let j = _j;
	let p = arr[ Math.round((i+j)/2) ];
	console.log('\tmySort\t', `p= ${p}, i=  ${i}, j= ${j}`);
	
	do {
		while (arr[i] < p) i += 1;
		while (arr[j] > p) j -= 1;

		if (i <= j) {
			[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
			i += 1;
			j -= 1;
		}
	} while (i <= j);
	
	console.log('\tmySort\t', `i=  ${i}, j= ${j}`);
	// if ( j > 0) mySort(_i,  j);
	// if (_j > i) mySort( i, _j-i);
}
