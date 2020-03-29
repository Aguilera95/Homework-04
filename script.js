  



var questions = [
    {
        title: "What does JS stand for?",
        choices: ["John Snow", "Javascript", "Javasave"],
        answer: "Javascript"
    },
    {
        title: "what does CSS stand for?",
        choices: ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        title: "Inside which HTML element code do we put the javascript code?",
        choices: ["<script>", "<javascript>", "<js>"],
        answer: "<js>"
    },
  


];


var questionQuiz = document.getElementById("#quiz");
var questionSubmit = document.getElementById("#results");
var score = document.getElementById("#score");
var timer = document.getElementById("#timer");

var startQuiz = document.getElementById("#start");


var score = 0;
var secondsLeft = 75;
var currentQuestionIndex = 0;

function goToNextQuestion(whatTheUserClicked) {
  var correctText = questions[currentQuestionIndex].answer;

  if (whatTheUserClicked === correctText) {
    console.log("Correct!");
    score++;
  }
  else {
    console.log("Sorry, that is not correct.");
  }
  currentQuestionIndex++;
  getNewQuestion(currentQuestionIndex);


}

function answerClickSetUp() {
  var a = document.getElementById("answer1");
  var b = document.getElementById("answer2");
  var c = document.getElementById("answer3");


  a.addEventListener("click", function () { goToNextQuestion(a.innerText); });
  b.addEventListener("click", function () { goToNextQuestion(b.innerText); });
  c.addEventListener("click", function () { goToNextQuestion(c.innerText); });

}
answerClickSetUp();

startQuiz.addEventListener("click", function() {
  getNewQuestion(currentQuestionIndex);
});

var currentQuestion;
function getNewQuestion(questionIndex) {
  var question = questions[questionIndex];
  currentQuestion = question;
  var title = question.title;
  
  var questionEl = document.getElementById("question");
  questionEl.innerText = title;

  var choice1 = question.choices[0];
  var answerEl1 = document.getElementById("answer1");
  answerEl1.innerText = choice1;


  var choice2 = question.choices[1];
  var answerEl2 = document.getElementById("answer2");
  answerEl2.innerText = choice2;


  var choice3 = question.choices[2];
  var answerEl3 = document.getElementById("answer3");
  answerEl3.innerText = choice3;


  document.getElementById("question").innerText = title;
  document.getElementById("answer1").innerText = choice1;
  document.getElementById("answer2").innerText = choice2;
  document.getElementById("answer3").innerText = choice3;



}

function scoreKeeper(){
  document.getElementById("score").innerHTML = count++;

}
scoreKeeper();