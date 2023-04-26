'use strict';
{
	log(1,2,3);

	function log(...args) {
		console.log('123\t', ...args);
	}
}
{
	calcOrDouble(3);
	
	function calcOrDouble(n1, n2 = 2) { 
		console.log( n1 * n2 );
	}
}