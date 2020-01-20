$(document).ready(function(){

var questionindex = 0;
var correct = 0;
var wrong = 0;

// * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." 
// 1. A button has to be created "start quiz" in html and it has to be assigned to a variable by id, 
var start = $("#startquiz");
console.log("start");

// remove everything on the page. Append first question and choices. 
$("#startquiz").on("click", function(){
  console.log("you got clicked");

  $(".container").empty();

displayquestion();

})

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
    ///etc.
  ];

  function displayquestion(){
    console.log("about to append questions")
    var title = $("<h1>").text(questions[questionindex].title);
    $(".quizquestions").append(title);


    for (i = 0; i < questions[questionindex].choices.length; i++){
        var choice = $("<button>").text(questions[questionindex].choices[i]);
        choice.addClass("choicebutton");
        $(".quizquestions").append(choice);
    }
  }

$(document).on("click", ".choicebutton", function(){
    console.log("you made a choice", $(this).text());

    if ($(this).text() === questions[questionindex].answer){
        alert("you guessed right!"); 
        correct++
    } else {
        alert("you guessed wrong!")
        wrong++
    }
console.log("wrong/right",wrong, correct);
    $(".quizquestions").empty()
questionindex++

    if (questionindex === questions.length){
        gameover();
    } else { displayquestion();
    }
})


function gameover() {
    var correctscore = $("<h1>").text("correct answers " + correct);
    var wrongscore = $("<h1>").text("wrong answers " + wrong);
    $(".quizquestions").append(correctscore, wrongscore);

}


//save high scores to local storage
//set interval for timer. When timer hits 0, go to the next questions. ++questionindex and fire off displayquestion() 



// Also note the navigation option to "View Highscores" and the "Time" value set at 0.
    // 2. create a var for scores then create a var for high scores and link that to the localstorage
    var userscore = ""; //this var will take in the users scores
    var recordHighScores = $("#highscores"); //this var will grab the high scores id from html

    localStorage.setItem("highscores", recordHighScores);
    console.log(recordHighScores); 
    
    // 3. create a var for time with a value of 0
    var timer = 0;

// * Clicking the "Start Quiz" button presents the user with a series of questions. 
//I have to store the questions in an array of objects in a separte js file. 


// 4. create an onclick event for the button and execute the questions.

// The timer is initialized with a value and immediately begins countdown.
// 5. create a function that will grab the time var created in step 3. pass it the value of the amount of time the user will have for the quiz.
// 6. add an if.. statement, if a question is wrong then the quiz has to lose ten seconds.

// * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).
// 7. the time remaining will pass the value to the score var and that will be the score. 


// * When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.
// 8. end the game by presenting the final score and creating a form where the user can input their initials. Save that to local storage. 

})