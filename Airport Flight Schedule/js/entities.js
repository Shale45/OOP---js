function Person(name, surename) {
  this.name = name;
  this.surename = surename;
};

Person.prototype.getData = function () {
  return this.name + " " + this.surename;
};


function Seat(number, category) {
  this.number = number;
  this.category = category;
};

Seat.prototype.getData = function () {
  return this.number + ", " + this.category;
};


function Passenger(personObj, seatObj) {
  this.person = personObj;
  this.seat = seatObj;
};

Passenger.prototype.getData = function () {
  let person = this.person.getData();
  let seat = this.seat.getData();
  return person + ", " + seat;
};


function Flight(origin, destination, date) {
  this.origin = origin;
  this.destination = destination;
  this.date = new Date(date);
  this.listOfPassengers = [];
};

Flight.prototype.addPassenger = function (passenger) {
  this.listOfPassengers.push(passenger);
};

Flight.prototype.getData = function () {
  let day = this.date.getDate();
  let month = this.date.getMonth() + 1;
  let year = this.date.getFullYear();
  let dateStr = day + "." + month + "." + year + ".";
  let relation = this.origin + " - " + this.destination;

  let output = dateStr + ", " + relation + "\n";
  return output;
};


function Airport() {
  this.name = "Nikola Tesla";
  this.listOfFlights = [];
};

Airport.prototype.addFlight = function (flight) {
  this.listOfFlights.push(flight);
};

Airport.prototype.getData = function () {
  let output = "<h3 class=\"left\">Airport " + this.name + " Flight Schedule:</h3>";
  output += "<ul>";

  this.listOfFlights.forEach(function(flight) {
    output += "<li>" + flight.getData()+ "</li>";

    flight.listOfPassengers.forEach(function(passenger) {
      output += "<ol>";
      output += "<li>" + passenger.getData() + "</li>";
      output += "</ol>";
    }, this);

  }, this);

  output += "</ul>";
  return output;
};
