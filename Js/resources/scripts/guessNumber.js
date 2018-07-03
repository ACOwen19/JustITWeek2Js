var _eventListener = document.getElementById("startBtn").addEventListener("click", gameStart);

function gameStart(){
document.getElementById("resultGuess").innerHTML = ""
//document.getElementById("btn2").disabled = false;
//document.getElementById("guess").disabled = false;


var randNumber = Math.ceil(Math.random()*100)
console.log(randNumber)
var success = false;
var _eventListener = document.getElementById("btn2").addEventListener("click", checkGuess);
var guessNumber = 0;

function checkGuess(){
    var guess = parseInt(document.getElementById("guess").value)

    if (guess == randNumber) {
       if(success == true){
            guessNumber -=1;
        }
        guessNumber +=1;
        document.getElementById("resultGuess").innerHTML = "Well Done - Correct Guess!"

        document.getElementById("compareResult").innerHTML = "The Random Number was: " + randNumber + " <br>Number of Guesses: " + guessNumber;
success = true;
        //        document.getElementById("btn2").disabled = true;
//        document.getElementById("guess").disabled = true;
    }
    else if (guess > randNumber && guess <=100) {
          guessNumber +=1;
        document.getElementById("resultGuess").innerHTML = "Too High!" + " <br>Number of guesses: " + guessNumber;

    }
    else if (guess < randNumber && guess >=1) {
            guessNumber +=1;
        document.getElementById("resultGuess").innerHTML = "Too Low!" + " <br>Number of guesses: " + guessNumber;

    }
    else if (guess <1 || guess >100){
        guessNumber +=1;
        document.getElementById("resultGuess").innerHTML = "Out of Range, Guess between 1 & 100!" + " <br>Number of guesses: " + guessNumber;

    }

}
}
