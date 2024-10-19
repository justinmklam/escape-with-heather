// Correct password
const correctPassword = 'climberg1rl-na1a-duri4n';

function checkPassword() {
  const inputPassword = document.getElementById('password').value;

  if (inputPassword === correctPassword) {
    // Hide the login screen
    document.getElementById('login-screen').style.display = 'none';

    // Show the fullscreen image
    document.getElementById('fullscreen-image').style.display = 'flex';
  } else {
    alert('Incorrect password. Please try again.');
  }
}

function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleButton = document.getElementById('togglePassword');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleButton.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    toggleButton.textContent = 'Show';
  }
}
