//This function is to find out if the rider is tall enough. 
function rideFunction() {
    var Height, canRide;
    Height = document.getElementById("Height").value;
    canRide = (Height < 52) ? "You are too short ":"You are tall enough ";
    document.getElementById("Ride").innerHTML = canRide + "to ride.";
}
//This function is in order to tell if the voter is old enough to participate. 
function isOldEnough() {
    var userAge, canVote;
    userAge = document.getElementById("userAge").value;
    canVote = (userAge >= 18) ? "You are old enough to vote.":"You are not old enough to vote."
    document.getElementById("age").innerHTML = canVote;
}
// Start of creating an object constructor
function Vehicle(Make, Model, Year, Color) {
    this.VehicleMake = Make;
    this.VehicleModel = Model;
    this.VehicleYear = Year;
    this.VehicleColor = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Eric =  new Vehicle("Ford", "Pinto", 1971, "Mustang");

function myFunction() {
    document.getElementById("keywordsAndConstructors").innerHTML = "Erik drives a " + Eric.VehicleColor + " colored " 
    + Eric.VehicleModel + " made in " + Eric.VehicleYear;
}
// End of the Object Constructor

// Start of utilizing the New keyword

var Mario = new Vehicle("Town and Country", "Chrysler", 2010, "White");

function newCar() {
    document.getElementById("newAndThis").innerHTML = "Mario drives a " + Mario.VehicleMake;
}

//Creating a nested function
function byTwo() {
    document.getElementById("nestedFunction").innerHTML = Add();
    function Add() {
        var start = 0;
        function plusTwo() {start += 2;}
        plusTwo();
        return start;
    }
}