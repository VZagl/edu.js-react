console.log('=> js/script.js');
'use strict';

let i = 10;

console.log('while(){}');
while( i<15 ){
	console.log(i);
	i++;
}
console.log();

console.log('do {} while ();');
i = 20;
do{
	console.log(i);
	i++;
	if (i>2*i) { break; }
}while(i<=25);
console.log();

console.log('for(let j=30; j<=35; j++){ continue; ...; }');
for(let j=30; j<=35; j++){
	if (j===32) { continue; }
	console.log(j);
}
console.log();

console.log('for(let j=40; j<=43;){ j++;}');
for(let j=40; j<=43;){
	console.log(j);
	j++;
}
console.log();

console.log('for(let j=50; ;){ ...; j++; break; }');
for(let j=50; ;){
	console.log(j);
	j++;
	if (j>54) { break; }
}
console.log();
