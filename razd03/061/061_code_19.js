/*
задача на работу с рекурсией

Задание:

Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. 
Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим 
примеры:
	deepCount([1, 5, 3]) => 3
	deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)
	deepCount([1, 2, [3, 4, [5]]]) => 7
	deepCount([]) => 0
	deepCount([[[[[[[[[]]]]]]]]]) => 8
*/

'use strict';

function deepCount(a){
	if ( !Array.isArray(a) ) return 0;
	return fCn(a);

	function fCn(_a){
		let cn = 0;
		_a.forEach(element => {
			cn += 1;
			if ( Array.isArray(element) ) cn += fCn(element);
		});
		return cn;
	}
}

console.log( deepCount([1, 5, 3]) ,'=> 3' );
console.log( deepCount(["1", 5, "3", ["10"]]) ,'=> 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)' );
console.log( deepCount([1, 2, [3, 4, [5]]]) ,'=> 7' );
console.log( deepCount([]) ,'=> 0' );
console.log( deepCount([[[[[[[[[]]]]]]]]]) ,'=> 8' );
console.log( deepCount({a:[1,2,3]}) ,'=> 0' );
