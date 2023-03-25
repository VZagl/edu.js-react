'use strict';

console.log( '\nпирамида');
let s;
const lenPiramida = 6;
for (let i1 = 1; i1 <= lenPiramida; i1++) {
	s = '';
	for (let i2 = 1; i2 <= i1; i2++) {
		s += '*';
	}
	console.log(s);
}

console.log( '\nметки в циклах: continue');
label1: for (let i1 = 0; i1 < 3; i1++) {
	console.log(`level1: ${i1}`);
	for (let i2 = 0; i2 < 3; i2++) {
		console.log(`level2: ${i2}`);
		for (let i3 = 0; i3 < 3; i3++) {
			if (i3 === 2) {
				continue label1;
			}
			console.log(`level3: ${i3}`);
		}
	}
}

console.log( '\nметки в циклах: break');
label1: for (let i1 = 0; i1 < 3; i1++) {
	console.log(`level1: ${i1}`);
	for (let i2 = 0; i2 < 3; i2++) {
		console.log(`level2: ${i2}`);
		for (let i3 = 0; i3 < 3; i3++) {
			if (i3 === 2) {
				break label1;
			}
			console.log(`level3: ${i3}`);
		}
	}
}
