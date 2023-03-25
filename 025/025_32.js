'use strict';

const getCounter = () => {
	let counter = 10;

	const fCnr1 = () => {
		return counter += 1;
	}
	const fCnr2 = () => {
		return counter += 1;
	}

	return {fCnr1, fCnr2};
};

{
	const fInc_1 = getCounter();
	const inc_11 = fInc_1.fCnr1;
	const inc_12 = fInc_1.fCnr2;

	const c1_11 = inc_11(); // 11
	const c1_12 = inc_11(); // 12
	const c1_21 = inc_12(); // 13
	const c1_13 = inc_11(); // 14
	const c1_22 = inc_12(); // 15

	console.log('c1_1*:', c1_11, c1_12, c1_13);
	console.log('c1_2*:', c1_21, c1_22);
}
{
	const fInc_2 = getCounter();
	const inc_21 = fInc_2.fCnr1;
	const inc_22 = fInc_2.fCnr2;
	const c2_11 = inc_21(); // 11
	const c2_12 = inc_21(); // 12
	const c2_21 = inc_22(); // 13
	const c2_13 = inc_21(); // 14
	const c2_22 = inc_22(); // 15

	console.log('c2_1*:', c2_11, c2_12, c2_13);
	console.log('c2_2*:', c2_21, c2_22);
}
/* результат:
c1_1*: 11 12 14
c1_2*: 13 15
c2_1*: 11 12 14
c2_2*: 13 15
*/