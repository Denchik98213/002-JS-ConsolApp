"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("How many films did you watch?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("How many films did you watch?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 1; i <= 2; i++) {
      const lastFilm = prompt("What one of last film did you watch?", "");
      const assessmentLastFilm = prompt(
        "Give assessment for that film from 0 to 10?",
        ""
      );

      if (
        lastFilm !== null &&
        assessmentLastFilm !== null &&
        lastFilm !== "" &&
        assessmentLastFilm !== "" &&
        lastFilm.length < 50
      ) {
        personalMovieDB.movies[lastFilm] = assessmentLastFilm;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersenelLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Very few films watched");
    }
    if (personalMovieDB.count > 30) {
      alert("You are a movie buff");
    } else {
      alert("You are a classic spectator");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let ganre = promt(`Выш любимый жанр под номером ${i}`);

      if (ganre === `` || genre == null) {
        console.log(`Вы ввкли некорректные данные или не ввели их вовсе`);
        i--;
      } else {
        personalMovieDB.genres[i - 1] = ganre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
