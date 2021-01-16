// Assignment Codes
var start = document.querySelector("#start");
var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var multi = document.querySelector("#multi");

// Added event listener to start quiz button
start.addEventListener("click", startQuiz);

// Create section element for buttons
var btnSection = document.createElement("section");

//create buttons
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");

// sets class attribute to buttons
btn1.classList.add("btn");
btn2.classList.add("btn");
btn3.classList.add("btn");
btn4.classList.add("btn");

// variable to hold number of correct answers
var correctAnswers = 0;

// variable to hold number of incorrect answers
var incorrectAnswers = 0;

// variable to hold the time
var time = 60;

// object holds all questions as keys and answers as values
var qAndA = [

    {question1: "question1",
    choice1: "answer1",
    choice2: "answer2",
    choice3: "answer3",
    choice4: "answer4",
    correct: "answer3",
    },

    
    {question2: "Question2",
    answer1: "answer1",
    answer2: "answer2",
    answer3: "answer3",
    answer4: "answer4",
    correct: "answer2",
    },  

    {question3: "Questions3",
    answer1: "answer1",
    answer2: "answer2",
    answer3: "answer3",
    answer4: "answer4",
    correct: "answer4",
    },

    {question4: "questions4",
    answer1: "answer1",
    answer2: "answer2",
    answer3: "answer3",
    answer4: "answer4",
    correct: "answer1",
    },

    {question5: "questions5",
    answer1: "answer1",
    answer2: "answer2",
    answer3: "answer3",
    answer4: "answer4",
    correct: "answer4",
    }
];

// function quiz() {

//     alert("hi")
//     document.getElementsById("start").style.display = "none";

// }

function startQuiz() {

    // Hides the content on page once start quiz button is pressed
    multi.remove();
    start.remove();

    // replaces h1 tag with questions
    question.innerHTML = Object.keys(qAndA);

    // appends an ordered list and list items for the multiple choice answers
    answers.appendChild(btnSection);
    btnSection.appendChild(btn1);
    btnSection.appendChild(btn2);
    btnSection.appendChild(btn3);
    btnSection.appendChild(btn4);

    // var quiz = quiz();

    // var timer = startTimer();

}