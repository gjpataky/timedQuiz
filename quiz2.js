/*defining the elements*/
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("qImg");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

/*create the questions*/
let questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    correct: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parentheses",
    choiceD: "square brackets",
    correct: "parentheses"
  },
  {
    title: "Am I doing this correctly?",
    choiceA: "no",
    choiceB: "yes",
    choiceC: "no",
    choiceD: "no",
    correct: "yes"
  },
  {
    title: "Last change to get this right",
    choiceA: "no",
    choiceB: "no",
    choiceC: "no",
    choiceD: "yes",
    correct: "yes"
  }
];
/* define the variables*/
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

/*render a question*/
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

/*start quiz*/
start.addEventListener("click", startQuiz);

function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000);
}
/*render progress*/
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

/*check answer*/

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    score++;
    answerIsCorrect();
  } else {
    answerIsWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    clearInterval(TIMER);
    scoreRender();
  }
}
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

/*counter render*/
function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = gaugeUnit * count + "px";
    count++;
  } else {
    count = 0;
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      clearInterval(Timer);
      scoreRender();
    }
    let TIMER = setInterval(counterRender, 1000);
    clearInterval();
  }
}
function scoreRender() {
  scoreDiv.style.display = "block";
  const scorePercent = Math.round((100 * score) / questions.length);
}
