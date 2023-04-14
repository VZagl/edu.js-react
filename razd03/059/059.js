'use strict';

const user = {
	name: 'Alex',
	surname: 'Smith',
	birthday: '20/04/1993',
	showMyPublicData: function () {
		console.log( `${this.name} ${this.surname}` );
	}
};

{
	// console.log('\n\t', '');
	console.log('\n\t', 'user>');
	console.log(user);

	const userMap = new Map( Object.entries(user) );
	console.log('userMap>', userMap);
	/*
	userMap> Map(4) {
	  'name' => 'Alex',
	  'surname' => 'Smith',
	  'birthday' => '20/04/1993',
	  'showMyPublicData' => [Function: showMyPublicData]
	}
	*/
	const newUserObj = Object.fromEntries( userMap );
	console.log('newUserObj>', newUserObj);
	/*
	newUserObj> {
	  name: 'Alex',
	  surname: 'Smith',
	  birthday: '20/04/1993',
	  showMyPublicData: [Function: showMyPublicData]
	}
	*/
}

const shops = [
	{rice: 500},
	{oil:  200},
	{bread: 50}
];
console.log('shops>', shops); // shops> [ { rice: 500 }, { oil: 200 }, { bread: 50 } ]

{	
	console.log('\n\t', 'Map');
	let map = new Map();
	// map.set(shops[0], 5000)
	// 	.set(shops[1], 15000)
	// 	.set(shops[2], 25000);
	const budget = [5000, 15000, 25000];
	shops.forEach( (shop, i) => {
		map.set( shop, budget[i]);
	});
	console.log('map>', map);
	/*
	map> Map(3) {
  	{ rice: 500 } => 5000,
  	{ oil: 200 } => 15000,
  	{ bread: 50 } => 25000
	}
	*/

	console.log('\t|>'+ 'map.keys()');
	const goods = [];
	for (let shop of map.keys() ) {
		goods.push( Object.keys(shop)[0] );
	}
	console.log('goods>', goods); // goods> [ 'rice', 'oil', 'bread' ]

	console.log('\t|>'+ 'map.values()');
	const prices = [];
	for (let price of map.values() ) {
		prices.push( price );
	}
	console.log('prices>', prices); // prices> [ 5000, 15000, 25000 ]

	console.log('\t|>'+ 'map.entries()');
	for (let [k,v] of map.entries() ) {
		console.log('>', k, v);
	}
	/*
	entry> { rice: 500 } 5000
	entry> { oil: 200 } 15000
	entry> { bread: 50 } 25000
	*/
	
	console.log('\t|>'+ 'map.forEach()');
	map.forEach( (v,k) => {
		console.log('>', k, v);
	});
	/*
	entry> { rice: 500 } 5000
	entry> { oil: 200 } 15000
	entry> { bread: 50 } 25000
	*/
}

{	
	console.log('\n\t', '');
	let map = new Map([
		[1, "one"],
		['2', "two"],
		[3, "three"],
	]);
	console.log('map>', map);

	map = new Map([
		[ {paper: 800}, 5000 ],
		[ {paper: 800}, 5000 ],
	]);
	console.log('map>', map);
}

{
	console.log('\n\t', '');
	let map = new Map();

	map.set( "1", "str1" ); // строка в качестве ключа
	map.set(  1 , "num1" ); // цифра как ключ
	map.set(true, "bool1"); // булево значение как ключ
	console.log('map>', map);
	console.log('map.keys>', map.keys);
	
}
