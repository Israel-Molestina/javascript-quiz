// Assignment Codes
var btnStart = document.querySelector("#btnStart");
var sectionOne = document.querySelector("#sectionOne");
var sectionTwo = document.querySelector("#sectionTwo");
var rules = document.querySelector("#rules");
var timer = document.querySelector("#time");
var choices = document.querySelector("#choices");
var btn1 = document.querySelector("#choice1");
var btn2 = document.querySelector("#choice2");
var btn3 = document.querySelector("#choice3");
var btn4 = document.querySelector("#choice4");
var form = document.querySelector("#form");
var inpIni = document.querySelector("#inpIni");
var btnIni = document.querySelector("#btnIni");
var lsOutput = document.querySelector("#lsOutput")
var scoreSect = document.querySelector("#scoreSect")
var btnBack = document.querySelector("#btnBack");
var btnReset = document.querySelector("#btnReset");
var hsOutput = document.querySelector("#hsOutput");
var viewHS = document.querySelector("#viewHS");
var arr = [];

// changes style of cursor when hovering over high score and time on main page
viewHS.style.cursor = "pointer";
timer.style.cursor = "default";

// variables to hold number of correct and incorrect answers
var correctAnswers = 0;

// variable for what question they are on 
var index = 0;

// variable to hold the time
var time = 30;

// Element creators
var showP = document.createElement("p");
var h1 = document.createElement("h1");

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
    choice1: "To convert an object into an integer",
    choice2: "To convert an object into a string",
    choice3: "To convert an object into an array",
    choice4: "To convert an object into string cheese",
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

    {question: "Which of the follow is the correct syntax for a loop",
    choice1: "for (var i = 0; i < length; i++) {}",
    choice2: "for (var i = 0; i < length; i--) {}",
    choice3: "for (i = 0; i < length; i++) {}",
    choice4: "All of these are valid for loops",
    correct: "choice4",
    }
];

function startQuiz() {

     // Hides the content on page once start quiz button is pressed
     rules.remove();
     btnStart.remove(); 

    showBtn();
     // calls the timer funciton to run
    startTimer();

    // replaces h1 tag with questions
    sectionOne.textContent = qAndA[index].question;

    // insterts first set of choices
    btn1.textContent = qAndA[index].choice1
    btn2.textContent = qAndA[index].choice2
    btn3.textContent = qAndA[index].choice3
    btn4.textContent = qAndA[index].choice4

};

// changes display of buttons so they appear when start quiz button is clicked
function showBtn() {

    choices.style.display = "block";

};

// function that starts the timer
function startTimer() {

    var timerInterval = setInterval(function() {
        time--;
        timer.textContent = time;

        // stops timer at 0
        if(time === 0 || time < 0 || index >= 5) {
            clearInterval(timerInterval);
            finished();
            timer.textContent = "0"
        }

    }, 1000);
}

// function to stop the questions and introduce a form for user to input initials
function finished() {

    choices.remove();
    sectionOne.textContent = "Finished!";
    sectionTwo.appendChild(h1);
    h1.textContent = `Your final score is ${correctAnswers}!`;
    form.style.display = "block";
    
};

// function that is called once user submits initials. Will show all highscores stored in local storage
function highScore() {

    sectionOne.textContent = "HighScores"
    h1.remove();
    form.remove();
    scoreSect.style.display = "block";

    for (var i = 0; i < localStorage.length; i++) {


        var key = localStorage.key(i);
        var value = localStorage.getItem(key);

        arr.push({initials:key, score:value});

    };

    arr.sort(compareScore);

    for (var i = 0; i < arr.length; i++) {
        lsOutput.innerHTML += `${arr[i].initials}: ${arr[i].score} <hr/> `;
    }

};

// makes sure higher scores are on top
function compareScore(a,b) {
   
    if (a.score < b.score) {
        return 1;
    }

    else if (a.score > b.score) {
        return -1;
    }

    else {
        return 0;
    }


};

// Added event listener to start quiz button
btnStart.addEventListener("click", startQuiz);

// event listener for the answer buttons
choices.addEventListener("click", function(event) {

    event.preventDefault();

    if (event.target.matches("button")) {

        var userAnswer = event.target.getAttribute("id");

        if (userAnswer === qAndA[index].correct) {

            choices.appendChild(showP);
            showP.textContent = "Correct!";
            showP.style.display = "center";
            correctAnswers++;
            index++;
        
        }

        else {
            
            choices.appendChild(showP);
            showP.textContent = "Incorrect";
            time -= 5;
            index++;

        }

        // calls highScore function once all questions have been asked
        if (index >= 5) {

            finished();
            return;
            
        }

         // replaces h1 tag with the following questions
        sectionOne.textContent = qAndA[index].question;

        // insterts following set of choices
        btn1.textContent = qAndA[index].choice1
        btn2.textContent = qAndA[index].choice2
        btn3.textContent = qAndA[index].choice3
        btn4.textContent = qAndA[index].choice4

    }
});

// event listener for when user submits initials. will store high scores in local storage
btnIni.addEventListener("click", function() {

    var key = inpIni.value;
    var value = correctAnswers;
    console.log(value);
    console.log(key);
        
    localStorage.setItem(key, value);
    highScore();
    
});

// event listener that takes user back to main page
btnBack.addEventListener("click", function(){

    location.reload();

});

// event listener that resets highscores and clears them from local storage
btnReset.addEventListener("click", function(){

    localStorage.clear();

    hsOutput.style.display = "none";

});

// event listener for when user clicks view high score on main page
viewHS.addEventListener("click", function(){

    highScore();
    rules.remove();
    btnStart.remove(); 

})