"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};




function rememberMyFilms() {
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
}

rememberMyFilms();

// для того чтобы вернуть пользователя к вопросам вверху
// нужно не заново их писать а работать с счетчиком
// и записать дикремент если начало работать else


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
    
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB();


function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} `);
    }
}
writeYourGenres();

