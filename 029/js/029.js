/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start(){
	do {
		numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
	} while ( numberOfFilms==null || numberOfFilms.length===0 || isNaN(+numberOfFilms) );
}

start();

const personalMovieDB = {
	count: +numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms(){
	const countFilms = 2;
	for ( let i=0; i<countFilms; i++ ) {
		let lastFilmName;
		do {
			lastFilmName = prompt('Один из последних просмотренных фильмов?', '');
		} while (lastFilmName===null || lastFilmName.length<1 || lastFilmName.length>50);
		let lastFilmRate;
		do {
			lastFilmRate = prompt('На сколько оцените его?', '0');
		} while ( lastFilmRate===null || lastFilmRate.length===0 || isNaN(+lastFilmRate) );
		personalMovieDB.movies[lastFilmName] = lastFilmRate;
	}
}

rememberMyFilms();

function detectPersonalLevel(){
	if (personalMovieDB.count<10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count>=10 && personalMovieDB.count<30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count>=30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

console.log('personalMovieDB= \n', personalMovieDB);
