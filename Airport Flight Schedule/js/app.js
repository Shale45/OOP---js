let passengerList = [];
let flightList = [];
let airport = new Airport();

function createPassenger() {

  const passengerNameElement = document.getElementById("passenger-name");
  const passengersurnameElement = document.getElementById("passenger-surname");
  const seatNumberElement = document.getElementById("seat-number");
  const categorySelectElement = document.getElementById("category");
  const passengerErrorElement = document.getElementById("pax-error");
  const createdPassengerElement = document.getElementById("created-passenger");
  const selectPassengrsListElement = document.getElementById("select-passengers-list");
  const selectPassengerOption = document.createElement("option");

  let passengerName = passengerNameElement.value;
  let passengerSurname = passengersurnameElement.value;
  let seatNumber = parseInt(seatNumberElement.value);
  let category = categorySelectElement[categorySelectElement.selectedIndex].value;

  if (!passengerName || !passengerSurname || !seatNumber || !category) {
    passengerErrorElement.textContent = "ERROR!, Please fill all fields.";
    return;
  };

  passengerErrorElement.textContent = "";

  let person = new Person(passengerName, passengerSurname);
  let seat = new Seat(seatNumber, category);
  let passenger = new Passenger(person, seat);

  passengerList.push(passenger);

  selectPassengerOption.text = person.getData();
  selectPassengrsListElement.add(selectPassengerOption);
  selectPassengerOption.setAttribute("value", (passengerList.length - 1));

  createdPassengerElement.innerHTML = "Passenger created: " + passenger.getData();

  passengerNameElement.value = "";
  passengersurnameElement.value = "";
  seatNumberElement.value = "";
  categorySelectElement.value = "";

};


function createFlight() {

  const originElement = document.getElementById("flight-origin");
  const destinationElement = document.getElementById("flight-destination");
  const dateElement = document.getElementById("flight-date");
  const flightErrorElement = document.getElementById("flt-error");
  const createdFlightElement = document.getElementById("created-flight");

  const firstSelectFlightList = document.getElementById("to-add-pax-flights-list");
  const secondSelectFlightList = document.getElementById("to-add-flt-to-apt-flight-list");
  const firstSelectFlightOption = document.createElement("option");
  const secondSelectFlightOption = document.createElement("option");

  let origin = originElement.value;
  let destination = destinationElement.value;
  let date = dateElement.value;

  if (!origin || !destination || !date) {
    flightErrorElement.textContent = "ERROR!, Please fill all requested fields."
    return;
  };

  flightErrorElement.textContent = "";

  let flight = new Flight(origin, destination, date);
  flightList.push(flight);

  firstSelectFlightOption.text = flight.getData();
  secondSelectFlightOption.text = flight.getData();
  firstSelectFlightOption.setAttribute("value", (flightList.length - 1));
  secondSelectFlightOption.setAttribute("value", (flightList.length - 1));
  firstSelectFlightList.add(firstSelectFlightOption);
  secondSelectFlightList.add(secondSelectFlightOption);

  createdFlightElement.innerHTML = "Flight created: " + flight.getData();

  originElement.value = "";
  destinationElement.value = "";
  dateElement.value = "";
};


function addPassengerToFlight() {

  const selectPassengerElement = document.getElementById("select-passengers-list");
  const selectFlightElement = document.getElementById("to-add-pax-flights-list");
  const addPassengerToFlightError = document.getElementById("add-pax-to-flt-error");
  const addedPassengerToFlight = document.getElementById("added-pax-list");

  let selectedPassenger = selectPassengerElement[selectPassengerElement.selectedIndex].value;
  let passenger = passengerList[selectedPassenger];
  let selectedFlight = selectFlightElement[selectFlightElement.selectedIndex].value;
  let flight = flightList[selectedFlight];

  if (selectedPassenger == "" || selectedFlight == "") {
    addPassengerToFlightError.textContent = "ERROR!, Please select Passenger & Flight";
    return;
  };

  addPassengerToFlightError.textContent = "";

  flight.addPassenger(passenger);

  addedPassengerToFlight.innerHTML = "Passenger added to selected Flight.";

  selectPassengerElement.value = "";
  selectFlightElement.value = "";
};


function addFlightToAirport() {

  const selectFlightElement = document.getElementById("to-add-flt-to-apt-flight-list");
  const addFlightToAptError = document.getElementById("add-flight-to-apt-error");
  const addedFlightToAirport = document.getElementById("added-flight");

  let selectedFlight = selectFlightElement[selectFlightElement.selectedIndex].value;

  let flight = flightList[selectedFlight];

  if(selectedFlight == "") {
    addFlightToAptError.textContent = "ERROR!, Please select flight";
    return;
  }

  addFlightToAptError.textContent = "";

  airport.addFlight(flight);

  addedFlightToAirport.innerHTML = "Flight added to the airport";

  selectFlightElement.value = "";
};


function showAllFlights() {

  const allFlightsError = document.getElementById("all-flights-error");
  const displayAllFlightsElement = document.getElementById("display-all-flights");

  if(airport.listOfFlights.length < 1) {
    allFlightsError.textContent = "There is no flights created yet.";
    return;
  }

  allFlightsError.textContent = "";

  displayAllFlightsElement.innerHTML = airport.getData();

};
