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

// Keep track of array number
let arrayNum = 0;

startButton.addEventListener('click', startGame); // start quiz btn


// Starting the game
function startGame() {
  quizContainer.style.display = "none";
  startButton.style.display = "none";
  populateQuiz();
}

function nextQuestion() {
  questionAnswersDiv.style.display = "none";
  arrayNum++;
  populateQuiz();
}

function answerSelected() {
  deleteChild();
}

// fills the div question-answers with questions
function populateQuiz() {
  headerQuestion.innerText = questions[arrayNum].questionText; 

  const option = questions[arrayNum].options;

  option.forEach(item => {
    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'submit');
    inputElement.setAttribute('value', item);
    inputElement.setAttribute('id', "btnAnswers");
    questionAnswersDiv.appendChild(inputElement);
    
    const answerBtns = document.querySelector('#btnAnswers'); // Btns that come in when start quiz
    answerBtns.addEventListener('click', answerSelected); 
  });

  questionAnswersDiv.style.display = "grid";
}

// Removes the created btns in div question-answers
function deleteChild() {
  while (questionAnswersDiv.firstChild) {
    questionAnswersDiv.removeChild(questionAnswersDiv.firstChild);
  }
}