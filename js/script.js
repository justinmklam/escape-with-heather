let questions = [];  // Will hold the selected team's questions
let currentQuestion = getQuestionFromURL() || 0;

function selectTeam(team) {
    // Update the URL to include the selected team
    let newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + `?team=${team}`;
    window.location.href = newURL;  // Navigate to the updated URL
}

function startGame() {
    let team = getTeamFromURL();

    if(!team) {
      // Stay on start page if no team is selected
      return;
    }
    // Load questions for the appropriate team
    questions = eval(team)

    document.getElementById('start-page').style.display = 'none';  // Hide the start page
    document.getElementById('question-page').style.display = 'block';  // Show the questions
    loadQuestion();
}

function checkAnswer() {
    let userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    let correctAnswer = questions[currentQuestion].answer.toLowerCase();
    
    if (userAnswer === correctAnswer) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            updateURL(currentQuestion);  // Update the URL
            loadQuestion();
        } else {
            document.getElementById('question').innerText = "Congratulations! You've completed the escape room!";
            document.getElementById('answer').style.display = 'none';
            document.getElementById('message').style.display = 'none';
            document.querySelector('button').style.display = 'none';
            document.getElementById('game-image').style.display = 'none';  // Hide the image
        }
    } else {
        document.getElementById('message').innerText = "Incorrect, try again.";
    }
}

function loadQuestion() {
    let currentData = questions[currentQuestion];
    
    // Load the question text
    document.getElementById('question').innerText = currentData.question;
    
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

// Ensure the correct question loads if the page is refreshed or URL is shared
window.onload = function() {
    startGame();
};

