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
const timeWatch = document.querySelector('#timer');
const saveScore = document.querySelector('#saveScore');
const goBack = document.querySelector('#goBack'); // The go back btn on highscore
const clearHighscore = document.querySelector('#clearHighscore'); // Clears all the scores
const highscoreList = document.querySelector('#highscore');

// Keep track of array number
let arrayNum = 0;

let timeSecond = 50; // For timer that will show how long they have to answer the quiz
let answerWrong = false;

let pointsScore = 0; // Points total at the end 

startButton.addEventListener('click', startGame); // start quiz btn
doneSubmit.addEventListener('click', restartGame);
goBack.addEventListener('click', goBackBtn);
clearHighscore.addEventListener('click', scoreClear);

// Starting the game
function startGame() {
  quizContainer.style.display = "none";
  populateQuiz();
  showTimeControl(timeSecond, answerWrong);
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

  if(this.id === questions[arrayNum].answer) { 
    pointsScore += 5;
    correctOrIncorrect.textContent = 'Correct!';
  } else {
    pointsScore -= 1;
   
    
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

// Removes the created btns in div question-answers
function deleteChild() {
  while (questionAnswersDiv.firstChild) {
    questionAnswersDiv.removeChild(questionAnswersDiv.firstChild);
  }
  headerQuestion.innerText = '';
}

// This is the function that will show the finally score and enter in initials
function allDone() {
  let finalScore =  pointsScore < 0 ? pointsScore = 0 : pointsScore;
  document.querySelector('main').style.width = '35rem';
  headerQuestion.innerText = 'All done!';
  let scoreShow = document.querySelector('#score');
  scoreShow.setAttribute('value', finalScore);
  scoreShow.innerText = `Your final score is ${finalScore}.`;
  enterInitialsDiv.style.display = 'grid';
}

// start from beginning
function restartGame() {
  let regexMath = /[A-Z]{2}/;

  let userInitials = document.querySelector('#initial').value; // Gest the users input from enter their initials input

  if(regexMath.test(userInitials)){
    arrayNum = 0;
    pointsScore = 0;
    document.querySelector('#score').innerText = '';
    document.querySelector('#score').removeAttribute('value');
    enterInitialsDiv.style.display = 'none';
    document.querySelector('#initial').value = '';
    document.querySelector('main').style.width = '55rem';
    quizContainer.style.display = '';
  } else {
    alert("Enter only 2 initials that are uppercase");
  }
}

// Controls the time of how long you need to do the quiz question
function showTimeControl(second, wrong) {
  // displayTime(second);

  const countDown = setInterval(() => {
    // let headerTag = document.querySelector('header');
    // headerTag.removeChild(headerTag.lastChild);

    // let inputLabel = document.createElement('label');
    // inputLabel.setAttribute('id', 'timer');

    // headerTag.appendChild(inputLabel);

    // wrong === true ? second -= 10 : second--;

    second--;
      displayTime(second);
      if (second == 0 || second < 1){
        timeWatch.innerText = 'Time: ';
        clearInterval(countDown);
        deleteChild();
        allDone();
        saveScore.style.display = 'none';
      }    
  }, 1000);
  
  function displayTime(seconds) {
    const sec = Math.floor(seconds % 60);
    timeWatch.innerText = `Time: ${sec}`;
    //timeWatch.setAttribute('value', sec);
    timeSecond = sec;
  }
}

// Function to show the highscore in the game
function showScoreBoard() {
  if(quizContainer.style.display === 'none'){
    alert('Can only see Highscore when on Coding Quiz Challenge');
  } else {
    headerQuestion.style.display = 'none';
    questionAnswersDiv.style.display = 'none';
    quizContainer.style.display = 'none';
    enterInitialsDiv.style.display = 'none';
    saveScore.style.display = 'grid';
    document.querySelector('main').style.width = '25rem';
  }
}

function goBackBtn() {
  saveScore.style.display = 'none';
  document.querySelector('main').style.width = '55rem';
  quizContainer.style.display = '';
  headerQuestion.style.display = '';
}

function scoreClear() {
  if(highscoreList.hasChildNodes()){
    while(highscoreList.hasChildNodes()){
      highscoreList.removeChild(highscoreList.firstChild);
    }
  } else {
    alert('There are no scores to clear.');
  }
}