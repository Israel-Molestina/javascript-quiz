// Assignment Codes
var start = document.querySelector("#start");
var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var hide = document.querySelector("#hide");
var multi = document.querySelector("#multi");

// Added event listener to start quiz button
start.addEventListener("click", startQuiz);

// Creates h1 tag for the questions
var h1 = document.createElement("h1");

// Create ordered list element
var listOl = document.createElement("ol");

//create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1.textContent = "first question";
h1.setAttribute("style", "col-sm-9 text-center display-3");

// variable to hold number of correct answers
var correctAnswers = 0;

// variable to hold number of incorrect answers
var incorrectAnswers = 0;

// variable to hold the time
var time = 60;

// object holds all questions as keys and answers as values
var questionsAndAnswers = {

    "question1": [
        "answer1",
        "answer2",
        "answer3",
        "answer4"
    ],

    "question2": [
        "answer1",
        "answer2",
        "answer3",
        "answer4"
    ],

    "question3": [
        "answer1",
        "answer2",
        "answer3",
        "answer4"
    ],

    "question4": [
        "answer1",
        "answer2",
        "answer3",
        "answer4"
    ],
    
}

function quiz() {

    alert("hi")
    document.getElementsById("start").style.display = "none";
}

function startQuiz() {

    // Hides the content on page once start quiz button is pressed
    hide.style.display = "none";
    start.style.display = "none";
    multi.style.display = "none";

    // appends h1 tag for question
    question.appendChild(h1);


    // appends an ordered list and list items for the multiple choice answers
    answers.appendChild(listOl);
    listOl.appendChild(li1);
    listOl.appendChild(li2);
    listOl.appendChild(li3);
    listOl.appendChild(li4);



    

    // var quiz = quiz();

    // var timer = startTimer();

}