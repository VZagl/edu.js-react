console.log('> && ===============');
console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'abc');
console.log(1 && 'abc');

console.log('> || ===============');
console.log(1 || 0);
console.log(0 || 0);
console.log(0 || false);
console.log(1 || 5);
console.log(null || 5);
console.log(0 || 'abc');
console.log(1 || 'abc');
console.log('====================');

const arr = [0, '0', 1, '1', true, 'true', false, 'false', null, NaN, undefined, {}, [], '', ' ', '_'];

arr.map((val) => console.log('>', val, `<\t\t(${typeof (val)})\t\t= ${!!(val)}`, '\t\t=> ', (true && val)));

console.log('> ! ================');
arr.map((val) => console.log('! >', val, `<\t\t(${typeof (val)})\t\t= ${(!val)}`, '\t\t=> ', (true && !val)));

console.log('> задачи ================');
console.log('> что выведет в консоль код?');
console.log(NaN || 2 || undefined, 2);
console.log(NaN && 2 & undefined, NaN);
console.log(1 && 2 && 3, 3);
console.log(!1 && 2 && !3, false);
console.log(25 || null && !3, 25);
console.log(NaN || null || !3 || undefined || 5, 5);
console.log(NaN || null && !3 && undefined || 5, 5); // false - ошибка
console.log(5 === 5 && 3 > 1 || 5, true);
