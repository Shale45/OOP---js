let moviesList = [];
let programsList = [];
let summerFestival = new Festival("Summer Festival");


function createMovie() {

  let titleElement = document.getElementById("movie-title");
  let lengthElement = document.getElementById("movie-duration");
  let genreElement = document.getElementById("genre");
  let selectedGenreElement = genreElement[genreElement.selectedIndex];
  let errorElement = document.getElementById("movie-error");
  let selectMovie = document.getElementById("select-movie");
  let movieListElement = document.getElementById("movies-list");

  let title = titleElement.value;
  let length = parseInt(lengthElement.value);
  let genre = selectedGenreElement.value;

  if (!title) {
    errorElement.textContent = "Error! Please input movie title";
    return;
  } else if (!length) {
    errorElement.textContent = "Error! Please input movie length";
    return;
  } else if (genre === "") {
    errorElement.textContent = "Error! Please choose genre";
    return;
  }

  errorElement.textContent = "";
  let movie = new Movie(title, length, genre);
  moviesList.push(movie);

  let listOfMovies = "<ol>";
  let moviesOptions = "<option value=\"\">  --</option>";

  for (let i = 0; i < moviesList.length; i++) {
    let singleMovie = moviesList[i];
    listOfMovies += "<li>" + singleMovie.getData() + "</li>";
    moviesOptions += "<option value=\"" + i + "\">" + singleMovie.title + "</option>";
  }
  listOfMovies += "</ol>";
  selectMovie.innerHTML = moviesOptions;
  movieListElement.innerHTML = listOfMovies;

  titleElement.value = "";
  lengthElement.value = "";
  genreElement.value = "";

};


function createProgram() {

  let dateElement = document.getElementById("program-date");
  let errorElement = document.getElementById("program-error");
  let programListElement = document.getElementById("program-list");
  let programSelectElement = document.getElementById("select-program");
  let programToFestivalSelect = document.getElementById("program-to-festival");

  let date = dateElement.value;

  if (!date) {
    errorElement.textContent = "Error, Please select program Date."
    return;
  }

  let program = new Program(new Date(date));
  programsList.push(program);

  let listOfPrograms = "<ol>";
  let programsOptions = "<option value='none'>  --</option>";

  for (let i = 0; i < programsList.length; i++) {
    let prog = programsList[i];
    listOfPrograms += "<li>" + prog.getData() + "</li>";
    programsOptions += "<option value='" + i + "'>" + prog.getData() + "</option>";
  }
  listOfPrograms += "</ol>";

  programListElement.innerHTML = listOfPrograms;
  programToFestivalSelect.innerHTML = programsOptions;
  programSelectElement.innerHTML = programsOptions;

};


function addMovieToProgram() {

  let movieSelectElement = document.getElementById("select-movie");
  let programSelectElement = document.getElementById("select-program");
  let errorElement = document.getElementById("add-movie-error");
  let listOfMoviesInProgramElement = document.getElementById("program-list-of-movies");

  let selectedMove = movieSelectElement[movieSelectElement.selectedIndex].value;
  let selectedProgram = programSelectElement[programSelectElement.selectedIndex].value;

  if (selectedMove === "" || selectedProgram == "") {
    errorElement.textContent = "Error! Please select Movie & Program";
    return;
  };

  errorElement.textContent = "";

  programsList[selectedProgram].listOfMovies.push(moviesList[selectedMove]);

  let listOfMoviesInProgram = programsList[selectedProgram].listOfMovies;
  let programOutput = "<p>" + programsList[selectedProgram].getData() + "</p>";
  programOutput += "<ol>";

  for (let i = 0; i < listOfMoviesInProgram.length; i++) {
    let movieInProgram = listOfMoviesInProgram[i];
    programOutput += "<li>" + movieInProgram.getData() + "</li>";
  }
  programOutput += "</ol>";

  listOfMoviesInProgramElement.innerHTML = programOutput;

};


function addProgramToFestival() {

  let addProgramToFestivalElement = document.getElementById("program-to-festival");
  let errorFestivalElement = document.getElementById("program-festival-error");
  let selectedProgram = addProgramToFestivalElement[addProgramToFestivalElement.selectedIndex].value;
  let programAdded = document.getElementById("program-added");

  if (selectedProgram == "") {
    errorFestivalElement.textContent = "Error! Please select Program";
    return;
  }
  errorFestivalElement.textContent = "";
  summerFestival.listOfPrograms.push(programsList[selectedProgram]);

  programAdded.innerHTML = "Program added to Festival";
};


function showFestivalProgram() {
  let programFestivalElement = document.getElementById("program-festival-list");

  let showFestival = summerFestival.getData();
  programFestivalElement.innerHTML = showFestival;

};