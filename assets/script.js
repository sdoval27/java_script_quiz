var titleEl = $("<h2>");
var paragraphEl = $("<p>");
var startButton = $("<button>")
var timeEl = $("#timer");
var alertEl = $("<p>");
var mainEl = $("#main");

//Home Page
//title
titleEl.text ("Coding Quiz!");
titleEl.attr("class", "title").addClass("format");
console.log(titleEl);
//description
paragraphEl.text("Try to answer all the questions as quickly and accurately as possible! You have one chance to answer each question and a limited amount of time to complete the quiz. Good luck!");
paragraphEl.attr("class", "paragraph-element").addClass("format");
//start button
startButton.text("Start Quiz");
startButton.attr("class", "start-button")
startButton.addClass("format");

mainEl.append(titleEl);
mainEl.append(paragraphEl);
mainEl.append(startButton);



// list of all questions, choices, and answers
var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];


//todo: create an event listener to start the quiz and call startQuiz function
  
//todo: create a function that defines how the quiz works
function startQuiz(){
    var secondsLeft = 90;
    //TODO: create a for loop that cycles through above array each time user selects an answer
    for (i=0 ; i<questions.length; i++){

    }

    if(!answer){
    alertEl.textContent = "incorrect, -5 sec";
    //timer subratcts five seconds
    }else{
    alertEl.textContent = "correct!";
    };

    //view activity 09 for timer code
    var timerInterval =setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Timer: "+ secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
    //append timer to timeEL
}

//display end of quiz page
function endQuiz(){

}