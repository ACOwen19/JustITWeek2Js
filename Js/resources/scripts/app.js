// --------------------------------------DAY 1-------------------------------------------------------------------------------

//SYNTAX PARSER - SOMETHING THAT READES & TRANSLATES YOUR CODE

//var a = "Hello World!";

// var is a keyword that "declares" that the following name is a variable. that is named a. "=" "initialises" the variable & "Hello World!" is the content that is "assigned" to the variable.

console.log("Web page is linked");

// Sending a message to our dev console to ensure that the web page is linked

var nameOfVariable;

// You don't have to assign any content when you declare a variable

nameOfVariable = "Hello";

// We have now initialised the variable. Single line declaration, initialisation & assignments is better practice

console.log(nameOfVariable);

nameOfVariable = "How are you?";

console.log(nameOfVariable);

// Console.log lets us see what the program is doing at various points

// Don't name variables with:
//- Keywords
//- Starting with numbers
//- The same name as other variables
//- If you have multiple Js files linked to one HTML then be careful with names as if you have variables with the same name in the different files then they will clash. Look for this when troubleshooting.

//Declares function
function nameOfFunction() {
    console.log("This is Js Week");
};

//Calls function
nameOfFunction();

//Keyword: Function   Name: nameOfFunction   Parameters: ()   Content :{.........}

// START Challenge One - Create an alert displaying a message to the webpage

function challengeOne() {
    alert("Alert");
};

// Alert will display a popup. NB: Js runs top to bottom, if you look at the Dev console while the alert has popped up you won't see any console.log statements that are below it in the code.

//challengeOne();

//window.alert("Alert2");

// window.alert will also create a poup, as its not in a funtion we don't need to call it

// END Challenge One

function localVarFunction() {
    var text = "This is JavaScript Week";
    // Local variable can't be called outside the function, eg: console.log(text) won't display if it is called outside the function
    console.log(text)
    var nameOfVariable = "This is Js Week";
    // Local variable: can carry the same name as the global variable without a conflict. Don't attempt to use both in the same function.NB:Not best practice.
    console.log(nameOfVariable);
    // Local variables are temporarily initialised, saves memory
};

localVarFunction();
// console.log(text) - uncomment > ("parameter") is not defined error

// START Challenge Two - Create a function containing basic arithmetic

function challengeTwo() {
    var noOne = 5;
    var noTwo = 2;
    console.log(noOne + " + " + noTwo + " + ( " + noOne + " * " + noTwo + " )" + " = " + (noOne + noTwo + (noOne * noTwo)))
};

//  If there is a string in between the numbers (either as a string or another variable) then they will concantonate and not add. Brackets work as they do in maths

challengeTwo();

function challengeTwoPara(number1, number2) {
    console.log(number1 + number2);
};

challengeTwoPara(3, 5);

//Using the parameters we can take user input later down the line

// END Challenge Two

//EVENT LISTENER TEST

var _eventListener = document.getElementById("userInputB1").addEventListener("click", inputFun);

// document. refers to the DOM, any communication between HTML & Js uses this
//could name the var anything, including userInputB, no conflict between Js names & html ids
// Event listeners look for specific user input and output a function when the input is detected.
// In this case we have an event listener looking out for a user to click the button "userInputB1" and outputting the function inputFun.
//getElementById tells the listener what place look for input. .addEventListener tells it that its an event listener.  ("click", inputFun) tells it what type of input to look for and what function to run when it detects it.

function inputFun() {

    console.log("Function Working");

    var userInput = document.getElementById("userInput").value;

    // When the function is called the function creates a variable with the value of whatever is in the userInput form
    //.value tells the variable to store the value of the element

    console.log("Input: " + userInput);

    document.getElementById("userInputDis").innerHTML = userInput;

    // The function will then tell the HTML to display the variable userInput (which has the value of the "userInput form) in the userInputDis div.
    //.innerHTML tells the HTML element called to display whatever is after the =, could be a hard coded number/string or a variable
};

