//Displaying the type 
document.write(typeof "To be or not to be? We will see if only this code works.")

function numTest() {
    document.getElementById("test1").innerHTML = isNaN(23);
}

function numTest2() {
    document.getElementById("test2").innerHTML = isNaN("Hello there.");
}

function numTest3() {
   document.getElementById("test3").innerHTML = document.write(5E410)
}

function numTest4() {
   document.getElementById("test4").innerHTML = document.write(-6E310)
}

document.write(2>5);

console.log(4+6);

document.write("50" + 2);

console.log(2>5);

document.write(10 == 10);

x = 15;
y = 15;
document.write(x === y);

x = 17;
y = 15;
document.write(x === y);

x = 15;
y = "15";
document.write(x === y);

x = "15";
y = "18";
document.write(x === y);

document.write(x > 14 && x <16);
document.write(x < 14 && x > 16);

document.write(x > 16 || x > 14);
document.write(x > 16 || x < 14);

function notFunction() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function notFunction2() {
    document.getElementById("not").innerHTML = !(10 > 20);
}