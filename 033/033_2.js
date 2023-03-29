'use strict';

let cnr = {
	quick:  {cn: 0,compare: 0,swap: 0,},
	bubble: {cn: 0,compare: 0,swap: 0,},
}

{
	console.log('\n'+`>>> quick sort`);

	let arr = [10, 21, 15, 45, 12, 6, 1, 2, 3];
	console.log(`arr=[${arr.join(', ')}]`);
	quickSort(0, arr.length-1);
	console.log(`\narr=[${arr.join(', ')}]`);
	

	function quickSort(_i, _j) {
		cnr.quick.cn += 1;
		console.log('\n'+`> cnr.quick=`, cnr.quick);
		if (cnr.quick.cn > 20) return;
	
		let i = _i;
		let j = _j;
		let k = Math.round( (i + j) / 2 );
		let p = arr[ k ];
		console.log(`\tmySort(i=${i}, j=${j})\t`, `p(k=${k})=${p}, arr=[${arr.join(', ')}]`);
		
		do {
			while (arr[i] < p) { cnr.quick.compare += 1; i += 1; }
			while (arr[j] > p) { cnr.quick.compare += 1; j -= 1; }
			
			cnr.quick.compare += 1;
			if (i < j) {
				[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
				cnr.quick.swap += 1;
				console.log(`\t(${cnr.quick.swap})\tswap(${i}, ${j}), arr=[${arr.join(', ')}]`);
				i += 1;
				j -= 1;
			}
		} while (i < j);
		
		console.log('\tmySort\t', `i=${i}, j=${j}, k=${k}`);
	 if ( j - _i > 1 ) quickSort(  _i,  j );
	 if ( _j - k > 1 ) quickSort(   k, _j );
	}
}

{ 
	console.log('\n'+`>>> bubble sort`);

	let arr = [10, 21, 15, 45, 12, 6, 1, 2, 3];
	console.log(`arr=[${arr.join(', ')}]`);
	bubbleSort();
	console.log(`arr=[${arr.join(', ')}]`);
	

	function bubbleSort() {
		for (let i=0; i<arr.length; i++) {
			let cur = i;
			for (let j=i; j<arr.length; j++) {
				cnr.bubble.compare += 1;
				if (arr[cur] > arr[j]){
					cur = j;
				}
			}
			if(cur != i){
				[arr[i], arr[cur]] = [arr[cur], arr[i]];
				cnr.bubble.swap += 1;
				console.log(`\t(${cnr.bubble.swap})\tswap(${i}, ${cur}), arr=[${arr.join(', ')}]`);
			}
		}
	}
}

console.log(`\n>>> cnr=`, cnr);
