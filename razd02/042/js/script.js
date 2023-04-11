'use strict';

{
	console.log('Старые методы');
	// поиск 1 элемента по Id
	// возвращает 1 элемент. если не найдено - null.
	const box = document.getElementById('box');
	console.log(box);

	// поиск элементов с тегом <button>.
	// возвращает коллекцию. если не найдено - пустую.
	const btns = document.getElementsByTagName('button'); 
	console.log(btns);

	const btn1 = btns[1];
	console.log(btn1);

	// поиск элементов с классом <circle>.
	// возвращает коллекцию. если не найдено - пустую.
	const circles = document.getElementsByClassName('circle');
	console.log(circles);
}
{
	console.log('Новые методы');
	// поиск элементов.
	// возвращает коллекцию. если не найдено - пустую.
	const hearts = document.querySelectorAll('.heart');
	// коллекция имеет метод "forEach"
	hearts.forEach( (_elem, _num) => console.log( _num, _elem) );
	
	const heart1 = hearts[1];
	console.log(heart1);

	const boxes = document.querySelectorAll('#box');
	console.log(boxes);

	// поиск первого элемента
	// возвращает 1 элемент. если не найдено - null.
	const oneCircle = document.querySelector('.circle');
	console.log(oneCircle);
	
	// можно искать по тегу
	const oneDiv = document.querySelector('div');
	console.log(oneDiv);
}
