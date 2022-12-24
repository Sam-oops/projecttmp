"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


for (let i = 0; i < 2; i++) {
    const movieName = prompt('Один из последних просмотренных фильмов?', '');
    const movieGrade = prompt('На сколько оцените его?', '');

    if (movieName != null && movieGrade != null && movieName != '' && movieGrade != '' && movieName.length < 50) {
        personalMovieDB.movies[movieName] = movieGrade;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

    // для того чтобы вернуть пользователя к вопросам вверху
    // нужно не заново их писать а работать с счетчиком
    // и записать дикремент если начало работать else


if (personalMovieDB.count < 10){
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);