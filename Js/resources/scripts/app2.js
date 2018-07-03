//FOR LOOPS
//Syntax:
//for(initialisation; test condition; iteration statement){
//    code to be executed if the test condidtion is true
//};
// Initialisation happens only once at the start of the look
// Test condition is what deteremines whether each iteration of the loop will execute
// Iteration statement will execute after each itereation of the loop, tends to relate to the test condition in some way
//eg:
var cars;

console.log("Beginning of the for loop")

for (cars = 0; cars <= 10; cars += 1) {
    console.log("Number of Cars: " + cars)
}

console.log("End of the for loop")

// Use a for loop when you/the user knows how many iterations are required
// Js will not run any more code until the for loop is complete - top to bottom

// START Challenge One - Create a function that contains a For Loop that loops through from one to 50 and Displaying the number onto the webpage

var number;

for (number = 1; number <= 50; number += 1) {

    document.getElementById("userInputDis").innerHTML += number + " "

    // To concatonate the result to the div rather than overwrite it we use += rather than =

    //var newParagraph = document.createElement('p');
    //newParagraph.textContent = number + ", ";

    //document.getElementById("userInputDis").appendChild(newParagraph);
    //Not the best way to complete the challenge but a useful thing to know - how to add extra HTML elements to the page based on JS

}

// END Challenge One

// IF STATEMENT SYNTAX

// if (condition) {
//code to be executed if the condition is true
//}

// condition tends to be structured as (variable/number, operater(eg:== or <= etc), variable/number )

//else if (condition 2)
//code to be executed if the condition is true
//}

// can have as many else if conditions as you want

// else  {
//code to be executed if all the conditions are false
//}

var exNum = 12;

if (exNum > 11) {
    console.log("if statement is true")
} else {
    console.log("if statement is false")
}

// START Challenge Two - Create a function that contains a For Loop that loops through from 1 to 20 & for each iteration check if the number is odd or even

var oddEven;

for (oddEven = 1; oddEven <= 20; oddEven += 1) {

    if (oddEven % 2 == 0) {
        document.getElementById("userInputDis2").innerHTML += oddEven + ": Even ";
    }
    // % is Modulus, it will find the remainder after one number is divided by another, so in this example we are checking if the remainder when our number is divided by 2 is equal to 0. Every even number has 2 as a factor and no odd numbers do.
    else {
        document.getElementById("userInputDis2").innerHTML += oddEven + ": Odd ";
    }
}

// END Challenge Two

// START Challenge Three - Collect user input and display on the webpage if the number is less than 10, more than 10 or a negative

var _eventListenerOne = document.getElementById("userInputB1").addEventListener("click", inputFunOne);

function inputFunOne() {
    var inputNum = document.getElementById("userInput").value;

    if (inputNum < 10 && inputNum < 0) {
        document.getElementById("userInputDis3").innerHTML = inputNum + " is less than 10, is a negative & isn't greater than 10";
    } else if (inputNum < 10) {
        document.getElementById("userInputDis3").innerHTML = inputNum + " is less than 10, isn't a negative & isn't greater than 10";
    } else if (inputNum > 10) {
        document.getElementById("userInputDis3").innerHTML = inputNum + " isn't less than 10, isn't a negative, & is greater than 10";
    } else {
        document.getElementById("userInputDis3").innerHTML = inputNum + " isn't less than 10, isn't a negative & isn't greater than 10";
    }
};

// END Challenge Three

// START Challenge Four - Collect 2 numbers from the user and display on the web page if one or both of them are greater than 10

var _eventListenerTwo = document.getElementById("userInputB2").addEventListener("click", inputFunTwo);

function inputFunTwo() {
    var inputNumOne = document.getElementById("userInput").value;
    var inputNumTwo = document.getElementById("userInputTwo").value;

    if (inputNumOne > 10 && inputNumTwo > 10) {
        document.getElementById("userInputDis3").innerHTML = "Both " + inputNumOne + " & " + inputNumTwo + " are greater than 10";
    } else if (inputNumOne > 10) {
        document.getElementById("userInputDis3").innerHTML = inputNumOne + " is greater than 10, " + inputNumTwo + " is not";
    } else if (inputNumTwo > 10) {
        document.getElementById("userInputDis3").innerHTML = inputNumTwo + " is greater than 10," + inputNumOne + " is not";
    } else {
        document.getElementById("userInputDis3").innerHTML = "Neither " + inputNumOne + " nor " + inputNumTwo + " are greater than 10";
    }
}

// END Challenge Four

// START Challenge Five - Create a nested loop that displays 2 sequences of numbers form 1-10 with one sequence nested inside the other

var _eventListenerThree = document.getElementById("userInputB3").addEventListener("click", inputFunThree);

function inputFunThree() {
    var nestOne;
    var nestTwo = 1;
    // Need to define the variable for the second sequence outside the loop as otherwise it will iterate through the second loop for each iteration of the first loop
    for (nestOne = 1; nestOne <= 10; nestOne += 1) {
        document.getElementById("userInputDis3").innerHTML += nestOne + " ";
        for (nestTwo; nestTwo <= 10; nestTwo += 1) {
            document.getElementById("userInputDis4").innerHTML += nestTwo + " ";
        }
    }
}

