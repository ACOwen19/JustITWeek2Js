/* THIS IS MY OOP PRACTICE JS FILE */


/*function personDetails(name, city) {

	console.log("My name is " + name + " and I live in " + city + ".");

	document.getElementById("display").innerHTML = "My name is " + name + " and I live in " + city + ".";

}

personDetails("Sajin", "London");
personDetails("Nav", "Lewisham");*/

//Let's create an object to structure our data


/*
var person = {

	name: "Max",
	city: "Grove Park",
	personData: function() {

	console.log("My name is " + person.name + " and I live in " + person.city + ".");	document.getElementById("display").innerHTML = "My name is " + person.name + " and I live in " + person.city + ".";

	}
};

console.log(typeof(person));

person.personData();

console.log(person.name);
console.log(person.city);
*/

//Now we are going to build our CONSTRUCTOR

/*var ourPeople= [];

function People(fullName, location) {

	this.name = fullName;
	this.city = location;

	ourPeople.push(this.name);
	ourPeople.push(this.city);

	//This is Kit idea great!!!!
	ourPeople.push([this.name, this.city]);

	this.personData = function() {

		console.log("My name is " + this.name + " and I live in " + this.city + ".");	document.getElementById("display").innerHTML += "My name is " + this.name + " and I live in " + this.city + "." + "<br>";
	}

}

var Panna = new People("Panna G", "Paris");
var Peter = new People("Peter M", "Tokyo");

Panna.personData();



console.log(ourPeople);*/


/* -------------------------------------------------


		THIS IS JSON JAVASCRIPT DEMO


------------------------------------------------- */

/*var car = {

	"model": "Audi",
	"price": 2500,
	"fuel": "Petrol"
}

console.log(car.model);

var f1Drivers = ["Lewis", "Kimi", "Alonso"];

console.log(f1Drivers[2]);*/

/*{

	"data": [

		{

			"car": "Mercedes",
			"driver": "Lewis",
			"wins": 2
		},
		{
			"circuit": "Monaco",
			"pointSystem": [
				{
					"firstPlace": 25,
					"secondPlace": 18,
					"thirdPlace": 15
				}
			],
			"teams": 11
		}
	]
}

console.log(f1.data[1].pointSystem[0].thirdPlace);*/



/* -------------------------------------------------

		JAVASCRIPT ARRAYS

------------------------------------------------- */

//Creating a new ARRAY CONSTRUCTOR

/*var myList = new Array();
var myList = new Array(10, 2, 4);

console.log(myList);

document.getElementById("display").innerHTML = "<h1>" + myList + "</h1>";*/

//Creating a new ARRAY LITERAL;

/*var myList = []; //empty array
var myList = [1, 2, 3, 4];

console.log(myList);

document.getElementById("display").innerHTML = "<h1>" + myList + "</h1>";*/



// Do not just insert any index number to an array to add an element

/*var myList = [1, 2, 3, 4];

myList[4] = 77; // will add 77 to last element of the array

myList[12] = 77; // will create 8 empty elements

console.log(myList);

document.getElementById("display").innerHTML = "<h1>" + myList + "</h1>";*/


//Arrays are actually just objects in JS

/*var myList = [1, 2, 3, 4];

myList["cool"] = "Zlatan is a cool player"; //arrays will show elements as propertis of an object

console.log(myList);

document.getElementById("display").innerHTML = "<h1>" + myList + "</h1>";*/

//Adding elements into the array using push()

/*var myFamily = ["Biato", "Julia"];

myFamily.push("Tony", "Marta", 2);


console.log(myFamily);

document.getElementById("display").innerHTML = "<h1>" + myFamily + "</h1>";*/

//Now let's use the shift() and unshift() methods

/*var myBigFamily = ["Dad", "Uncle", "Me"];

myBigFamily.unshift("Dad's GF"); //Adds elements at the beginning of the array

myBigFamily.shift(); //Removes an element at the beginning of the array

var theLenght = myBigFamily.length;

console.log(theLenght);
console.log(myBigFamily);

document.getElementById("display").innerHTML = "<h1>" + myBigFamily + "</h1>";*/

//If I want to find the index of an element in a array I going to use th indexOf() method

/*var myList = [1, 2, 3, 4, 1, 3].indexOf(3,3); //you need to enter the second element to get the index value

console.log(myList);

document.getElementById("display").innerHTML = "<h1>" + myList + "</h1>";*/

//Slicing an array with the slice() method, that removes elements in front of the array.

/*var myGFs = ["Michu", "Doreen", "Wendy", "Lisa", "Caroline", "Urika"];

myGFs.slice(2);

console.log(myGFs.slice(2,4));

document.getElementById("display").innerHTML = "<h1>" + myGFs.slice(2,4) + "</h1>";*/


//Splice an array with the splice() method, that removes elements in front of the array.

/*var myGFs = ["Michu", "Doreen", "Wendy", "Lisa", "Caroline", "Urika"];

myGFs.splice(2,2);

console.log(myGFs);

document.getElementById("display").innerHTML = "<h1>" + myGFs + "</h1>";*/

//JS includes 5 build in methods: forEach(), map(), filter(), some(), and every() - they all have similar syntax structure and most hold 3 parameter which are element, index and the array

/*var myList = [1, 2, 3, 4].forEach(function(el, idx, arr) {

	var justT = el+10;

	console.log(justT);

	document.getElementById("display").innerHTML += "<h1>" + justT + "</h1>";

});*/

/*var myArray = [10, 20, "hello", {}, 7];

var myFunction = function(item) {

	console.log("For an element " + item );

	document.getElementById("display").innerHTML += "<h1>" + item + "</h1>";
}

myArray.forEach(myFunction);*/



//The map()

/*var myArray = [1, 2, 3, 4].map(function(el, idx, arr) {

	return el*el; // is multiplying every element by itself
});

	console.log(myArray);
	document.getElementById("display").innerHTML += "<h1>" + myArray + "</h1>";*/

//The some()

/*var myArray = [1, 2, 3, 4].some(function(el, idx, arr) {

	return el>2; // the condition will return true of false is a boolean


});

	console.log(myArray);
	document.getElementById("display").innerHTML += "<h1>" + myArray + "</h1>";*/

//The every()

/*var myArray = [1, 2, 3, 4].every(function(el, idx, arr) {

	return el>2; // the condition will return true of false is a boolean but is checking every element in the array


});

	console.log(myArray);
	document.getElementById("display").innerHTML += "<h1>" + myArray + "</h1>";*/

//The reduce()

var myArray = [1, 2, 3, 4].reduce(function(sum, el, idx, arr) {

	return sum + el; //Adds all the elements in the array


}, 20); // the 20 will be added to the totla the the sum of array

	console.log(myArray);
	document.getElementById("display").innerHTML += "<h1>" + myArray + "</h1>";








