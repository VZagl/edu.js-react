'use strict';

const user = {
	name: 'Alex',
	surname: 'Smith',
	birthday: '20/04/1993',
	showMyPublicData: function () {
		console.log( `${this.name} ${this.surname}` );
	}
};
/*
Object.defineProperty
writable
	true - свойство можно изменить
	false - свойство только для чтения
enumerable
	true - свойство будет перечисляться в циклах
	false - цикл будут его игнорировать
configurable
	true - свойство можно удалить а атрибуты изменить
	false - нельзя
*/
{
	console.log('\n\t', '11');
	console.log( Object.getOwnPropertyDescriptor(user, 'name') );
	Object.defineProperty(user, 'name', {writable: false});
	// user.name = 'dasdas'; // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
	// при добавлении свойства объекта через "defineProperty" все атрибуты будут "false"
	Object.defineProperty(user, 'gender', {value: 'male'});
	console.log( Object.getOwnPropertyDescriptor(user, 'gender') );
}
{
	console.log('\n\t', '21');
	for (let key in user) console.log(key);
	Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
	console.log('\n\t', '22');
	for (let key in user) console.log(key);
}
{
	console.log('\n\t', '31');
	console.log( Object.getOwnPropertyDescriptor(Math, 'PI') );
}
{
	console.log('\n\t', '41');
	Object.defineProperty(user, 'showMyPublicData', {configurable: false});
	console.log( Object.getOwnPropertyDescriptor(user, 'showMyPublicData') );
	
	// значение можно изменить
	user.showMyPublicData = function () {
		console.log( `12345 ${this.name} ${this.surname}` );
	}
	user.showMyPublicData();

	// TypeError: Cannot redefine property: showMyPublicData
	// Object.defineProperty(user, 'showMyPublicData', {configurable: true}); 
}
{
	console.log('\n\t', '51');
	Object.defineProperties(user, {
		name: {writable: false},
		showMyPublicData: {configurable: false},
	});
	console.log( Object.getOwnPropertyDescriptors(user) );
}