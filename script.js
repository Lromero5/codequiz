$(document).ready(function(){

var questionindex = 0;
var correct = 0;
var wrong = 0;

var counter = 0;
var timeleft = 45;

// * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." 
// 1. A button has to be created "start quiz" in html and it has to be assigned to a variable by id, 
var start = $("#startquiz");
console.log("start");

// * Clicking the "Start Quiz" button presents the user with a series of questions. 
// remove everything on the page. Append first question and choices. 
$("#startquiz").on("click", function(){
  console.log("you got clicked");

  //this function keeps track of time
  keeptime();


  $(".container").empty();
//this will shoot the displayquestion function below that holds all the questions. 
displayquestion();

})

//this is an array of objects with the questions that will be asked 
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
      title: "Inside which HTML element do we put the JavaScript?",
      choices: ["<js>", "<script>", "<javascript>", "<scripting>"],
      answer: "<script>"
    },
    {
      title: "Where is the correct place to insert a JavaScript?",
      choices: ["The <body>", "Both <head> and <body>", "The <head>", "the <style>"],
      answer: "Both <head> and <body>"
    },    
    {
      title: "How do you call a function named myFunction?",
      choices: ["myFunction()", "call myFunction()", "var", "hey function"],
      answer: "myFunction()"
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
        correct++
    } else {
        wrong++
    }

console.log("wrong/right", wrong, correct);
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

// The timer is initialized with a value and immediately begins countdown.

function keeptime() {

    var time = document.getElementById('timer');
    time.innerHTML = timeleft - counter;
    
    function timeIt() {
        counter++
        time.innerHTML = timeleft - counter;
    }

    setInterval(timeIt, 1000);

}

    //I can't get the timer to stop
    if (timeleft === 0){
        clearTimeout(keeptime);
    }

//save high scores to local storage
//set interval for timer.  go to the next questions. ++questionindex and fire off displayquestion() 


// Also note the navigation option to "View Highscores" and the "Time" value set at 0.


// * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).


// * When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

    //This is the end of the ready function    

})