// START Challenge Three - Do arithmetic with two user inputs

var _eventListenerTwo = document.getElementById("userInputB2").addEventListener("click", inputFunTwo);

function inputFunTwo() {

    var userInput = parseInt(document.getElementById("userInput").value);

    var userInputTwo = parseInt(document.getElementById("userInputTwo").value);

    //parseInt will tell Js to treat a string as a number. If parseing within a calculation rather than when declaring the variable you need to parse strings individually

    console.log("Input One: " + userInput);
    console.log("Input Two: " + userInputTwo);
    document.getElementById("userInputDis").innerHTML = userInput + " +  " + userInputTwo + " = " + (userInput + userInputTwo);


};

// END Challenge Three

// START Challenge Four - Collect 3 user inputs and display the difference between the values of these two calculations - (a+b+c)*c & (a+b+c)

var _eventListenerThree = document.getElementById("userInputB3").addEventListener("click", inputFunThree);


function inputFunThree() {

    var userInput = parseInt(document.getElementById("userInput").value);

    var userInputTwo = parseInt(document.getElementById("userInputTwo").value);

    var userInputThree = parseInt(document.getElementById("userInputThree").value);

    console.log("Input One: " + userInput);
    console.log("Input Two: " + userInputTwo);
    console.log("Input Three: " + userInputThree);

    var calcOne = (userInput + userInputTwo + userInputThree) * userInputThree;
    var calcTwo = userInput + userInputTwo + userInputThree;

    console.log("Calculation One: " + " ( " + userInput + " + " + userInputTwo + " + " + userInputThree + " ) " + "* " + userInputThree)
    console.log("Calculation Two: " + userInput + " + " + userInputTwo + " + " + userInputThree)


    document.getElementById("userInputDis").innerHTML = "The difference between " + calcOne + " and " + calcTwo + " is: " + (calcOne - calcTwo);

};

//END Challenge Four

//START Challenge Five - Accept user input from webpage and display it in an alert message using a function

var _eventListenerFour = document.getElementById("userInputB4").addEventListener("click", inputFunFour);

function inputFunFour() {

    var userInput = document.getElementById("userInput").value;

    console.log("Input One: " + userInput);

    document.getElementById("userInputDis").innerHTML = alert(userInput);


};

// END Challenge Five

// START Challenge Six - Create a function that accepts 3 variables being passed into it, adds them, up and returns the sum. Display the sum back to the DOM.

var _eventListenerFive = document.getElementById("userInputB5").addEventListener("click", function () {
    inputFunFive(parseInt(document.getElementById("userInput").value), parseInt(document.getElementById("userInputTwo").value), parseInt(document.getElementById("userInputThree").value))
});

// In order to use parameters inside an event listener we need to wrap the function containing the output in an annonymous function ( function (){outputfunction})

function inputFunFive(userInput, userInputTwo, userInputThree) {

    console.log("Input One: " + userInput);
    console.log("Input Two: " + userInputTwo);
    console.log("Input Three: " + userInputThree);

    var calc = userInput + userInputTwo + userInputThree;

    console.log("Calculation: " + userInput + " + " + userInputTwo + " + " + userInputThree)

    document.getElementById("userInputDis").innerHTML = userInput + " +  " + userInputTwo + " +  " + userInputThree + " = " + (userInput + userInputTwo + userInputThree);

};

// END Challenge Six

// START Challenge Seven - Create a two variables with the same name, one global and one local & display them.
var _eventListenerSix = document.getElementById("userInputB6").addEventListener("click", inputFunSix);

var golbalLocal = "Global";


document.getElementById("userInputDis").innerHTML = "Global variable: " + golbalLocal;

console.log(golbalLocal);

