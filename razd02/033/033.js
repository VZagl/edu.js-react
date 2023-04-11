'use strict';

{ console.log('\n\t'+'033. Массивы и псевдомассивы');
	const arr = [1, 2, 3, 6, 8]
	console.log('arr =', arr);

	arr.pop();
	console.log('pop arr =', arr);

	arr.push(10);
	console.log('push arr =', arr);

	const arr1 = [0].concat(arr);
	console.log('\narr1 =', arr1);

	arr[9] = 0;
	console.log('arr =', arr);
	console.log('!!! arr.length - возвращает индекс последнего элемента+1 а не реальное количество элементов массива');
	console.log('arr.length =', arr.length);

	// for (let i = 0; i < arr.length; i++) {
	// 	console.log(arr[i]);
	// }
}

{ console.log('\n\t'+'перебор элементов массива');

	let arr = [1, 8]
	arr[4] = '4';
	console.log('\narr =', arr);

	console.log('\n\t'+'for of');
	for (let i of arr) {
		console.log('i =', i);
	}
	console.log('\n\t'+'for in');
	for (let i in arr) {
		console.log('arr[i] =', arr[i]);
	}

	console.log('\n\t'+'arr.forEach');
	arr.forEach( (value, index, array) => {
		console.log(`${index}: ${value} внутри массива [${array}]`);
	})

	console.log('\n\t'+'arr.map');
	console.log('arr.map = ', arr.map( (value, index, array) => {
		console.log(`${index}: ${value} внутри массива [${array}]`);
		return 'str_' + value;
	}));

	console.log('\n\t'+'arr.filter');
	console.log('arr.filter(typeof(value) === \'string\') = ', arr.filter( (value, index, array) => {
		return typeof(value) === 'string';
	}));
}

{ console.log('\n\t'+'join, split, sort');
	const str1 = 'qwe 123 rt y';
	const arr = str1.split(' ');
	console.log(`str1 = '${str1}'`);
	console.log('arr =', arr);
	arr.sort();
	console.log('sort arr =', arr);
	const str2 = arr.join(', ');
	console.log(`str2 = '${str2}'`);

	const arr2 = [2, 13, 26, 8, 10];
	console.log('\narr2 =', arr2);
	arr2.sort();
	console.log('arr2.sort() =', arr2);
	arr2.sort( compareNum );
	console.log('arr2.sort(compreNum) =', arr2);

	function compareNum (a, b) { 
		return a - b;
	}
}