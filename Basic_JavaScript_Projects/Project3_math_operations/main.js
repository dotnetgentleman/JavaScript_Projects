//Adding

function myFunction() {
    var add = 2 + 2;
    document.getElementById("Math").innerHTML = add;
}
//Subtraction
function minus() {
    var sub = 3 - 1;
    document.getElementById("sub").innerHTML = sub;
}
//Multiplication
function multiply() {
    var mult = 2 * 2;
    document.getElementById("mult").innerHTML = mult;
}
//Division
function division() {
    var div = 4 / 2;
    document.getElementById("div").innerHTML = div;
}
//This is solving a formula
function formula() {
    var form = 4 + 4 * 3 / 2 - 6;
    document.getElementById("form").innerHTML = form;
}
//This is getting the remainder of a number
function remainder() {
    var rem = 15 % 4;
    document.getElementById("rem").innerHTML = rem;
}
//This is getting the negative of a number
function negative() {
    var x = 1
    document.getElementById("neg").innerHTML = -x;
}
// this just adds one to the result. 
function addOne() {
    var x = 23;
    x++;
    document.getElementById("one").innerHTML = x;
}

window.alert(Math.random() * 20);