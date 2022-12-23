"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let movieName = prompt('Один из последних просмотренных фильмов?', '');
let movieGrade = prompt('На сколько оцените его?', '');

personalMovieDB.movies[movieName] = movieGrade;

console.log(personalMovieDB);