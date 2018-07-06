//var cars = [
//    {
//        "make": "Ferrari",
//        "model": "458 italia",
//        "price": 200000
//    },
//
//    {
//        "make": "Aston Martin",
//        "model": "DB7",
//        "price": 75000,
//        "color": {
//            "interior": "Cream",
//            "exterior": "Silver"
//        }
//    },
//
//    {
//        "make": "Lamborghini",
//        "model": "Miura",
//        "price": 750000
//    },
//
//    {
//        "make": "Bugatti",
//        "model": "Veyron",
//        "price": 1000000
//    }
//]
//
//// array of objects, can access by cars[i], easy way to add a unique identifier to objects without having to name them
//// Name value pairs for JSON must be wraped in ""
//
//
//console.log(cars[0].make)
//
//console.log(cars[3].price)
//
//console.log(cars[2].model)
//
//console.log(cars[1].color.exterior)

// --------------------------JSON SYNTAX -------------------------------
//
//[
//    {
//        "make": "Ferrari",
//        "model": "458 italia",
//        "price": 200000
//    },
//
//    {
//        "make": "Aston Martin",
//        "model": "DB7",
//        "price": 75000,
//        "color": {
//            "interior": "Cream",
//            "exterior": "Silver"
//        }
//    },
//
//    {
//        "make": "Lamborghini",
//        "model": "Miura",
//        "price": 750000
//    },
//
//    {
//        "make": "Bugatti",
//        "model": "Veyron",
//        "price": 1000000
//    }
//]
//---------------------------------------------------------------------
//
// This would be a valid JSON file, no var, no console.log, all name value pairs in ""
// Once the JSON file is uploaded we would no longer need the original Js, kept here to show process

//--------AJAX REQUEST SYNTAX ----------

// var requestName = new XMLHttpRequest(); Browser built in object. Variable stores the XMLHttpRequest object

// requestName.open("GET", "data/myData.json", true); The open method prepares the request. It then takes in three parameters which are the HTTP method (GET is recieve POST is send), the URL of the data we want to retrieve/place we want to send it & the boolean (true tells it that you want the request to be asynchronous)

// requestName.send(); Sends request to the server. You can pass information to the server in the ()

// -----------------------------------------


var _eventListenerThirtyOne = document.getElementById("userInputB31").addEventListener("click", inputFunThirtyOne);

function inputFunThirtyOne() {

    var testRequest = new XMLHttpRequest();

    testRequest.open("GET", "https://raw.githubusercontent.com/ACOwen19/JustITWeek2Js/master/store.json", true);
    // NB You need the raw link, not the github file link

    testRequest.onload = function () {
        if (this.status == 200 && this.readyState == 4)
        // status == 200 is the standard response for succesful http requests. readyState == 4 shows that the data is loaded & ready to be used
        {
            var requestData = JSON.parse(testRequest.responseText); //
            // Stores the requested data as text in a new variable. JSON.parse() processes a string containing the JSON data and converts the JSON into a Js object, ready for use.
            console.log(requestData);

            displayData(requestData);
            // Running a displayData function with the var storing the parsed data passed as a parameter.
        } else {
            alert("SERVER ERROR!")
            // This will pop up if the request was unsuccessful
        }
        console.log(requestData[1].make);
        console.log(requestData[1].color);
        console.log(requestData[1].color.exterior);
        console.log(requestData);

    }
    // Onload method is set equal to an anonymous function. We need to check on the status of the server. When the browser has recieved the loaded response for the server it will trigger the anonymous function.

    testRequest.send()
  }

// Declaring the displayData function, x is just a placeholder parameter for requestData. This function will write to the
function displayData(x) {
    for(i = 0; i < x.length ; i+=1){
        document.getElementById("carsTable").innerHTML += "<tr><td>" + x[i].make + "</td><td>" + x[i].model + "</td><td>" + x[i].price + "</td></tr>";
    }
}
