'use strict';

const btn = document.querySelector('.btn');
let timerId;
/*
btn.addEventListener('click', () => {
	// const timerId = setTimeout( log, 2000);
	timerId = setInterval( log, 2000);
});

// const timerId = setTimeout( log, 2000);
// console.log( typeof(timerId) );
// console.log( timerId );
// console.log( timerId );

function log() {	
	console.log('Hello');
	clearInterval( timerId );
}
*/

btn.addEventListener('click', myAnimation);

function myAnimation () {
	const elem = document.querySelector('.box');
	let pos = 0;
	
	let id = setInterval( frame, 10);
	// =================================
	function frame (){
		if (pos >= 300) { 
			clearInterval(id);
		} else {
			pos += 1;
			elem.style.top  = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}