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
const scoreDiv = document.getElementById("score");

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
const lastQuestion = questions.length-1;
let runningQuestionIndex() {
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question+ "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
function progressRender(){
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";

    }
}
function answerIsCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}
function answerIsWrong(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}
const questionTime = 10;
const gaugeWidth = 150;
let count = 0;
const gaugeProgressUnit = gaugeWidth/questionTime;

function counterRender(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit*count+"px";
        count++;
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestionIndex<lastQuestionIndex){
            runningQuestionIndex++;
            questionRender();
        }else{clearInterval(Timer);
        scoreRender();
    }
    let TIMER = setInterval(counterRender,1000);
    clearInterval();
    }
}
let score = 0;
function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct==answer){
        score++
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    if(runningQuestionIndex<lastQuestionIndex){
        count = 0;
        runningQuestionIndex++;
        questionRender();
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}   
start.addEventListener("click", startQuiz);
let TIMER;
function startQuiz(){
    start.style.display = "none";
    counterRender();
    TIMER = setInterval(counterRender,1000);
    progressRender();
    questionRender();
    quiz.style.display = "block";
}
function scoreRender(){
    scoreContainer.style.display="block";
    let scorePercent= math.round(100*score/questions.length);
    scoreContainer.innerHTML=scorePercent;
}