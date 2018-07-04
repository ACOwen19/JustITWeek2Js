//console.log("File Linked")

function timeNow() {

    var today = new Date();
    // new keyword initialises an inbuilt method/function that we haven't declared within our code
    console.log(today);
    //initialising a variable showing todays date
    var _date =today.getDate();
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

if(_date == 2 || _date == 22){
    _date += "nd "
}
else if(_date == 3 || _date == 23){
    _date += "rd "
}
else if(_date == 1|| _date == 21 || _date == 31) {
    _date += "st "
}
else{
    _date += "th "
}
    console.log(_date)

var dayText;

    switch(day){
        case 0: dayText = "Sunday ";
            break;
        case 1: dayText = "Monday ";
            break;
        case 2: dayText = "Tuesday ";
            break;
        case 3: dayText = "Wednesday ";
            break;
        case 4: dayText = "Thursday ";
            break;
        case 5: dayText = "Friday ";
            break;
        case 6: dayText = "Saturday ";
            break;
        default: console.log("Technical Error");
            // For a default in a case like this where there should never be a need for one use terminoligy like technical error as this is the only case the defualt will be executed
                            }

    var monthText;

    switch(month){
        case 0: monthText = " Dec ";
            break;
        case 1: monthText = " Jan ";
            break;
        case 2: monthText = "Feb ";
            break;
        case 3: monthText = "Mar ";
            break;
        case 4: monthText = " Apr ";
            break;
        case 5: monthText = " May ";
            break;
        case 6: monthText = " Jun ";
            break;
        case 7: monthText = " Jul ";
            break;
        case 8: monthText = " Aug ";
            break;
        case 9: monthText = " Sep ";
            break;
        case 10: monthText = " Oct ";
            break;
        case 11: monthText = " Nov ";
            break;
        default: console.log("Technical Error");
                            }
document.getElementById("display").innerHTML = "Today is: " + dayText + _date + monthText + time;
}

timeNow(); // Run the function
setInterval(timeNow, 1000) //Reloads the specified function again every 1000 miliseconds ie this will update the clock every 1000 miliseconds aka every second

