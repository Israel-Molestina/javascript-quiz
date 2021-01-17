// Assignment Codes
var start = document.querySelector("#start");
var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var multi = document.querySelector("#multi");
var timer = document.querySelector("#time");

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

// variables to hold number of correct and incorrect answers
var correctAnswers = 0;
var incorrectAnswers = 0;

var index = 0;

// variable to hold the time
var time = 30;

// object holds all questions as keys and answers as values
var qAndA = [

    {question: "question1",
    choice1: "answer1",
    choice2: "answer2",
    choice3: "answer3",
    choice4: "answer4",
    correct: "answer3",
    },

    
    {question: "Question2",
    answer1: "answer1",
    answer2: "answer2",
    answer3: "answer3",
    answer4: "answer4",
    correct: "answer2",
    },  

    {question: "Questions3",
    answer1: "answer1",
    answer2: "answer2",
    answer3: "answer3",
    answer4: "answer4",
    correct: "answer4",
    },

    {question: "questions4",
    answer1: "answer1",
    answer2: "answer2",
    answer3: "answer3",
    answer4: "answer4",
    correct: "answer1",
    },

    {question: "questions5",
    answer1: "answer1",
    answer2: "answer2",
    answer3: "answer3",
    answer4: "answer4",
    correct: "answer4",
    }
];

function startQuiz() {

     // calls the timer funciton to run
     startTimer();

    // Hides the content on page once start quiz button is pressed
    multi.remove();
    start.remove();

    currentQuestion = qAndA[index];
    // replaces h1 tag with questions
    question.textContent = currentQuestion.question;
    

    // appends an ordered list and list items for the multiple choice answers
    answers.appendChild(btnSection);
    btnSection.appendChild(btn1);
    btnSection.appendChild(btn2);
    btnSection.appendChild(btn3);
    btnSection.appendChild(btn4);

    

};

// function that starts the timer
function startTimer() {

    var timerInterval = setInterval(function() {
        time--;
        timer.textContent = time;

        // If statemt stops timer at 0
        if(time === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}