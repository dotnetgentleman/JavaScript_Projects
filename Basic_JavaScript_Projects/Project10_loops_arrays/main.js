function callLoop() {
    var num = "";
    var x = 1;
    while (x < 10) {
        num += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = num;
}


var tools = ["Hammer", "Screwdriver", "Drill", "Measuring Tape"];
    var item = "";
    var x;
function forLoop() {
    for (x = 0; x < tools.length; x++) {
        item += tools[x] + "<br>";
    }
    document.getElementById("listOfTools").innerHTML = item;
}

function arrayFunction() {
    var actions = [];
    actions[1] = "Light attack";
    actions[2] = "Heavy attack";
    actions[3] = "Inspect";
    actions[4] = "Jump";
    actions[5] = "Dodge";

    document.getElementById("array").innerHTML = "Pressing X will make you " + actions[4];
}

function constantFunction() {
    const car = {make:"Toyota", model:"Camry", color:"White"};
    car.price = "$2200";
    document.getElementById("constant").innerHTML = "This car is " + car.price;
}



let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("newLocal").innerHTML = car.description();
