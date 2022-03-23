// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// I need a start button to trigger the time interval
// Upon start, begin countdown
// Change text of questions with .textContent method and new if/else
// Use DOM and data-state to create answer buttons and leaderboard

var secondsLeft = 60
var start = $('#startButton');
var timeLeft = $('#time');
var mainPrompt = $('#mainPrompt');
var buttonOne = $('#buttonOne');
var buttonTwo = $('#buttonTwo');
var buttonThree = $('#buttonThree');
var buttonFour = $('#buttonFour');
var correctFalse = $('#correctFalse')
// var button = $('.button');

// function shadow(event) {
//     event.target().css('background-color', 'rgb(128, 75, 128)')

function startQuiz (event) {
    firstQuestion()
    var timerInterval = setInterval(function() {
        secondsLeft --;
        timeLeft.text(secondsLeft + " s");
        if (secondsLeft === 0) {
            displayLeaderboard();
            // Display leaderboard
        }
    }, 1000);
};

function firstQuestion() {
    mainPrompt.text("What is HTML?");
    buttonOne.text("HTML is the text displayed on the browser tab");
    buttonTwo.text("HTML is a language used to create the main elements of a webpage");
    buttonThree.text("HTML is a cafe beverage");
    buttonFour.text("HTML is a method of sorting algorithms based on the derivative of the hypotenuse");

    buttonOne.on("click", function() {
        correctFalse.text("False!");
        secondsLeft -= 10;
        secondQuestion();
    });
    buttonTwo.on("click", function() {
        correctFalse.text("Correct!");
        secondQuestion();
    });
    buttonThree.on("click", function() {
        correctFalse.text("False!");
        secondsLeft -= 10;
        secondQuestion();

    });
    buttonFour.on("click", function() {
        correctFalse.text("False!");
        secondsLeft -= 10;
        secondQuestion();
    });
};

function secondQuestion () {
    mainPrompt.text("What is CSS?");
    buttonOne.text("CSS is the language used to style an HTML document");
    buttonTwo.text("CSS is a mathematical formula");
    buttonThree.text("CSS is a language used to create executables in a document");
    buttonFour.text("CSS is a popular type of pet in the Netherlands");

    buttonOne.on("click", function() {
        correctFalse.text("Correct!");
        thirdQuestion();
    });
    buttonTwo.on("click", function() {
        correctFalse.text("False!");
        secondsLeft -= 10;
        thirdQuestion();
    });
    buttonThree.on("click", function() {
        correctFalse.text("False!");
        secondsLeft -= 10;
        thirdQuestion();

    });
    buttonFour.on("click", function() {
        correctFalse.text("False!");
        secondsLeft -= 10;
        thirdQuestion();
    });
};

function thirdQuestion() {
    mainPrompt.text("What is JavaScript (JS)?");
    buttonOne.text("JS is a language used to communicate with secret government agencies");
    buttonTwo.text("JS is a machine learning algorithm");
    buttonThree.text("JS is the name of an ancient Greek belief in Santa Claus");
    buttonFour.text("JS is a language used to make a webpage interactive");

    buttonOne.on("click", function() {
        correctFalse.text("False!");
        secondsLeft -= 10;
        fourthQuestion();
    });
    buttonTwo.on("click", function() {
        correctFalse.text("False!");
        secondsLeft -= 10;
        fourthQuestion();
    });
    buttonThree.on("click", function() {
        correctFalse.text("False!");
        secondsLeft -= 10;
        fourthQuestion();
    });
    buttonFour.on("click", function() {
        correctFalse.text("Correct!");
        fourthQuestion();
    });
};

function fourthQuestion() {
    mainPrompt.text("Using ___, we can use JS to interact with HTML elements");
    buttonOne.text("DOM manipulation");
    buttonTwo.text("CSS traversal");
    buttonThree.text("HTML Bingo");
    buttonFour.text("My neighbor who works for the police");

    buttonOne.on("click", function() {
        correctFalse.text("Correct!");
        fifthQuestion();
    });
    buttonTwo.on("click", function() {
        correctFalse.text("False!");
        secondsLeft -= 10;
        fifthQuestion();
    });
    buttonThree.on("click", function() {
        correctFalse.text("False!");
        secondsLeft -= 10;
        fifthQuestion();
    });
    buttonFour.on("click", function() {
        correctFalse.text("False!");
        secondsLeft -= 10;
        fifthQuestion();
    });
};

function fifthQuestion() {
    mainPrompt.text("Which is the first language a web-developer is likely to learn?");
    buttonOne.text("CSS");
    buttonTwo.text("JS");
    buttonThree.text("HTML");
    buttonFour.text("Java");

    buttonOne.on("click", function() {
        correctFalse.text("Correct!");
        secondsLeft -= 10;
        displayLeaderboard();
    });
    buttonTwo.on("click", function() {
        correctFalse.text("False!");
        secondsLeft -= 10;
        displayLeaderboard();
    });
    buttonThree.on("click", function() {
        correctFalse.text("Correct!");
        displayLeaderboard();
    });
    buttonFour.on("click", function() {
        correctFalse.text("False!");
        secondsLeft -= 10;
        displayLeaderboard();
    });
}

function displayLeaderboard() {
    clearInterval(timerInterval);

}

start.click(startQuiz)
// button.on('mousedown', shadow)