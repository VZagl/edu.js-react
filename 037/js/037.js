/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
	do {
		numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
	} while ( numberOfFilms == null || numberOfFilms.length === 0 || isNaN(+numberOfFilms) );
}

start();

const personalMovieDB = {
	count: +numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,

	rememberMyFilms: function () {
		const countFilms = 2;
		for (let i = 0; i < countFilms; i++) {
			let lastFilmName;
			do {
				lastFilmName = prompt('Один из последних просмотренных фильмов?', '');
			} while (lastFilmName === null || lastFilmName.length < 1 || lastFilmName.length > 50);
			let lastFilmRate;
			do {
				lastFilmRate = prompt('На сколько оцените его?', '0');
			} while (lastFilmRate === null || lastFilmRate.length === 0 || isNaN(+lastFilmRate) );
			this.movies[lastFilmName] = lastFilmRate;
		}
	},

	detectPersonalLevel: function () {
		if (this.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (this.count >= 10 && this.count < 30) {
			console.log('Вы классический зритель');
		} else if (this.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},

	showMyDB: function (hidden) {
		if (hidden === false) {
			console.log('personalMovieDB= \n', this);
		}
	},
	
	writeYourGenres: function () {
		let vGenre;
		for (let i = 0; i < 3; i++) {
			do {
				vGenre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
			} while (vGenre === null || vGenre.trim().length == 0 );
			this.genres[i] = vGenre;
		};
		this.genres.forEach( (v, i) => console.log(`Любимый жанр #${ i + 1 } - это (${ v })`) );
	},
	
	toggleVisibleMyDB: function () { this.privat = !this.privat; }
};

personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
console.log('\tshowMyDB 1, privat=', personalMovieDB.privat);
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
console.log('\tshowMyDB 2, privat=', personalMovieDB.privat);
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();

console.log('end personalMovieDB= \n', personalMovieDB);
