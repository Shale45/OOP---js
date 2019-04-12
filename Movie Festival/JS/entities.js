function Movie(title, length, genre) {
  this.title = title;
  this.length = length;
  this.genre = genre;
};

Movie.prototype.getData = function () {
  let formattedGenre = this.genre.charAt(0) + this.genre.charAt(this.genre.length - 1);
  let output = this.title + ", duration: " + this.length + " min, genre: " + formattedGenre.toUpperCase();
  return output;
};


function Program(date) {
  this.date = date;
  this.listOfMovies = [];
  this.totalNumberOfMovies = [];
};

Program.prototype.getData = function () {
  let day = this.date.getDate();
  let month = this.date.getMonth() + 1;
  let year = this.date.getFullYear();
  return "Program: " + day + "." + month + "." + year + ".";
};


function Festival(name) {
  this.name = name;
  this.listOfPrograms = [];
};

Festival.prototype.totalFestivalMovies = function () {
  let sum = 0;

  for (let i = 0; i < this.listOfPrograms.length; i++) {
    let program = this.listOfPrograms[i];
    sum += program.listOfMovies.length;
  }
  return sum;
};

Festival.prototype.getData = function () {
  let output = "";
  if (this.listOfPrograms.length < 1) {
    output = "Festival Program will be anounced soon.";
    return output;
  }

  output += "<p>Festival: " + this.name + ", Number of movies: " + this.totalFestivalMovies() + "</p>";
  output += "<ol>";

  for (let i = 0; i < this.listOfPrograms.length; i++) {
    let program = this.listOfPrograms[i];
    if (program.listOfMovies.length < 1) {
      output += program.getData();
      output += "There are no movies on the selected day.";
    }
    output += "<li>" + program.getData() + "</li>";
    output += "<ol>";

    for (let j = 0; j < program.listOfMovies.length; j++) {
      let movie = program.listOfMovies[j];
      output += "<li>" + movie.getData() + "</li>";
    }
    output += "</ol>";
  }
  output += "</ol>";

  return output;
};