function inputFunSix() {
    console.log(golbalLocal);

    var golbalLocal = "Local";

    console.log(golbalLocal);

    document.getElementById("userInputDisTwo").innerHTML = "Local variable: " + golbalLocal;
    // NB: We are defining two seperate varialbles here, one global, one local. If you don't use the var keyword to define the local variable it will overwrite the global one when the function is run.You can't redefine global variables to be used only locally
};

inputFunSix();

console.log(golbalLocal);

document.getElementById("userInputDisThree").innerHTML = "Global variable: " + golbalLocal;
// END Challenge Seven

// START Challenge Eight - Collect 2 user inputs and display in text whether they are the same or different.

var _eventListenerSeven = document.getElementById("userInputB7").addEventListener("click", inputFunSeven);

function inputFunSeven() {

    var userInput = parseInt(document.getElementById("userInput").value);

    var userInputTwo = parseInt(document.getElementById("userInputTwo").value);

    console.log(userInput);
    console.log(userInputTwo);

    var output = "Different"

    if (userInput == userInputTwo) {
        output = "Same"
    }
    document.getElementById("userInputDis").innerHTML = output;

};

// END Challenge Eight

// START Advanced Challenge One

var _eventListenerAdOne = document.getElementById("ageBut").addEventListener("click", calcAge);

function calcAge() {

    var age = new Date(document.getElementById("dateOfBirth").value);

    var today = new Date();

    var inputDate = new Date(document.getElementById("otherDate").value);

    var timeDiff = Math.abs(today.getTime() - age.getTime());
    var diffYears = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

    var otherTimeDiff = Math.abs(inputDate.getTime() - age.getTime());
    var otherDiffYears = Math.floor((otherTimeDiff / (1000 * 3600 * 24) / 365));
    var otherDiffYearsCheck = Math.ceil((otherTimeDiff / (1000 * 3600 * 24) / 365));


    if (otherDiffYearsCheck <= 0) {
        otherDiffYears = "You weren't born!"
    }

    document.getElementById("ageDis").innerHTML = "Current Age: " + diffYears;
    document.getElementById("otherAgeDis").innerHTML = "Requested Age: " + otherDiffYears;

}

//---------------------------DAY 2------------------------------------------------------------------------------------------------------------------------------------------------

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

    document.getElementById("userInputDisFour").innerHTML += number + " "

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
        document.getElementById("userInputDisFive").innerHTML += oddEven + ": Even ";
    }
    // % is Modulus, it will find the remainder after one number is divided by another, so in this example we are checking if the remainder when our number is divided by 2 is equal to 0. Every even number has 2 as a factor and no odd numbers do.
    else {
        document.getElementById("userInputDisFive").innerHTML += oddEven + ": Odd ";
    }
}

// END Challenge Two

// START Challenge Three - Collect user input and display on the webpage if the number is less than 10, more than 10 or a negative

var _eventListenerEight = document.getElementById("userInputB8").addEventListener("click", inputFunEight);

function inputFunEight() {
    var inputNum = document.getElementById("userInputFour").value;

    if (inputNum < 10 && inputNum < 0) {
        document.getElementById("userInputDisEight").innerHTML = inputNum + " is less than 10, is a negative & isn't greater than 10";
    } else if (inputNum < 10) {
        document.getElementById("userInputDisEight").innerHTML = inputNum + " is less than 10, isn't a negative & isn't greater than 10";
    } else if (inputNum > 10) {
        document.getElementById("userInputDisEight").innerHTML = inputNum + " isn't less than 10, isn't a negative, & is greater than 10";
    } else {
        document.getElementById("userInputDisEight").innerHTML = inputNum + " isn't less than 10, isn't a negative & isn't greater than 10";
    }
};

// END Challenge Three

// START Challenge Four - Collect 2 numbers from the user and display on the web page if one or both of them are greater than 10

var _eventListenerNine = document.getElementById("userInputB9").addEventListener("click", inputFunNine);

