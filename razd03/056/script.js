'use strict';

{
	let id = Symbol('id');

	const obj = {
		name: 'Test',
		[id]: 15,
		getId: function () { return this[id];}
	};

	obj[id] = 10; // переопределит значение
	obj[Symbol('id')] = 20;
	obj[Symbol()] = 30;

	console.log( '1', obj );
	console.log( '2', obj[id] );
	console.log( '3', obj.id );
	console.log( '4', obj[Symbol('id')] );
	console.log( '5', obj[Symbol()] );
	console.log( '6', obj.getId() );

	console.log( '', Object.getOwnPropertySymbols(obj) );
}
/*
1 {
  name: 'Test',
  getId: [Function: getId],
  [Symbol(id)]: 10,
  [Symbol(id)]: 20,
  [Symbol()]: 30
}
2 10
3 undefined
4 undefined
5 undefined
6 10
 [ Symbol(id), Symbol(id), Symbol() ]
*/

{
	const myAwesomeDB = {
		movies: [],
		actors: [],
		[Symbol.for('id')]: 123
	}

	console.log( '\n', myAwesomeDB );
	console.log( myAwesomeDB[Symbol.for('id')] ); // 123
}
/*
 { movies: [], actors: [], [Symbol(id)]: 123 }
123
*/