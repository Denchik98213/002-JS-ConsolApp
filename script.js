const numberOfFilms = prompt("How many films did you watch?", "");

const personalMovieDB = {
  count: Number(numberOfFilms),
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilm = prompt("What one of last film did you watch?", "");
const assessmentLastFilm = prompt(
  "What do you give assessment for that film from 0 to 10?",
  ""
);
const lastFilm2 = prompt("What one of last film did you watch?", "");
const assessmentLastFilm2 = prompt(
  "What do you give assessment for that film from 0 to 10?",
  ""
);

personalMovieDB.movies[lastFilm] = assessmentLastFilm;
personalMovieDB.movies[lastFilm2] = assessmentLastFilm2;

console.log(personalMovieDB);
