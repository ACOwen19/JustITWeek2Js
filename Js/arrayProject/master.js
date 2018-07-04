
var _eventlistenerOne = document.getElementById("btn1").addEventListener("click",addName);

var contestants = [];

function addName(){

var _name = document.getElementById("lab19input").value;
    contestants.push(_name)
document.getElementById("output1").innerHTML = contestants;
};

var _eventlistenerTwo = document.getElementById("btn2").addEventListener("click",generateWinner);

function generateWinner(){

winnerNumber = Math.floor(Math.random()*contestants.length);

    document.getElementById("randomwinner").innerHTML = contestants[winnerNumber];

}
