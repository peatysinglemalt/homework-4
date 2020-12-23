//questions to be asked 

var trivia = [
    {   triviaQuestion: "When did the Cold War end?",
        choice: ["1973", "1989", "1992", "1985"],
        answer: "1989"
    },
    {   triviaQuestion: "What color is Absynthe?", 
        choice: ["yellow", "green", "blue", "black"],
        answer: "green"
    },
    {   triviaQuestion: "What state is the Lincoln family home (Hildene) located in?",
        choice: ["Vermont", "Maine", "Pennsylvania", "Virginia"],  
        answer: "Vermont"
    },
    {   triviaQuestion: "What is the diameter of Earth?",
        choice: ["10,000 miles", "23,000 miles", "8,000 miles", "16,000 miles"],
        answer: "8,000 miles"
    },
    {   triviaQuestion: "Kodiak island is in which US state?",
        choice: ["Hawaii", "Florida", "New York", "Alaska"],
        answer: "Alaska"
    },
    {   triviaQuestion: "Which reality show series is Andy Cohen’s favorite?",
        choice: ["Survivor", "The Bachelorette", "The Real Housewives", "Top Chef"],
        answer: "The Real Housewives"
    }
];

// set variables for score and timer 
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//function to start timer 
function start() {
    timeLeft = 60;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);

    next();
}

// function to move to next question 
function next() {
    currentQuestion++;

    if (currentQuestion > trivia.length - 1) {
        endGame();
        return;
    }

    var quizContent = "<h2>" + trivia[currentQuestion].triviaQuestion + "</h2>"

    for (var buttonLoop = 0; buttonLoop < trivia[currentQuestion].choice.length; buttonLoop++) {
        var buttonCode = "<button class='answerButton' onclick=\"[ANS]\">[CHOICE]</button>";
        buttonCode = buttonCode.replace("[CHOICE]", trivia[currentQuestion].choice[buttonLoop]);
        if (trivia[currentQuestion].choice[buttonLoop] == trivia[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
    }

    document.getElementById("quizBody").innerHTML = quizContent;
}

// function to endgame 
function endGame() {
    clearInterval(timer);

    var quizContent = `
    <h2>Well Done!</h2>
    <h3>You answered ` + score + ` / 6 correctly!</h3>
    <input type="text" id="name" placeholder="Initials"> 
    <button onclick="setScore()">Submit</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

function setScore() {
   
    highscores.push(score);
    highscores.sort(function (a, b) {
      return b - a;
    });
   
    console.log(highscores);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    console.log("local storage:" + localStorage.highscores[1]);
    localStorage.setItem("highscoreName", document.getElementById("name").value);
    getScore();
  }
  
function getScore() {
  let finalHighScore = localStorage.highscores[1];
  var quizContent =
    `<h2>` + localStorage.getItem("highscoreName") + `'s current highscore:</h2>
    <h1>` + finalHighScore + `</h1><br> 
    <button onclick="resetGame()">Go Back</button><button onclick="clearScore()">Clear Highscore</button>
    `;

  document.getElementById("quizBody").innerHTML = quizContent;
}

function clearScore() {
    localStorage.setItem("highscores", "");
    localStorage.setItem("highscoreName", "");

    resetGame();
}

function incorrect() {
    timeLeft -= 10;
    next();
}

function correct() {
    score += 1;
    next();
}

function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    var quizContent = "";
    document.getElementById("quizBody").innerHTML = quizContent;
}

let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
