var titleEl = $("<h2>");
var paragraphEl = $("<p>");
var startButton = $("<button>");
var timerCountdown = $("<li>");

var alertEl = $("<p>");
var mainEl = $("#main");
var timeEl = $("#timer");

//Home Page
//title
titleEl.text ("Coding Quiz!").attr("class", "title").addClass("format");
console.log(titleEl);
//description
paragraphEl.text("Try to answer all the questions as quickly and accurately as possible! You have one chance to answer each question. Good luck!").attr("class", "paragraph").addClass("format");
//start button
startButton.text("Start Quiz").attr("class", "start-button").addClass("format");

//Questions Page
var qContainer = [];
var choiceAEl = $("#choice-A");
var choiceBEl = $("#choice-B");
var choiceCEl = $("#choice-C");
var choiceDEl = $("#choice-D");
let currentQuestion = 0;

//questions array
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


//End Page
var endTitleEl = $("<h2>");
var resultsBox = $("<p>");
var userScore = $("<input>");
var submit = $("<button>");

// timer function
var secondsLeft = 75;

  function setTime() {

    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
       timeEl.text("Timer: " + secondsLeft);
  
      if (secondsLeft === 0) {
        //calls endscreen function
        clearInterval(timerInterval);
        endQuiz();
      } else if (secondsLeft < 0){
        clearInterval(timerInterval);
        endQuiz();
      }
  
    }, 1000);

    //call questions 
   startQuiz();
   }

var answers = questions[currentQuestion].answer;
//todo: create a function that defines how the quiz works
function startQuiz(questions){
  //hide Title, Paragraph El, start button
  titleEl.hide();
  paragraphEl.hide();
  startButton.hide();
  
  

  qContainer = questions[currentQuestion].title;
  questionEl.textContent = qContainer;
  //display questions and choices
  selection = questions[currentQuestion].choices;
  choiceAEl.text(selection[0]);
  choiceBEl.text(selection[1]);
  choiceCEl.text(selection[2]);
  choiceDEl.text(selection[3]);
  //correct answer
  correct = questions[currentQuestion].answer;
  

 // const title = document.getElementById('#main')
  
    //create a for loop that cycles through questions array each time user selects an answer
    for (i=0 ; i<questions.length; i++){

      //reset answer list
      answers = [];

      for(letter in questions[i].choices){
        console.log(questions[i].choices);
    }
  }
    
};



//display end of quiz page
var savedResponseEl = $("#highscore");
var response = [];
function endQuiz() { 
 //TODO: questionEl.hide();

 //endscreen Title Element
  endTitleEl.text ("The End!");
  endTitleEl.attr("class", "title").addClass("format");
  console.log(endTitleEl);

 //endscreen score element
  resultsBox.text ("Your score is: " + secondsLeft + "! Record your score and initials below.").addClass("format").addClass("paragraph");
  //Text box for users to add their score
  userScore.attr("placeholder", "your score").addClass("format").addClass("score-box").attr("id","score");
  submit.text("Submit").attr("class", "submit-button");

 //routes to function that displays leaderboard scores
  if(submit === "click"){
    displayResponse();
   }
   
  
  
//save response in local storage
mainEl.append(userScore);
mainEl.append(submit);
  
}

function displayResponse() {
  endTitleEl.hide();
  resultsBox.hide();
  submit.hide();

  savedResponseEl.HTML = "";
  
  for (var i = 0; i < response.length; i++){
    var responses = response[i];
    var li =$("<li>");
    li.text(responses).attr("data-index", i);

    console.log(li);
    
    savedResponseEl.append(li);
  
  }
}
submit.on("click", displayResponse);

startButton.on("click", setTime);

//append page elements
mainEl.append(titleEl);
mainEl.append(paragraphEl);
mainEl.append(startButton);
mainEl.append(endTitleEl);
mainEl.append(resultsBox);
