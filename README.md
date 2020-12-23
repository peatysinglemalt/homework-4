## What this is
Web APIs: Code Quiz, aka, Triva Game

## Technology Used
JavaScript, HTML, CSS

## What you did

- created a trivia game with 6 unique questions 
- once the begin trivia button is clicked, the game begins and timer starts
- once a question is clicked, it moves to the next question 
- if the question is answered incorrectly, the timer is reduced by 10 seconds 
- when all the questions are answered, user is alerted of the number of questions answered correctly 
- user is presented with an input box to add initials and log their name 
- user is able to view high score on the nav bar 


## Code Snippets With context as to why you are highlighting it (Do not highlight every line of code)
Snippet of function start, and timer code 
```
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
```

## Who You Are (links to your LinkedIn & Portfolio - if one exists)
[LinkedIn](https://www.linkedin.com/in/matthewywu/)

## Website

[GitHub repository](https://peatysinglemalt.github.io/homework-3/)
[Deployed Site] 

## Screenshots

![screenshot 1]
![screenshot 2]
![screenshot 3]

# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```
