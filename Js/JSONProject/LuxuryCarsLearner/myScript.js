/* ----------------------------------------------------------------------------------------
    THIS IS MY JAVASCRIPT FILE FOR THE LUXURY CAR JSON AND AJAX PRACTICE

---------------------------------------------------------------------------------------- */

var _eventListener = document.getElementById("manufacturer").addEventListener("change", getCarDatabase);

function getCarDatabase() {

    var carsRequest = new XMLHttpRequest();

    carsRequest.open("GET", "https://raw.githubusercontent.com/Auwais/JSON-AJAX-API-/master/LuxuryCarsLearner/expensiveLuxuryCars.json", true);


    carsRequest.onload = function () {
        if (this.status == 200 && this.readyState == 4)

        {
            var carsData = JSON.parse(carsRequest.responseText);

            displayCar(carsData);

        } else {
            alert("SERVER ERROR!")

        }


    }

    carsRequest.send()
  }

function displayCar(x) {

var manufacturerList = document.getElementById("manufacturer").length;

//var carMakers = ["Rolls Royce", "Aston Martin", "Bugatti", "Ferrari", "Pagani", "W Motors", "Lamborghini", "Koenigsegg", "Mercedes-Benz"];


var brandSelect = document.getElementById("manufacturer").value;
    for (i=0; i<(manufacturerList-1); i+=1) {



        if(brandSelect != ""){
            document.getElementById("manufacturerC").innerHTML = x.data[brandSelect].manufacturer;
            document.getElementById("modelC").innerHTML = x.data[brandSelect].model;
            document.getElementById("priceC").innerHTML = "£" + x.data[brandSelect].price;
            document.getElementById("descriptionC").innerHTML = x.data[brandSelect].description;
            document.getElementById("videoC").innerHTML = "<iframe src=" + x.data[brandSelect].video + " />";
            document.getElementById("overallC").innerHTML = x.data[brandSelect].quality[0].rating;
            document.getElementById("mechanicalC").innerHTML = x.data[brandSelect].quality[1].rating;
            document.getElementById("powertrainC").innerHTML = x.data[brandSelect].quality[2].rating;
            document.getElementById("bodyC").innerHTML = x.data[brandSelect].quality[3].rating;
            document.getElementById("interiorC").innerHTML = x.data[brandSelect].quality[4].rating;
            document.getElementById("accessoriesC").innerHTML = x.data[brandSelect].quality[5].rating;
            document.getElementById("imgC").innerHTML = "<img src=" + x.data[brandSelect].img + " />";
            document.getElementById("messageAlert").innerHTML = "";
        }

        else{
            document.getElementById("messageAlert").innerHTML = "Please Select a Manufacturer";
            clearData();
        }

    }

}

function clearData() {
var data = document.getElementsByClassName("data").length;
    for(i=0; i<data; i +=1){
document.getElementsByClassName("data")[i].innerHTML = "";
    }

}











//function formatMoney(money) {

//    var rawMoney = money;
//    var moneyString = rawMoney.toString();
//    var m = 3
//console.log(moneyString.length)
//    while (m < moneyString.length){
//    if (moneyString.length >=m){
//        console.log(m)
//         var output = [moneyString.slice((m-3),m), ",", moneyString.slice(m)].join("");
//        m+=3;
//
//}
// else{
//     return money;
// }
//
//}
//    return output
//}



