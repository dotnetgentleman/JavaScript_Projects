function colorFunction() {
    var colorOutput;
    var colors = document.getElementById("colorInput").value;
    var colorString = " is a great color!";
    switch(colors) {
        case "Red":
            colorOutput = "Red" + colorString;
        break;

        case "Yellow":
            colorOutput = "Yellow" + colorString;
        break;

        case "Green":
            colorOutput = "Green" + colorString;
        break;

        case "Blue":
            colorOutput = "Blue" + colorString;
        break;

        case "Pink":
            colorOutput = "Pink" + colorString;
        break;

        case "Purple":
            colorOutput = "Purple" + colorString;
        break;
        default:
            colorOutput = "Please enter a color exactly as written on the above list."
    }
    document.getElementById("output").innerHTML = colorOutput;
}

function helloWorld() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "Told ya so.";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "skyblue");
grd.addColorStop(1, "Blue");

ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);