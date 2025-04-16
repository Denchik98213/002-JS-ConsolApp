const numberOfFilms = prompt("How many films did you watch?", "");

const personalMovieDB = {
  count: Number(numberOfFilms),
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const countQuest = 2;
let i = 1;

while (i <= countQuest) {
  const lastFilm = prompt("What one of last film did you watch?", "");
  const assessmentLastFilm = +prompt(
    "Give assessment for that film from 0 to 10?",
    ""
  );

  if (
    lastFilm !== null &&
    assessmentLastFilm !== null &&
    lastFilm !== "" &&
    assessmentLastFilm !== "" &&
    lastFilm.length < 50 &&
    !isNaN(assessmentLastFilm) &&
    assessmentLastFilm >= 0 &&
    assessmentLastFilm <= 10
  ) {
    personalMovieDB.movies[lastFilm] = assessmentLastFilm;
    console.log("done");
    i++;
  } else {
    console.log("error");
  }
}

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
  alert("Very few films watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert("You are a movie buff");
} else if (personalMovieDB.count >= 30) {
  alert("You are a classic spectator");
} else if (personalMovieDB.count === null || personalMovieDB.count === 0) {
  alert("Error");
}

console.log(personalMovieDB);
