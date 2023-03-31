'use strict';

{ console.log('\n\t'+'передача данных');
	// простые типы передаются по значению
	let a = 5,
			b = a;
	console.log('1', `a=${a}, b=${b}`);
	b = b + 5;
	console.log('2', `a=${a}, b=${b}`);
	b = 2;
	console.log('3', `a=${a}, b=${b}`);

	// объекты передаются по ссылке
	console.log();
	const obj1 = {
		a: 5,
		b: a
	};
	const obj2 = obj1;

	console.log('1', `arr=`, obj1, ', obj2=', obj2);
	obj1.b = 2;
	console.log('2', `arr=`, obj1, ', obj2=', obj2);
	obj2.b = 3;
	console.log('3', `arr=`, obj1, ', obj2=', obj2);
}

{ console.log('\n\t'+'клонирование объектов');
	const obj1 = {
		a: 1,
		b: { b1: 2 }
	};
	const obj2 = {
		// "c d": '3'
		// c: { c1: 3 }
	};
	console.log('1', `obj1=`, obj1, '\tobj2=', obj2);
	
	// Object.assign( target, source);
	// '.assign' не клонирует а копитует, причём объекты копирует по ссылке
	const obj3 = Object.assign( obj2, obj1);
	console.log('2', `obj1=`, obj1, '\tobj2=', obj2, '\tobj3=', obj3);
	obj1.a += 1;
	console.log('3', `obj1=`, obj1, '\tobj2=', obj2, '\tobj3=', obj3);
	obj2.b.b1 += 2;
	console.log('4', `obj1=`, obj1, '\tobj2=', obj2, '\tobj3=', obj3);
	console.log(`obj1 === obj2 `, obj1 === obj2);
	console.log(`obj2 === obj3 `, obj2 === obj3);
	console.log(`obj1 === obj3 `, obj1 === obj3);
	
	console.log('\n\t'+'наследование объектов');
	console.log('\t>\t'+'obj4.__proto__ = obj1');
	const obj4 = {};
	obj4.__proto__ = obj1;
	console.log('1', `obj1=`, obj1, '\tobj4=', obj4);
	console.log('\tobj4.b=', obj4.b);

	// '...' не клонирует а копитует, причём объекты копирует по ссылке
	let obj5 = { ...obj3 };
	obj5.b.b1 += 10;
	console.log('', `obj3=`, obj3, '\tobj5=', obj5);
	console.log(`obj5 === obj3 `, obj5 === obj3);
}

{ console.log('\n\t'+'клонирование массивов');
	const arr1 = [1, {a:2}];
	// '.slice' не клонирует а копитует, причём объекты копирует по ссылке
	const arr2 = arr1.slice();
	console.log('1', `1=`, arr1, '\t2=', arr2);
	arr2[1].a += 10;
	console.log('2', `1=`, arr1, '\t2=', arr2);
	console.log(`arr1 === arr2 `, arr1 === arr2);
	console.log(`arr1[1] === arr2[1] `, arr1[1] === arr2[1]);
}

{ console.log('\n\t'+'Spread оператор');
	// "..." перед  (доступной для итерации) переменной разложит на отдельные элементы
	const v = ['v1', 'v2'],
				b = ['b1'],
				i = [...v, ...b, 'i1'];
	console.log('1', `i=`, i);
	
	function log(a, b, c) {
		console.log(`>\ta=`, a);
		console.log(`>\tb=`, b);
		console.log(`>\tc=`, c);
	}
	console.log('\n\tlog(i)');
	log(i);
	console.log('\n\tlog(...i)');
	log(...i);

}
