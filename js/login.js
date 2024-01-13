var userEmailInput = document.getElementById('floatingInputEmail');
var userPasswordInput = document.getElementById('floatingInputPassword');
var requiredMsg = document.getElementById('required');
var incorrectMsg = document.getElementById('incorrect');

document.getElementById('loginBtn').addEventListener('click', login);

function login() {
  var email = userEmailInput.value.trim();
  var password = userPasswordInput.value.trim();

  if (email === '' || password === '') {
    requiredMsg.classList.remove('d-none');
    return;
  }

  requiredMsg.classList.add('d-none');

  // Get the existing users from local storage
  var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  var user = existingUsers.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    // If the email and password match, redirect to the home page
    window.location.href = 'home.html';
  } else {
    // If the email and password don't match, show an error message
    incorrectMsg.classList.remove('d-none');
  }
}
