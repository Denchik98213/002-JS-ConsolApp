"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many films did you watch?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films did you watch?", "");
  }
}

start();

const personalMovieDB = {
  count: Number(numberOfFilms),
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const countQuest = 2;

function rememberMyFilms() {
  for (let i = 1; i <= countQuest; i++) {
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
}

rememberMyFilms();

function detectPersenelLevel() {
  if (personalMovieDB.count < 10) {
    alert("Very few films watched");
  }
  if (personalMovieDB.count > 30) {
    alert("You are a movie buff");
  } else {
    alert("You are a classic spectator");
  }
}

detectPersenelLevel();

function showMyDB() {
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Your favorite genre #${i}`, "");
  }
}

writeYourGenres();
