'use strict';

console.log('исследую область видимости переменной');

let level = 0;
log(`область ${level}: v`);
let v1 = 10;
log(v1);
{
	level++;
	log(`область ${level}: v`);
	let v1 = 20;
	log(v1);
	{
		level++;
		log(`область ${level}: v`);
		let v1 = 30;
		log(v1);
		log(`область ${level}: ^`);
		level--;
	}
	log(v1);
	log(`область ${level}: ^`);
	level--;
}
log(v1);
log(`область ${level}: ^`);

function log(_val) {
	let s='';
	for (let i = 0; i < level; i++) {
		s += '\t';
	}
	s += '>';
	console.log(s, _val);
}