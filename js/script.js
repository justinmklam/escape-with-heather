let questions = [];  // Will hold the selected team's questions
let currentQuestion = getQuestionFromURL() || 0;

const jsConfetti = new JSConfetti();

function selectTeam(team) {
  // Update the URL to include the selected team
  let newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + `?team=${team}`;
  window.location.href = newURL;  // Navigate to the updated URL
}

function startGame() {
  let team = getTeamFromURL();
  let questionprefix = getQuestionPrefixFromURL();
  // Get the pathname
  const path = window.location.pathname;

  // Extract the filename (e.g., orders.html)
  const filename = path.substring(path.lastIndexOf('/') + 1);

  if (!team) {
    // Stay on start page if no team is selected
    return;
  }
  // Load questions for the appropriate team

  console.log(filename)
  let questionVarName = "";
  // Do this because I printed the QR code before changing it to use index.html for all questions
  if (filename == "order.html") {
    questionVarName = "orders_" + team;
  }
  else {
    // If underscore is in the name, use that as the variable name
    if (questionprefix.indexOf('_') > -1) {
      questionVarName = questionprefix;
    }
    else {
      questionVarName = questionprefix + "_" + team;
    }
  }
  
  console.log("Question Prefix: " + questionVarName);
  questions = eval(questionVarName);

  document.getElementById('start-page').style.display = 'none';  // Hide the start page
  document.getElementById('question-page').style.display = 'block';  // Show the questions
  loadQuestion();
}

function checkAnswer() {
  let team = getTeamFromURL();
  let userAnswer = document.getElementById('answer').value.trim().toLowerCase();
  let correctAnswer = questions[currentQuestion].answer.toLowerCase();
  let message = questions[currentQuestion].message;
  if (message instanceof Object) {
    message = message[team];
  }

  if (userAnswer === correctAnswer) {
    jsConfetti.addConfetti();
    currentQuestion++;
    if (currentQuestion < questions.length) {
      // updateURL(currentQuestion);  // Update the URL
      // Wait a bit for the confetti to animate before showing the next question
      setTimeout(function () {
        loadQuestion();
      }, 1000);
    } else {
      document.getElementById('question').innerHTML = message;
      document.getElementById('answer').style.display = 'none';
      document.getElementById('message').style.display = 'none';
      document.getElementById('btn-submit').style.display = 'none';
      document.getElementById('game-image').style.display = 'none';  // Hide the image
    }
  } else {
    document.getElementById('message').innerText = "Incorrect, try again.";
  }
}

function loadQuestion() {
  let currentData = questions[currentQuestion];

  // Load the question text
  if (currentData.question.indexOf('<') > -1) {
    document.getElementById('question').innerHTML = currentData.question;
  }
  else {
    document.getElementById('question').innerText = currentData.question;
  }

  // Clear the input field and message
  document.getElementById('answer').value = '';
  document.getElementById('message').innerText = '';

  // Display the image if available
  if (currentData.image) {
    document.getElementById('game-image').src = currentData.image;
    document.getElementById('game-image').style.display = 'block';
  } else {
    document.getElementById('game-image').style.display = 'none';
  }
}

function updateURL(questionIndex) {
  let team = getTeamFromURL();
  let newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + `?team=${team}&question=${questionIndex}`;
  window.history.pushState({ path: newURL }, '', newURL);  // Update the URL without reloading
}

function getQuestionFromURL() {
  let params = new URLSearchParams(window.location.search);
  return params.has('question') ? parseInt(params.get('question')) : null;
}

function getTeamFromURL() {
  let params = new URLSearchParams(window.location.search);
  return params.get('team');  // Return the team from the URL
}

function getQuestionPrefixFromURL() {
  let params = new URLSearchParams(window.location.search);
  return params.get('questionprefix');  // Return the team from the URL
}
// Ensure the correct question loads if the page is refreshed or URL is shared
window.onload = function () {
  startGame();
};

