'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '0');
console.log(`просмотрели ${numberOfFilms} фильмов.`);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const countFilms = 2;
for (let i = 0; i < countFilms; i++) {
	let lastFilmName = prompt('Один из последних просмотренных фильмов?', '');
	let lastFilmRate = prompt('На сколько оцените его?', '0');
	personalMovieDB.movies[lastFilmName] = lastFilmRate;
}

console.log('personalMovieDB=');
console.log(personalMovieDB);
