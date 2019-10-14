/*create questions*/
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
    title: "How do you create a function?",
    choices: [
      "function: myFunction()",
      "function = myFunction()",
      "myFunction(function)",
      "function myFunction()"
    ],
    answer: "function myFunction()"
  },
  {
    title: "Which of these choices correctly starts a FOR loop?",
    choices: [
      "for (i=0, i<10, i++)",
      "for (i=0 && i<10; i++)",
      "for (i=0; i<10; i++)",
      "for (i=10, i<10, i++)"
    ],
    answer: "for (i=0; i<10; i++)"
  },
  {
    title: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onmouseclick", "onleftmouse", "onclick", "onmouse"],
    answer: "onclick"
  }
];
/*list variables*/
var quizContainer = document.getElementById("quiz");
var startBtn = document.getElementById("startQuizBtn");
var checkResBtn = document.getElementById("checkResBtn");
var questionDiv = document.getElementById("questionDiv");
var resultsDiv = document.getElementById("resultsDiv");
var questionIndex = 0;
var question = document.getElementById("question");
var timeCounter = document.getElementById("timeCounter");
var timer;
var time = 0;
var correctAnswer = "";

/*to make button id disappear.  NOTE: This was recommended by Hannah*/
questionDiv.style.display = "none";
checkResBtn.style.display = "none";
resultsDiv.style.display = "none";
timeCounter.style.display = "none";

/*function to start quiz: make startbutton disappear and questions and time counter to begin at same time*/
function startQuiz() {
  /*make start button disappear*/
  startBtn.style.display = "none";
  /*make question appear*/
  questionDiv.style.display = "block";
  /*make timer appear*/
  timeCounter.style.display = "block";

  /*timer to increment each second*/
  timer = setInterval(function() {
    time += 1;
    timeCounter.innerText = time;
  }, 1000);

  loadNextQuestion();
}

/*function to move onto next question*/
function loadNextQuestion() {
  var currentQuestion = questions[questionIndex];
  correctAnswer = currentQuestion.answer;
  question.innerHTML = currentQuestion.title;

  /*for loop for question choices*/
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var currentChoice = currentQuestion.choices[i];
    var choiceBtn = document.getElementById("choice" + i);
    choiceBtn.value = currentChoice;
    choiceBtn.innerHTML = currentChoice;
  }
}
/*function to determine if answer choice is correct or not*/
function checkAnswer(btnValue) {
  /*check to see for correct question*/
  console.log(btnValue);
  console.log(correctAnswer);
  if (btnValue == correctAnswer) {
    /*let tester know if they've chosen wisely*/
    alert("CORRECT ANSWER!");
    /*userAnswers[questionIndex] = 1;*/
  } else {
    /*let tester know the made a bad choice*/
    alert("WRONG ANSWER!");
    /*add 15 seconds to their score (e.g. time)*/
    time += 15;
    /*End the function NOTE: This was recommended by tutor to correct my error*/
    return;
  }

  /*create if else statement to ensure quiz ends after final question to resolve issue I was having.*/
  questionIndex++;
  if (questionIndex < questions.length) {
    console.log("Next question");
    loadNextQuestion();
  } else {
    console.log("End of Quiz");
    /*NOTE: I could not get timer to stop after last question, the below was recommended by tutor*/
    endQuiz();
  }
}
/*NOTE: I could not get score to appear  with JSON strings & local storage recommended by instructor, tutor recommended for sake of time clearInterval and resultsDiv*/
function endQuiz() {
  clearInterval(timer);
  questionDiv.style.display = "none";

  resultsDiv.style.display = "block";
  resultsDiv.innerHTML = "User score is " + time;
}
/*Final notes: I can only get time to increment up, not down.  Also, I can't get timer to reset unless question is answered.  Only had an hour so I'll have to get back on this one.*/
