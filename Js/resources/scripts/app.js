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

    document.getElementById("userInputDisTwo").innerHTML  = "Local variable: " + golbalLocal;
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

function calcAge (){

var age = new Date(document.getElementById("dateOfBirth").value);

var today = new Date();

var inputDate = new Date(document.getElementById("otherDate").value);

var timeDiff = Math.abs(today.getTime() - age.getTime());
var diffYears = Math.floor((timeDiff / (1000 * 3600 * 24))/365);

var otherTimeDiff = Math.abs(inputDate.getTime() - age.getTime());
var otherDiffYears = Math.floor((otherTimeDiff / (1000 * 3600 * 24)/365));
var otherDiffYearsCheck = Math.ceil((otherTimeDiff / (1000 * 3600 * 24)/365));


    if (otherDiffYearsCheck <=0) {
        otherDiffYears = "You weren't born!"
    }

document.getElementById("ageDis").innerHTML = "Current Age: " + diffYears;
document.getElementById("otherAgeDis").innerHTML = "Requested Age: " + otherDiffYears;

}
