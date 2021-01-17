//Create a global var
var name = "Mario";
function sayName() {
    document.write(name);
}

// Create a local var with an error
function earthAge() {
    var age = 23;
    document.write("On earth you are " + age + " years old.")
}
function marsAge() {
    console.log("On mars you are " + (age * 1.88) + "years old.");
}

//Creating a conditional statement
function getDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you doing today?";
    }
}

function drinkingAge() {
    var age = document.getElementById("age").value;
    if (age >= 21) {
        Vote = "You are old enough to drink."
    }
    else {
        Vote = "You are too young to drink."
    }
    document.getElementById("userAge").innerHTML = Vote;
}

function timeFunction() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time>0) {
        reply = "It is morning time."
    }
    else if (time > 12 == time < 18) {
        reply = "It is the afternoon";
    }
    else {
        reply = "It is evening time";
    }
    document.getElementById("timeOfDay").innerHTML = reply;
}