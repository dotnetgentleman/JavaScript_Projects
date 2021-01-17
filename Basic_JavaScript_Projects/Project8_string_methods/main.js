//Using the concat() method
function makeSentence() {
    var P1 = "This "
    var P2 = "is a "
    var P3 = "sentence."
    var p0 = P1.concat(P2, P3);
    document.getElementById("sentence").innerHTML = p0;
}

    //Using the slice() Method
function SliceMethod() {
    var Sentence = "All work and no play makes Johny a dull boy";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section.toUpperCase();
}

//Using the string method
function stringMethod() {
    var x = 250;
    document.getElementById("numbersToString").innerHTML = x.toString();
}

//Using the toPrecision() Method
function precisionMethod() {
    var x = 500.5168432516854;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

//Using the toFix() Method
function fixMethod() {
    var x = 125.5498436574;
    document.getElementById("fix").innerHTML = x.toFixed(2);
}

function valueMethod() {
    var y = "I think this should work."
    var x = y.valueOf();
    document.getElementById("value").innerHTML = x;
}