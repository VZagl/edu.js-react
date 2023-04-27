'use strict';

const persone = {
	name: 'Alex',
	tel: '+74444444444',
	parents: {
		mom: 'Olga',
		dad: 'Mike'
	}
};

const vJson = JSON.stringify(persone);
const vClone = JSON.parse(vJson); // глубокое клонирование
vClone.parents.mom = 'Ann';
console.log( vJson );
console.log( vClone );
console.log( persone );
