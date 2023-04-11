//'use strict';
function f1() {

	return () => {
		//counter = 20;
		counter += 1;
		return counter;
	};
}

//counter = 10;
console.log('document', document);
console.log('window.counter=', window.counter);
//console.log('counter=', counter);
let v1 = f1();
counter = 30;
console.log('counter=', counter);
let v2 = v1();
console.log('v2=', v2);
console.log('counter=', counter);
console.log('window.counter=', window.counter);
console.log('document', document);
