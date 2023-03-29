'use strict';

{
	console.log('\n\tsort 1');
	let arr = [2, 21, 15, 45, 10, 6];
	console.log('arr =',arr);

	let cnr = 0;
	arr.sort(compareNum);  
	function compareNum(a, b) { 
		cnr += 1;
		let vres = a - b;
		console.log(`${cnr}\tcompareNum(\t${a},\t${b}\t)\treturn ${vres}`);
		return vres; 
	} 
	console.log('arr =',arr);
}
{
	console.log('\n\tsort 2');
	let arr = [2, 21, 15, 45, 10, 6];
	console.log('arr =',arr);

	let cnr = 0;
	arr.sort(compareNum);  
	function compareNum(a, b) { 
		cnr += 1;
		let vres = a > b ? 1 : -1;
		console.log(`${cnr}\tcompareNum(\t${a},\t${b}\t)\treturn ${vres}`);
		return vres; 
	} 
	console.log('arr =',arr);
}
