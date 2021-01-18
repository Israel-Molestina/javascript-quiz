// Assignment Codes
var start = document.querySelector("#start");
var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var multi = document.querySelector("#multi");
var timer = document.querySelector("#time");
var block = document.querySelector("#none");
var btn1 = document.querySelector("#choice1");
var btn2 = document.querySelector("#choice2");
var btn3 = document.querySelector("#choice3");
var btn4 = document.querySelector("#choice4");

// variables to hold number of correct and incorrect answers
var correctAnswers = 0;

// variable for what question they are on 
var index = 0;

// variable to hold the time
var time = 30;

// object holds all questions as keys and answers as values
var qAndA = [

    {question: "question1",
    choice1: "a",
    choice2: "b",
    choice3: "c",
    choice4: "d",
    correct: "choice3",
    },

    
    {question: "Question2",
    choice1: "answer1",
    choice2: "answer2",
    choice3: "answer3",
    choice4: "answer4",
    correct: "choice2",
    },  

    {question: "Questions3",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    correct: "choice4",
    },

    {question: "questions4",
    choice1: "answer1",
    choice2: "answer2",
    choice3: "answer3",
    choice4: "answer4",
    correct: "choice1",
    },

    {question: "questions5",
    choice1: "answer1",
    choice2: "answer2",
    choice3: "answer3",
    choice4: "answer4",
    correct: "choice4",
    }
];

function startQuiz() {

    showBtn();
     // calls the timer funciton to run
    startTimer();

    // replaces h1 tag with questions
    question.textContent = qAndA[index].question;

    // insterts first set of choices
    btn1.textContent = qAndA[index].choice1
    btn2.textContent = qAndA[index].choice2
    btn3.textContent = qAndA[index].choice3
    btn4.textContent = qAndA[index].choice4

    // Hides the content on page once start quiz button is pressed
    multi.remove();
    start.remove();
    
};

function showBtn() {

    block.style.display = "block";

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

// Added event listener to start quiz button
start.addEventListener("click", startQuiz);

block.addEventListener("click", function(event) {

    event.preventDefault();

    if (event.target.matches("button")) {

        var userAnswer = event.target.getAttribute("id");

        if (userAnswer === qAndA[index].correct) {

            correctAnswers++;

        }

        else {
            
            time -= 5;

        }

        index++;

        // insterts first set of choices
        btn1.textContent = qAndA[index].choice1
        btn2.textContent = qAndA[index].choice2
        btn3.textContent = qAndA[index].choice3
        btn4.textContent = qAndA[index].choice4
        
    }
});