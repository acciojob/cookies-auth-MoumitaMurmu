//your JS code here. If required.

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password are correct (this is just a placeholder)
  if (username === 'user' && password === 'password') {
    // Set a cookie with the username
    document.cookie = `username=${username}; expires=${getExpirationDate()}; path=/`;

    alert('Login successful!');

    // Redirect to another page or perform other actions as needed
    // window.location.href = '/dashboard.html';
  } else {
    alert('Invalid username or password');
  }
}

function getExpirationDate() {
  const expirationDate = new Date();
  // Set the cookie expiration date to one day from now
  expirationDate.setDate(expirationDate.getDate() + 1);
  return expirationDate.toUTCString();
}

// Function to check if the user is already logged in
function checkLogin() {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'username') {
      alert(`Welcome back, ${value}!`);
      return;
    }
  }
}

// Check if the user is already logged in when the page loads
document.addEventListener('DOMContentLoaded', checkLogin);