function inputFunNine() {
    var inputNumOne = document.getElementById("userInputFour").value;
    var inputNumTwo = document.getElementById("userInputFive").value;

    if (inputNumOne > 10 && inputNumTwo > 10) {
        document.getElementById("userInputDisEight").innerHTML = "Both " + inputNumOne + " & " + inputNumTwo + " are greater than 10";
    } else if (inputNumOne > 10) {
        document.getElementById("userInputDisEight").innerHTML = inputNumOne + " is greater than 10, " + inputNumTwo + " is not";
    } else if (inputNumTwo > 10) {
        document.getElementById("userInputDisEight").innerHTML = inputNumTwo + " is greater than 10," + inputNumOne + " is not";
    } else {
        document.getElementById("userInputDisEight").innerHTML = "Neither " + inputNumOne + " nor " + inputNumTwo + " are greater than 10";
    }
}

// END Challenge Four

// START Challenge Five - Create a nested loop that displays 2 sequences of numbers form 1-10 with one sequence nested inside the other

var _eventListenerTen = document.getElementById("userInputB10").addEventListener("click", inputFunTen);

function inputFunTen() {
    var nestOne;
    var nestTwo = 1;
    // Need to define the variable for the second sequence outside the loop as otherwise it will iterate through the second loop for each iteration of the first loop
    for (nestOne = 1; nestOne <= 10; nestOne += 1) {
        document.getElementById("userInputDisEight").innerHTML += nestOne + " ";
        for (nestTwo; nestTwo <= 10; nestTwo += 1) {
            document.getElementById("userInputDisNine").innerHTML += nestTwo + " ";
        }
    }
}

// END Challenge Five

// START Advanced Challenge One - Mark Checker

var _eventListenerEleven = document.getElementById("userInputB11").addEventListener("click", inputFunEleven);
var classMarks = [];

function inputFunEleven() {
    var mark = document.getElementById("userInputFive").value;
    var student = document.getElementById("userInputFour").value;
    if (mark >= 90 && mark <= 100) {
        document.getElementById("userInputDisEight").innerHTML = "Student " + student + ": " + mark + " - Distinction";
        classMarks.push(" Student " + student + ": " + mark + " - Distinction");
    } else if (mark >= 75 && mark < 90) {
        document.getElementById("userInputDisEight").innerHTML = "Student " + student + ": " + mark + " - Merit";
        classMarks.push(" Student " + student + ": " + mark + " - Merit");
    } else if (mark >= 60 && mark < 75) {
        document.getElementById("userInputDisEight").innerHTML = "Student " + student + ": " + mark + " - Pass";
        classMarks.push(" Student " + student + ": " + mark + " - Pass");
    } else if (mark > 100 || mark < 0) {
        document.getElementById("userInputDisEight").innerHTML = "Invalid Mark";
    } else {
        document.getElementById("userInputDisEight").innerHTML = "Student " + student + ": " + mark + " - Fail";
        classMarks.push(" Student " + student + ": " + mark + " - Fail");
    }

}
var _eventListenerElevenTwo = document.getElementById("userInputB112").addEventListener("click", inputFunElevenTwo);

function inputFunElevenTwo() {
    document.getElementById("userInputDisNine").innerHTML = classMarks;
};


//var _eventListenerFour = document.getElementById("userInputB4").addEventListener("click", inputFunFour);
//var student = 1;
//function inputFunFour() {
//    var mark = document.getElementById("userInput").value;
//    if (mark >= 90 && mark <= 100) {
//        document.getElementById("userInputDisEight").innerHTML += "Student " + student + ": " + mark + " - Distinction " + "<br>";
//        student += 1;
//    } else if (mark >= 75 && mark < 90) {
//        document.getElementById("userInputDisEight").innerHTML += "Student " + student + ": " + mark + " - Merit " + "<br>";
//        student += 1;
//    } else if (mark >= 60 && mark < 75) {
//        document.getElementById("userInputDisEight").innerHTML += "Student " + student + ": " + mark + " - Pass " + "<br>";
//        student += 1;
//    } else if (mark > 100 || mark < 0) {
//        document.getElementById("userInputDisEight").innerHTML += "Invalid Mark " + "<br>";
//    } else {
//        document.getElementById("userInputDisEight").innerHTML += "Student " + student + ": " + mark + " - Fail " + "<br>";
//        student += 1;
//    }
//}