// END Challenge Five

// START Advanced Challenge One - Mark Checker

var _eventListenerFour = document.getElementById("userInputB4").addEventListener("click", inputFunFour);
var classMarks = [];
function inputFunFour() {
    var mark = document.getElementById("userInputTwo").value;
    var student = document.getElementById("userInput").value;
    if (mark >= 90 && mark <= 100) {
        document.getElementById("userInputDis3").innerHTML = "Student " + student + ": " + mark + " - Distinction";
        classMarks.push(" Student " + student + ": " + mark + " - Distinction");
    } else if (mark >= 75 && mark < 90) {
        document.getElementById("userInputDis3").innerHTML = "Student " + student + ": " + mark + " - Merit";
        classMarks.push(" Student " + student + ": " + mark + " - Merit");
    } else if (mark >= 60 && mark < 75) {
        document.getElementById("userInputDis3").innerHTML = "Student " + student + ": " + mark + " - Pass";
        classMarks.push(" Student " + student + ": " + mark + " - Pass");
    } else if (mark > 100 || mark < 0) {
        document.getElementById("userInputDis3").innerHTML = "Invalid Mark";
    } else {
        document.getElementById("userInputDis3").innerHTML = "Student " + student + ": " + mark + " - Fail";
        classMarks.push(" Student " + student + ": " + mark + " - Fail");
    }

}
var _eventListenerFourTwo = document.getElementById("userInputB42").addEventListener("click", inputFunFourTwo);

function inputFunFourTwo() {
document.getElementById("userInputDis4").innerHTML = classMarks;
};


//var _eventListenerFour = document.getElementById("userInputB4").addEventListener("click", inputFunFour);
//var student = 1;
//function inputFunFour() {
//    var mark = document.getElementById("userInput").value;
//    if (mark >= 90 && mark <= 100) {
//        document.getElementById("userInputDis3").innerHTML += "Student " + student + ": " + mark + " - Distinction " + "<br>";
//        student += 1;
//    } else if (mark >= 75 && mark < 90) {
//        document.getElementById("userInputDis3").innerHTML += "Student " + student + ": " + mark + " - Merit " + "<br>";
//        student += 1;
//    } else if (mark >= 60 && mark < 75) {
//        document.getElementById("userInputDis3").innerHTML += "Student " + student + ": " + mark + " - Pass " + "<br>";
//        student += 1;
//    } else if (mark > 100 || mark < 0) {
//        document.getElementById("userInputDis3").innerHTML += "Invalid Mark " + "<br>";
//    } else {
//        document.getElementById("userInputDis3").innerHTML += "Student " + student + ": " + mark + " - Fail " + "<br>";
//        student += 1;
//    }
//}

//function inputFunFour() {
//
//    var mark = document.getElementById("userInput").value;
//
//        if (mark >= 90 && mark <= 100) {
//        document.getElementById("userInputDis3").innerHTML += mark + " - Distinction ";
//    } else if (mark >= 75 && mark < 90) {
//        document.getElementById("userInputDis3").innerHTML += mark + " - Merit ";
//    } else if (mark >= 60 && mark < 75) {
//        document.getElementById("userInputDis3").innerHTML +=mark + " - Pass ";
//    } else if (mark > 100 || mark <0) {
//        document.getElementById("userInputDis3").innerHTML += "Invalid Mark ";
//    } else {
//        document.getElementById("userInputDis3").innerHTML += mark + " - Fail ";
//    }
//}

// END Advanced Challenge One

// SYNTAX FOR A WHILE LOOP

// while(condition) {code the executes if the condition is true}

//When the number of iterations is unknown we use the while loop (for loop if known)

var houses = 0;

console.log("Start of the while loop")
while(houses <=10){
    console.log("Current number of Houses: " + houses);
    houses +=1;
    // This stops this being an infinite loop
}

console.log("End of the while loop")


// START Challenge Six - Create a While Loop that displays the numbers 1 to 10 on the webpage


var whileTest = 1;

while (whileTest <=10) {
    document.getElementById("userInputDis5").innerHTML += whileTest + " ";
    whileTest +=1;
    }
// while loops tend to be used when dealing with user inputs
// END Challenge Six


// SYNTAX FOR A DO WHILE LOOP

// do{
//code to be executed
//} while(condition);

// The do while loop will run at least once even if the condition is false.

var homes = 0;
console.log("Start of the do while loop")
do{
    console.log("Current number of Homes: " + homes)
    homes +=1;
}while(homes == 1);
console.log("End of the do while loop")

// homes starts at 0 so when the 1st loop is executed it looks at the condition and finds homes = 1, it will then execute a 2nd iteration of the loop, however when it reaches the condition again homes != 1 therefore it does not execute a 3rd loop

// START Challenge Seven - Create a do While Loop that displays the numbers 1 to 10 on the webpage

var doWhileTest = 1;

do{
    document.getElementById("userInputDis6").innerHTML += doWhileTest + " ";
    doWhileTest +=1;
    }while (doWhileTest <=10);

//END Challenge Seven
