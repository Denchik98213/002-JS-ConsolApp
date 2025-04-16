const numberOfFilms = prompt("How many films did you watch?", "");

const personalMovieDB = {
  count: Number(numberOfFilms),
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const countQuest = 2;

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