//function inputFunFour() {
//
//    var mark = document.getElementById("userInput").value;
//
//        if (mark >= 90 && mark <= 100) {
//        document.getElementById("userInputDisEight").innerHTML += mark + " - Distinction ";
//    } else if (mark >= 75 && mark < 90) {
//        document.getElementById("userInputDisEight").innerHTML += mark + " - Merit ";
//    } else if (mark >= 60 && mark < 75) {
//        document.getElementById("userInputDisEight").innerHTML +=mark + " - Pass ";
//    } else if (mark > 100 || mark <0) {
//        document.getElementById("userInputDisEight").innerHTML += "Invalid Mark ";
//    } else {
//        document.getElementById("userInputDisEight").innerHTML += mark + " - Fail ";
//    }
//}

// END Advanced Challenge One

// SYNTAX FOR A WHILE LOOP

// while(condition) {code the executes if the condition is true}

//When the number of iterations is unknown we use the while loop (for loop if known)

var houses = 0;

console.log("Start of the while loop")
while (houses <= 10) {
    console.log("Current number of Houses: " + houses);
    houses += 1;
    // This stops this being an infinite loop
}

console.log("End of the while loop")


// START Challenge Six - Create a While Loop that displays the numbers 1 to 10 on the webpage


var whileTest = 1;

