let currentQuestion = getQuestionFromURL() || 0;

function startGame() {
    document.getElementById('start-page').style.display = 'none';  // Hide the start page
    document.getElementById('question-page').style.display = 'block';  // Show the questions
    loadQuestion();  // Load the first question
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
    let newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + `?question=${questionIndex}`;
    window.history.pushState({ path: newURL }, '', newURL);  // Update the URL without reloading
}

function getQuestionFromURL() {
    let params = new URLSearchParams(window.location.search);
    return params.has('question') ? parseInt(params.get('question')) : null;
}

// Ensure the correct question loads if the page is refreshed or URL is shared
window.onload = function() {
    if (currentQuestion !== 0) {
        startGame();  // Start directly if on a question page
    }
};

