const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

const startButton = document.getElementById('startBtn');
const quizContainer = document.querySelector('.quizInfo'); // Used for questions and quiz start and for all done
const headerQuestion = document.getElementById('questionInfo');
const questionAnswersDiv = document.querySelector('#question-answers');
const answerBtns = document.querySelector('#btnAnswers'); // Btns that come in when start quiz

// Keep track of array number
let arrayNum = 0;


startButton.addEventListener('click', startGame);

// Starting the game
function startGame() {
  quizContainer.style.display = "none";
  startButton.style.display = "none";
  populateQuiz();
}

function nextQuestion() {

}

function answerSelected() {

}

// fills the div question-answers with questions
function populateQuiz() {

  questions.forEach((item) =>{
    headerQuestion.innerText = item.questionText;
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", item.options);
    document.body.appendChile(inputElement);
    // let n = questions.options.item;
    // let n = item.options[arrayNum]
    questionAnswersDiv.appendChild(inputElement);
    arrayNum++;
  })
}