// Assignment Codes
var start = document.querySelector("#start");

var question = document.querySelector("#question");

var answers = document.querySelector("#answers")

// Added event listener to start quiz button
start.addEventListener("click", startQuiz);

function startQuiz() {

    var timer = startTimer();

    var quiz = quiz();
}

var correctAnswers = 0;

var incorrectAnswers = 0;

var time = 60;

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
