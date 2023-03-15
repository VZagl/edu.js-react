console.log('=> js/script.js');
'use strict';

let numberOfFilms;
do {
	numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
	// console.log('1', typeof(numberOfFilms));
	// console.log('1', (+numberOfFilms));
	// console.log('1', isNaN(+numberOfFilms));
} while ( numberOfFilms===null || numberOfFilms.length===0 || isNaN(+numberOfFilms) );

const personalMovieDB = {
	count: +numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

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

if (personalMovieDB.count<10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count>=10 && personalMovieDB.count<30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count>=30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}

console.log('personalMovieDB=');
console.log(personalMovieDB);
