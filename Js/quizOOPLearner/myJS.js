//This is my main JS



function Quiz(question, show_default, answer1, answer2, answer3, answer4, the_answer) {

    this.question = question;
    this.show_default = show_default;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.the_answer = the_answer;
}

// Object constructor


//My JS code starts here

var lessonsIndex;

var lessons = document.getElementsByName("lessonsN");

// lesssons & lessonsIndex are used to drive the for loop that contains the quiz and initialises it when the button is pressed. Use a for loop so tha multiple quizs can be created. (Could also do with an event listener).

for (var i = 0; i < lessons.length; i++) {

    lessons[i].onclick = function(e) {
        //.onclick = function(e) is short for function(event) so in this case, this is when the button is clicked
        // Value of the button linked to lessons is 1 so this.value is 1, therefore lessonsIndex will be 1 after it is set equal to this.value
        // For multiple quizes the value of the button would be changed but the name ("lessonsN") wouldn't be changed so the value of lessonsIndex would change & you would proceed with the selected quiz
    lessonsIndex = this.value;
    console.log(lessonsIndex);

    var get_title = document.getElementById("q" + this.value + "_title").innerHTML;
    // The element its looking for q1_title in this case
    document.getElementById("qAll_title").innerHTML = get_title + " Quiz";
    // Displays the quiz title ("HTML5 Quiz")
    document.getElementById("qAll_questions").className = "hide";
    // Hides the all questions div by changing the class name to hide which has a css property of display: None
    document.getElementById("submit_answer").className = "submit_answer btn btn-primary";
    // Is this necessary? Already has this className
    document.getElementById("actual_quiz_all").className = "quiz_display show_it";
    // Unhides the quiz container (quiz_display has display: none, quiz_display show_it has display: block)
    document.getElementById("quiz_1_resp").innerHTML = "";

    document.getElementById("quiz_2_resp").innerHTML = "";
    // Sets the two answer response labels to blank


    console.log(lessonsIndex);

    //Starts the quiz to display the questions
    var start_quiz_btn = document.getElementById("start_quiz");
    //When you click the button do this finction
    start_quiz_btn.onclick = function() {

        document.getElementById("qAll_questions").className = "";
        //Unhides the quiz questions (previous class name has display:none)
        console.log(get_title);

        document.getElementById("quiz_1_resp").innerHTML = "";

        document.getElementById("quiz_2_resp").innerHTML = "";
        // Resets the answer response labels to blank, eg: if the quiz is restarted
        var clearCW = document.getElementsByName("tick");
        // tick refers to the title of each question - they have name=tick and class=tick, this is usimg the name
        for( var i = 0; i < clearCW.length; i++) {

            clearCW[i].innerHTML = "";
            // This will blank the title for each question, mostly relevent if switching quizzes
        }


        if(lessonsIndex == 1) {
            // this is how we would decide on multiple quizes, lessonsIndex would be set to different values for different quizes so by blanking everything above we allow the code below to populate the container.
            var question1 = new Quiz("What is a key benefit for using HTML5?",
                         "Choose an answer",
                         "It works with many different types of devices without alteration.",
                         "It introduces JavaScript to the development community.",
                         "It provides plug-ins for running video and audio.",
                         "It phases out hyperlinks with touch-screen capabilities.",
                         2
                        );
            // Using the Object construction (see top) to create new Quiz objects
var question2 = new Quiz("What version of HTML introduced CSS?",
                         "Choose an answer",
                         "HTML 3.2",
                         "HTML 4.0",
                         "XHTML",
                         "HTML5 ",
                         3
                        );

var question3 = new Quiz("Which of the following is used with the HTML5 &lt;video&gt; element to identify the location and file name of the media resource?",
                         "Choose an answer",
                         "The type attribute",
                         "The src attribute",
                         "The &lt;source&gt; element",
                         "The &lt;audio&gt; element",
                         3
                        );

var question4 = new Quiz("Which HTML5 structure element defines hypertext menus to access various pages of a Web site?",
                         "Choose an answer",
                         "&lt;header&gt;",
                         "&lt;article&gt;",
                         "&lt;aside&gt;",
                         "&lt;nav&gt;",
                         5
                        );

var question5 = new Quiz("What is one advantage that HTML5 APIs offer for modern Web design?",
                         "Choose an answer",
                         "They enable users to view Flash content on mobile devices.",
                         "They enable developers to create apps without any coding knowledge.",
                         "They enable older browsers to display any type of multimedia content. ",
                         "They enable users to view content such as multimedia without a plug-in.",
                         5
                        );

var question6 = new Quiz("The terms 'HTML5 family' and 'Web development trifecta' are sometimes used to refer to which combination of Web technologies?",
                         "Choose an answer",
                         "HTML5, CSS3 and JavaScript",
                         "HTML5, XML and CSS3",
                         "HTML5, JavaScript and Flash",
                         "HTML5, Flash and XML",
                         2
                        );

var question7 = new Quiz("Which HTML5 structure element was designed to enclose Web site content such as company services, blogs, images and videos?",
                         "Choose an answer",
                         "&lt;header&gt;",
                         "&lt;footer&gt;",
                         "&lt;article&gt;",
                         "&lt;aside&gt;",
                         4
                        );

var question8 = new Quiz("Which element introduced in HTML5 saves mobile device resources by avoiding the use of plug-ins to play MP4 files?",
                         "Choose an answer",
                         "&lt;embed&gt;",
                         "&lt;audio&gt;",
                         "&lt;doctype&gt;",
                         "&lt;video&gt;",
                         5
                        );

        }




//function questionsA() {

var quiz_c_question_list = [];

// Creates an array to hold the questions

quiz_c_question_list.push(question1);
quiz_c_question_list.push(question2);
quiz_c_question_list.push(question3);
quiz_c_question_list.push(question4);
quiz_c_question_list.push(question5);
quiz_c_question_list.push(question6);
quiz_c_question_list.push(question7);
quiz_c_question_list.push(question8);

// Pushes the new Quiz objects (questions) into the array

var list_questions = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8"];
var list_answers = ["questions_1", "questions_2", "questions_3", "questions_4", "questions_5", "questions_6", "questions_7", "questions_8"];
var list_inputs = ["question1_answer", "question2_answer", "question3_answer", "question4_answer", "question5_answer", "question6_answer", "question7_answer", "question8_answer"];
// Creating arrays to allow the for loop afterwards to itterate through populating the questions and answers

for (i = 0; i < quiz_c_question_list.length; i++) {
    document.getElementById(list_questions[i]).innerHTML = quiz_c_question_list[i].question;
    document.getElementById(list_answers[i]).innerHTML =
        "<option selected disabled>" + quiz_c_question_list[i].show_default + "</option>" +
        "<option>" + quiz_c_question_list[i].answer1 + "</option>" +
        "<option>" + quiz_c_question_list[i].answer2 + "</option>" +
        "<option>" + quiz_c_question_list[i].answer3 + "</option>" +
        "<option>" + quiz_c_question_list[i].answer4 + "</option>";
// look up option in html
// This will itterate through the questions, populating the questions and the answers
}



var check_answer = document.getElementById("submit_answer");
check_answer.addEventListener("click", correct_answer, false );
//Why False??????????????????????????????????????????????????????????????
function correct_answer() {

    var current_answer = 0;
    var score = 0;

    for (i = 0; i < quiz_c_question_list.length; i++) {
        current_answer = document.getElementById(list_answers[i]).selectedIndex + 1;
        // Sets current answer to be +1 on the index of the answer selector? Why??????????????????????????????
        console.log(current_answer);
        console.log(list_answers[i]);
        if (current_answer === 1) {
        document.getElementById("quiz_1_resp").innerHTML = "Please choose an answer(s) from the dropdown";
        }

        // Current answer 1 is index 0 which is the default option therefore if the question isn;t answered then the user will be prompted to answer and the quiz will not compute a score
        else {

        if(current_answer === quiz_c_question_list[i].the_answer) {
            score++;

            document.getElementById(list_inputs[i]).innerHTML = '<i class="correct">Correct</i>';
            // If the answer is correct increment the score and display that it is correct underneath the question, changing the class changes the css styling
        } else {

            document.getElementById(list_inputs[i]).innerHTML = '<i class="wrong">Wrong</i>';
            // If the answer is incorrect display that it is incorrect underneath the question, changing the class changes the css styling
        }


    var q2_get = document.getElementById("quiz_" + lessonsIndex);
    //console.log(lessonsIndex);
    var q2_correct_ans = q2_get.querySelector(".correct_incorrect");
            // ONLY RELEVENT FOR MULTIPLE QUIZS

        if (score === quiz_c_question_list.length) {
        q2_correct_ans.innerHTML = score + "/" + quiz_c_question_list.length + " correct answers";
        document.getElementById("quiz_1_resp").innerHTML = score + "/" + quiz_c_question_list.length + " correct answers ";

        document.getElementById("quiz_2_resp").innerHTML = "Well done! You have successfully tested your knowledge for this lesson, click the CLOSE BUTTON.";
    }
    else if (score > 0) {
        q2_correct_ans.innerHTML = score + "/" + quiz_c_question_list.length + " correct answers";
        document.getElementById("quiz_1_resp").innerHTML = score + "/" + quiz_c_question_list.length + " correct answers ";

        document.getElementById("quiz_2_resp").innerHTML = "Keep going! You should TRY AGAIN to get 8/8 correct answers or click the CLOSE BUTTON.";
    }
    else if (score === 0) {
        q2_correct_ans.innerHTML = "0/" + quiz_c_question_list.length + " correct answer";
        document.getElementById("quiz_1_resp").innerHTML = "0/" + quiz_c_question_list.length + " correct answer ";

        document.getElementById("quiz_2_resp").innerHTML = "Not good! You must revise the lesson or TRY THE QUIZ AGAIN, otherwise click the CLOSE BUTTON.";
    }
            // Displays how well the user completed the quiz & updates the display accordingly

    var calc = ((100 / quiz_c_question_list.length) * score).toFixed(0);
    var quiz_class = document.getElementById("quiz_score" + lessonsIndex);
    quiz_class.innerHTML = calc + "%";
        // Sets the % Display on the main page once the quiz is closed. NB This can't be seen when the quiz is open. Lessons index used so can apply to multiple quizzes

        }

    }

}

};

};


}

