'use strict';

function getCounter(){
	let counter = 10;

	const cnr1 = function(){ return ++counter; };
	const cnr2 = function(){ return ++counter; };

	return {cnr1, cnr2};
}

const insc_1 = getCounter();
const inc_11 = insc_1.cnr1;
const inc_12 = insc_1.cnr2;

const c1_11 = inc_11(); // 11
const c1_12 = inc_11(); // 12
const c1_21 = inc_12(); // 13
const c1_13 = inc_11(); // 14
const c1_22 = inc_12(); // 15

console.log('c1_1*:', c1_11, c1_12, c1_13);
console.log('c1_2*:', c1_21, c1_22);

const incs_2 = getCounter();
const inc_21 = insc_1.cnr1;
const inc_22 = insc_1.cnr2;
const c2_11 = inc_21(); // 16
const c2_12 = inc_21(); // 17
const c2_21 = inc_22(); // 18
const c2_13 = inc_21(); // 19
const c2_22 = inc_22(); // 20

console.log('c2_1*:', c2_11, c2_12, c2_13);
console.log('c2_2*:', c2_21, c2_22);
/* результат:
c1_1*: 11 12 14
c1_2*: 13 15
c2_1*: 16 17 19
c2_2*: 18 20
*/