while (whileTest <= 10) {
    document.getElementById("userInputDisSix").innerHTML += whileTest + " ";
    whileTest += 1;
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
do {
    console.log("Current number of Homes: " + homes)
    homes += 1;
} while (homes == 1);
console.log("End of the do while loop")

// homes starts at 0 so when the 1st loop is executed it looks at the condition and finds homes = 1, it will then execute a 2nd iteration of the loop, however when it reaches the condition again homes != 1 therefore it does not execute a 3rd loop

// START Challenge Seven - Create a do While Loop that displays the numbers 1 to 10 on the webpage

var doWhileTest = 1;

do {
    document.getElementById("userInputDisSeven").innerHTML += doWhileTest + " ";
    doWhileTest += 1;
} while (doWhileTest <= 10);

//END Challenge Seven

// START Advanced Challenge Two - Number Game

var _eventListenerGame = document.getElementById("startBtn").addEventListener("click", gameStart);

function gameStart() {
    document.getElementById("resultGuess").innerHTML = ""
    document.getElementById("compareResult").innerHTML = ""
    //document.getElementById("btn2").disabled = false;
    //document.getElementById("guess").disabled = false;


    var randNumber = Math.ceil(Math.random() * 100)
    console.log(randNumber)
    var success = false;
    var _eventListenerReset = document.getElementById("btn2").addEventListener("click", checkGuess);
    var guessNumber = 0;

    function checkGuess() {
        var guess = parseInt(document.getElementById("guess").value)

        if (guess == randNumber) {
            if (success == true) {
                guessNumber -= 1;
            }
            guessNumber += 1;
            document.getElementById("resultGuess").innerHTML = "Well Done - Correct Guess!"

            document.getElementById("compareResult").innerHTML = "The Random Number was: " + randNumber + " <br>Number of Guesses: " + guessNumber;
            success = true;
            //        document.getElementById("btn2").disabled = true;
            //        document.getElementById("guess").disabled = true;
        } else if (guess > randNumber && guess <= 100) {
            guessNumber += 1;
            document.getElementById("resultGuess").innerHTML = "Too High!" + " <br>Number of guesses: " + guessNumber;

        } else if (guess < randNumber && guess >= 1) {
            guessNumber += 1;
            document.getElementById("resultGuess").innerHTML = "Too Low!" + " <br>Number of guesses: " + guessNumber;

        } else if (guess < 1 || guess > 100) {
            guessNumber += 1;
            document.getElementById("resultGuess").innerHTML = "Out of Range, Guess between 1 & 100!" + " <br>Number of guesses: " + guessNumber;

        }

    }
}

// END Advanced Challenge Two

//-------------------------------------DAY 3 -------------------------------


//SYNTAX FOR SWITCH STATEMENTS

// switch(expression){
//case condition1: statement;
//break; Need to add a break so that once the condition is met then the switch statement doesn't keep iterating through the conditions.
//case condition2: statement;
//break;
//case condition3: statement;
//break;
//default: statement; Default gives feedback if none of the conditions are met
//}

var bankBalance = 100000;

console.log("Switch statement start")
switch (bankBalance) {
    case 0:
        console.log("You're broke!");
        break;
    case 1000:
        console.log("Better save up!");
        break;
    case 10000:
        console.log("Thats better!");
        break;
    case 100000:
        console.log("Doing pretty good huh!");
        break;
    default:
        console.log("Nothing Special");
}
console.log("Switch statment end")


// To enter a breakpoint in code go to console and click on the line you want to break the code at, code will run until that point

//SWITCH EG

var _eventListenerTwelve = document.getElementById("userInputB12").addEventListener("click", inputFunTwelve);

function inputFunTwelve() {

    var today = new Date();
    // new keyword initialises an inbuilt method/function that we haven't declared within our code
    console.log(today);
    //initialising a variable showing todays date
    var _date = today.getDate();
    console.log(_date);
    //initialising a variable extracting the date in a numerical format
    //use _date as the name to avoid confusion with the Date object in js
    var month = today.getMonth();
    console.log(month);
    //initialising a variable extracting the month in a numerical format
    var day = today.getDay();
    console.log(day);
    //initialising a variable extracting the day of the week in a numerical format
    var hour = today.getHours();
    console.log(hour);
    //initialising a variable extracting the hour in a numerical format
    var minute = today.getMinutes();
    console.log(minute);
    //initialising a variable extracting the minute in a numerical format
    var second = today.getSeconds();
    console.log(second);
    //initialising a variable extracting the second in a numerical format
    var time = hour + ":" + minute + ":" + second;
    console.log(time);
    //create a time variable here to cut down on repetition in the switch statement

    if (_date == 2 || _date == 22) {
        _date += "nd "
    } else if (_date == 3 || _date == 23) {
        _date += "rd "
    } else if (_date == 1 || _date == 21 || _date == 31) {
        _date += "st "
    } else {
        _date += "th "
    }
    console.log(_date)

    var dayText;

    switch (day) {
        case 0:
            dayText = "Sunday ";
            break;
        case 1:
            dayText = "Monday ";
            break;
        case 2:
            dayText = "Tuesday ";
            break;
        case 3:
            dayText = "Wednesday ";
            break;
        case 4:
            dayText = "Thursday ";
            break;
        case 5:
            dayText = "Friday ";
            break;
        case 6:
            dayText = "Saturday ";
            break;
        default:
            console.log("Technical Error");
            // For a default in a case like this where there should never be a need for one use terminoligy like technical error as this is the only case the defualt will be executed
    }

    var monthText;

    switch (month) {
        case 0:
            monthText = " Dec ";
            break;
        case 1:
            monthText = " Jan ";
            break;
        case 2:
            monthText = "Feb ";
            break;
        case 3:
            monthText = "Mar ";
            break;
        case 4:
            monthText = " Apr ";
            break;
        case 5:
            monthText = " May ";
            break;
        case 6:
            monthText = " Jun ";
            break;
        case 7:
            monthText = " Jul ";
            break;
        case 8:
            monthText = " Aug ";
            break;
        case 9:
            monthText = " Sep ";
            break;
        case 10:
            monthText = " Oct ";
            break;
        case 11:
            monthText = " Nov ";
            break;
        default:
            console.log("Technical Error");
    }
    document.getElementById("userInputDisTen").innerHTML = "Today is: " + dayText + _date + monthText + time;
}

//timeNow(); // Run the function
//setInterval(timeNow, 1000) //Reloads the specified function again every 1000 miliseconds ie this will update the clock every 1000 miliseconds aka every second

//SYNTAX FOR ARRAYS

//Arrays are a collection of things

var students = new Array(3) // This allows you to set length before adding any items
var students1 = ["Archie", "Cian", "Henry"] // Best Practice - less code

console.log(students);
console.log(students1);

var randArrayTypes = [1, false, "Words", {
    _name: "Student Name"
}, function (_parameter) {
    var _greeting = "Good Morning ";
    console.log(_greeting + _parameter)
}] //number, boolean, string, object, function - no restriction of datatypes
// first element is always listed at 0 so 1 = [0] false = [1] "Words" = [2] {} = [3] function(){} = [4]

console.log(randArrayTypes);
console.log(randArrayTypes[1]); //Should be false
randArrayTypes[4]("Name"); // Function at postion 4 is taking a parameter from outside the string and then running
randArrayTypes[4](randArrayTypes[2]); // Function at postion 4 is taking a parameter from the string at position 2 and then running
randArrayTypes[4](randArrayTypes[3]._name); // So here the function at position 4 is taking a parameter from the object at postion 3 and then running. We need to use ._name to use the object


// START Challenge One - Collect 3 user inputs and allocate them to three members of a new array. Display on webpage

var _eventListenerThirteen = document.getElementById("userInputB13").addEventListener("click", inputFunThirteen);

function inputFunThirteen() {
    var arrayOne = []

    var firstInput = document.getElementById("userInputSix").value;
    var secondInput = document.getElementById("userInputSeven").value;
    var thirdInput = document.getElementById("userInputEight").value;

    arrayOne.push(firstInput, secondInput, thirdInput)

    document.getElementById("userInputDisEleven").innerHTML = arrayOne;

}

// END Challenge One

// START Challenge Two - Collect a user input and allocate it to a new array using the push method, display the array and the length of the array using array.length on the webpage

var _eventListenerFourteen = document.getElementById("userInputB14").addEventListener("click", inputFunFourteen);
var arrayTwo = [];
// To ensure the array remembers the input it needs to be declared globally
function inputFunFourteen() {


    var fourthInput = document.getElementById("userInputSix").value;
    arrayTwo.push(fourthInput)

    document.getElementById("userInputDisEleven").innerHTML = arrayTwo + " Length: " + arrayTwo.length;
}

// END Challenge Two

// START Challenge Three - Add & Remove first and last elements on and off an array using shift, unshift, push and pop methods

var arrayThree = ["Default", "Values"]

var _eventListenerFifteen = document.getElementById("userInputB15").addEventListener("click", inputFunFifteen);

function inputFunFifteen() {
    var pushInput = document.getElementById("userInputSix").value;
    arrayThree.push(pushInput)

    document.getElementById("userInputDisEleven").innerHTML = arrayThree + " Length: " + arrayThree.length;
}

var _eventListenerSixteen = document.getElementById("userInputB16").addEventListener("click", inputFunSixteen);

function inputFunSixteen() {
    arrayThree.pop();
    document.getElementById("userInputDisEleven").innerHTML = arrayThree + " Length: " + arrayThree.length;
}

var _eventListenerSeventeen = document.getElementById("userInputB17").addEventListener("click", inputFunSeventeen);

function inputFunSeventeen() {
    var unshiftInput = document.getElementById("userInputSix").value;
    arrayThree.unshift(unshiftInput)

    document.getElementById("userInputDisEleven").innerHTML = arrayThree + " Length: " + arrayThree.length;
}

var _eventListenerEighteen = document.getElementById("userInputB18").addEventListener("click", inputFunEighteen);

function inputFunEighteen() {
    arrayThree.shift()
    document.getElementById("userInputDisEleven").innerHTML = arrayThree + " Length: " + arrayThree.length;
}

// END Challenge Three

// START Challenge Four - Add to an array at a specific index point in the array
var _eventListenerNineteen = document.getElementById("userInputB19").addEventListener("click", inputFunNineteen);
var arrayFour = ["Default", "Values"];

function inputFunNineteen() {
    var spliceInput = document.getElementById("userInputSix").value;
    arrayFour.splice(1, 0, spliceInput);
    document.getElementById("userInputDisEleven").innerHTML = arrayFour + " Length: " + arrayFour.length;

}



// END Challenge Four

// START Challenge Five - Create an array variable with 10 elements and using a for loop display each element on the webpage

var _eventListenerTwenty = document.getElementById("userInputB20").addEventListener("click", inputFunTwenty);
var arrayFive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function inputFunTwenty() {

    for (i = 0; i < arrayFive.length; i += 1) {
        document.getElementById("userInputDisEleven").innerHTML += arrayFive[i] + " ";
    }
}

// END Challenge Five

// START Challenge Six - Create an array of Countries, create a user text input field, user can enter a country. The array is searched and when a match is found the position in the array is displayed adn the user is given a message to inform whether the country is present in the array or not

var _eventListenerTwentyOne = document.getElementById("userInputB21").addEventListener("click", inputFunTwentyOne);
var arrayCountries = ["England", "France", "Wales", "Ireland", "Scotland", "Italy", "New Zealand", "Australia", "South Africa", "Argentina"];

function inputFunTwentyOne() {
    var country = document.getElementById("userInputSix").value;

    if (arrayCountries.indexOf(country) >= 0) {
        document.getElementById("userInputDisEleven").innerHTML = country + " is present! It is at position: [" + arrayCountries.indexOf(country) + "]";
    } else {
        document.getElementById("userInputDisEleven").innerHTML = country + " is not present!"
    }
}

// END Challenge Six


// START Advanced Challenge One - Array Project - Random Winner

var _eventListenerTwentyTwo = document.getElementById("userInputB22").addEventListener("click", addName);

var contestants = [];

function addName() {

    var _name = document.getElementById("userInputNine").value;
    contestants.push(_name)
    document.getElementById("userInputDisTwelve").innerHTML = contestants;
};

var _eventListenerTwentyThree = document.getElementById("userInputB23").addEventListener("click", generateWinner);

function generateWinner() {

    winnerNumber = Math.floor(Math.random() * contestants.length);

    document.getElementById("userInputDisThirteen").innerHTML = contestants[winnerNumber];

}

// END Advanced Challenge One


// START Advanced Challenge Two - Interest Only Calculator

var _eventListenerTwentyFour = document.getElementById("userInputB24").addEventListener("click", calculateInterest);

function calculateInterest() {

    var loan = document.getElementById("userInputTen").value;
    var interestRate = document.getElementById("userInputEleven").value / 100;
    var loanLength = document.getElementById("userInputTwelve").value;
    // Validation to ensure the fields are filled in
    if (loan == "" || interestRate == "" || loanLength == "" ) {
        //alert("Please fill in all the fields") Only needed if using a button to initialise the calculation
        document.getElementById("userInputDisFourteen").innerHTML = ""; //Only needed when using onkeyup
    } else {
    var interestTotal = (loan * interestRate) * (loanLength / 12)
    interestTotal = interestTotal.toFixed(2);
    //.toFixed(2) will limit the number to 2 decimal places
    document.getElementById("userInputDisFourteen").innerHTML = "£" + interestTotal;
}

}

// END Advanced Challenge Two
