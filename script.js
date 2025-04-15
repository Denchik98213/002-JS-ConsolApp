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

  if (lastFilm === null || lastFilm === "" || lastFilm.length > 50) {
    alert("Please enter a valid film name (not empty and < 50 characters).");
    i--;
    continue;
  }

  const assessmentLastFilm = prompt(
    "Give assessment for that film from 0 to 10?",
    ""
  );

  if (
    assessmentLastFilm === null ||
    assessmentLastFilm === "" ||
    assessmentLastFilm >= 10 ||
    assessmentLastFilm <= 0
  ) {
    alert("Please enter assesment like number from 0 to 10");
    i--;
    continue;
  }

  personalMovieDB.movies[lastFilm] = assessmentLastFilm;
}



console.log(personalMovieDB);
