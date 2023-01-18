var titleEl = $("<h2>");
var paragraphEl = $("<p>");
var startButton = $("<button>");
var timerCountdown = $("<li>");

var alertEl = $("<p>");
var mainEl = $("#main");
var timeEl = $("#timer");

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
startButton.attr("class", "start-button");
startButton.addClass("format");

//Questions Page
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



// timer function
var secondsLeft = 75;
  
  function setTime() {

    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
       timeEl.text("Timer: " + secondsLeft);
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);

    //call questions 
    startQuiz();
   }

  
//todo: create a function that defines how the quiz works
function startQuiz(questions){
  //hide Title, Paragraph El, start button
  titleEl.hide();
  paragraphEl.hide();
  startButton.hide();
  
  var output = [];
  var answers;


  

 // const title = document.getElementById('#main')
  
    //create a for loop that cycles through questions array each time user selects an answer
    for (i=0 ; i<questions.length; i++){

      //reset answer list
      answers = [];

      for(letter in questions[i].choices){
        console.log(questions[i].choices);
    }
  }

 if (secondsLeft === 0)  {
  endQuiz();
 }
    
};

//display end of quiz page
function endQuiz() {
  
  questionEl.hide();
  endTitleEl.text ("The End!");
  console.log(endTitleEl);
}

startButton.on('click', setTime);

//append page elements
mainEl.append(titleEl);
mainEl.append(paragraphEl);
mainEl.append(startButton);
mainEl.append(endTitleEl);