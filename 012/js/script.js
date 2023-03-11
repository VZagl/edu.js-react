console.log('=> js/script.js');
'use strict';

const varE = 'e';

const arr = [1,2,'a','b'];
console.log('arr[2]=',arr[2]);
console.log('1 arr=',arr);
arr[varE] = varE+'1';
arr[10] = 10; // появятся пустые элементы
console.log('2 arr=',arr);

const obj = {
	0: 0,
	b: 'b1'
};
console.log('1 obj=',obj);

obj.c = 'c1';
obj['d'] = 'd1';
obj[varE] = varE+1;
obj.o1={};
obj.o1.o2={ o3:[]};
console.log('2 obj=',obj);
console.log('obj[\'c\']=',obj['c']);
console.log(`obj[varE]= ${obj[varE]}, varE=${varE}`);

console.log('obj[\'1\']=',obj[1]); // obj['1']= undefined
