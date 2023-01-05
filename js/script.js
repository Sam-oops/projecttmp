"use strict";



let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function() {
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
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i} `);
            if(genre == '' || genre == null){
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
};
