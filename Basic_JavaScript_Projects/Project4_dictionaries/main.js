//Defined the dictionary for Car

function myDictionary() {
    var Car = {
        Make:"Chrysler",
        Model:"Town and Country",
        Year:2010
    }
    //Deleting the make so as to show undefined
    delete Car.Make;
    document.getElementById("Dictionary").innerHTML = Car.Make;
}