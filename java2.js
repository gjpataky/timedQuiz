var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts"
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses"
  }
];
var score = 0;

for (var i = 0; i < questions.length; i++) {
  var response = window.prompt(questions(i).question);
  if (response == questions[i].correctAnswer) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}

alert("You got " + score + "/" + questions.length);
