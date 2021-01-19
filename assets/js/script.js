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

// creates an element to show if answer was correct or incorrect
var showP = document.createElement("p");

// object holds all questions as keys and answers as values
var qAndA = [

    {question: "What the correct code for creating a new paragraph element?",
    choice1: 'document.createTag("p")',
    choice2: 'document.createTag("<p>")',
    choice3: 'document.createElement("p")',
    choice4: 'document.createElement("<p>")',
    correct: "choice3",
    },

    
    {question: "What is JSON.stringify used for?",
    choice1: "To convert something into an integer",
    choice2: "To convert something into a string",
    choice3: "To convert something into an array",
    choice4: "To convert something into string cheese",
    correct: "choice2",
    },  

    {question: 'What will document.querySelector("#chapter") do?',
    choice1: "It will search through the document and grab every element excepet for the one with the class chapter",
    choice2: "It will search through the document and grab every element excepet for the one with the id chapter",
    choice3: "It will search through the document and grab the elements with the class chapter",
    choice4: "It will search through the document and grab the element with the id chapter",
    correct: "choice4",
    },

    {question: "What will the method event.stopProgpagation() accomplish",
    choice1: "It will prevent the current event from propagating, or bubbling up, to its parent elements",
    choice2: "It will force the current event to propagate, or bubble up, to its parent elements",
    choice3: "This is not a valid method in JavaScript",
    choice4: "It will prevent the current event from propagating, or bubbling down, to its children elements",
    correct: "choice1",
    },

    {question: "Wich of the follow is a correct way to set up a for loop",
    choice1: "for (var i = 0; i < lenght; i++) {}",
    choice2: "for (var i = 0; i < lenght; i--) {}",
    choice3: "for (i = 0; i < lenght; i++) {}",
    choice4: "All of these are valid for loops",
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

        // stops timer at 0
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

            block.appendChild(showP);
            showP.textContent = "Correct!";
            correctAnswers++;
            index++;
        
        }

        else {
            
            block.appendChild(showP);
            showP.textContent = "Incorrect";
            time -= 5;
            index++;

        }

         // replaces h1 tag with the following questions
        question.textContent = qAndA[index].question;

        // insterts following set of choices
        btn1.textContent = qAndA[index].choice1
        btn2.textContent = qAndA[index].choice2
        btn3.textContent = qAndA[index].choice3
        btn4.textContent = qAndA[index].choice4

    }
});