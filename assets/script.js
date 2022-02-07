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
const enterInitialsDiv = document.querySelector('#enterInitials');
const doneSubmit = document.querySelector('#endSubmit');

// Keep track of array number
let arrayNum = 0;

let pointsScore = 0; // Points total at the end 

startButton.addEventListener('click', startGame); // start quiz btn
doneSubmit.addEventListner('click', restartGame);

// Starting the game
function startGame() {
  quizContainer.style.display = "none";
  startButton.style.display = "none";
  populateQuiz();
}

function nextQuestion() {
  arrayNum++;

  if(arrayNum === questions.length){
    questionAnswersDiv.style.display = "none";
    allDone();
  } else {
    populateQuiz();
  }
}

// This function is used to compare value of button to the array for correct answer
function answerSelected() {

  let lineBreak = document.createElement('hr');
  let correctOrIncorrect = document.createElement('label'); // creats message to display correct or incorrect
  correctOrIncorrect.setAttribute('id', 'messageText');

  if(this.id === questions[arrayNum].answer) { // must still add minus time and points system
    pointsScore += 5;
    correctOrIncorrect.textContent = 'Correct!';
  } else {
    pointsScore < 0 ? pointsScore = 0 : pointsScore -= 1;
    correctOrIncorrect.textContent = 'Incorrect!';   
  }

  questionAnswersDiv.appendChild(lineBreak);
  questionAnswersDiv.appendChild(correctOrIncorrect);

  setTimeout(function() {
    deleteChild();
    nextQuestion();
  }, 1000);

}

// fills the div question-answers with questions
function populateQuiz() {
  headerQuestion.innerText = questions[arrayNum].questionText; 

  const option = questions[arrayNum].options;

  option.forEach(item => {
    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'submit');
    inputElement.setAttribute('value', item);
    inputElement.setAttribute('class', "btnAnswers");
    inputElement.setAttribute('id', item);
    inputElement.addEventListener('click', answerSelected); 
    questionAnswersDiv.appendChild(inputElement);
  });

  questionAnswersDiv.style.display = "grid";
}

// Remove event listeners
// function removeEvent() {
//   debugger;
//   for (let i = 0; i > questionAnswersDiv.length; i++){
//     let answerBtn = querySelector('id').removeEventListener('click', answerSelected)
//   }
// }

// Removes the created btns in div question-answers
function deleteChild() {
  while (questionAnswersDiv.firstChild) {
    questionAnswersDiv.removeChild(questionAnswersDiv.firstChild);
  }
  headerQuestion.innerText = '';
}

// This is the function that will show the finally score and enter in initials
function allDone() {
  document.querySelector('main').style.width = 'auto';
  headerQuestion.innerText = 'All done!';
  let scoreShow = document.querySelector('#score');
  scoreShow.innerText = `Your final score is ${pointsScore}.`;
  enterInitialsDiv.style.display = 'grid';
}

// start from beginning
function restartGame() {
  arrayNum = 0;
  pointsScore = 0;
  document.querySelector('#score').innerText = '';
  enterInitialsDiv.style.display = 'none';
  document.querySelector('main').style.width = '55rem';
}