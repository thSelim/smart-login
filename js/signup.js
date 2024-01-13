var userNameInput = document.getElementById('floatingInputName');
var userEmailInput = document.getElementById('floatingInputEmail');
var userPasswordInput = document.getElementById('floatingInputPassword');

var usersList = [];

document
  .getElementById('signupBtn')
  .addEventListener('click', function addUser() {
    if (validationName() && validationEmail() && validatePassword()) {
      var user = {
        name: userNameInput.value,
        email: userEmailInput.value,
        password: userPasswordInput.value,
      };
      usersList.push(user);

      var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      var users = existingUsers.concat(usersList);
      localStorage.setItem('users', JSON.stringify(users));

      clearForm();

      window.location.href = 'index.html';
      // window.open('index.html');
    }
  });

function clearForm() {
  userNameInput.value = '';
  userEmailInput.value = '';
  userPasswordInput.value = '';

  userNameInput.classList.remove('is-valid');
  userEmailInput.classList.remove('is-valid');
  userPasswordInput.classList.remove('is-valid');
}

var nameMsg = document.getElementById('nameMsg');
userNameInput.addEventListener('input', validationName);
function validationName() {
  var nameText = userNameInput.value;
  var regexName = /^[A-Z][a-z]{3,8}$/;
  if (regexName.test(nameText)) {
    userNameInput.classList.add('is-valid');
    userNameInput.classList.remove('is-invalid');
    nameMsg.classList.add('d-none');
    return true;
  } else {
    userNameInput.classList.add('is-invalid');
    userNameInput.classList.remove('is-valid');
    nameMsg.classList.remove('d-none');
    nameMsg.innerHTML =
      'Name must start with a capital letter and contain between 3 to 8 letters';
    return false;
  }
}

var emailMsg = document.getElementById('emailMsg');
userEmailInput.addEventListener('input', validationEmail);
function validationEmail() {
  var emailText = userEmailInput.value;
  var regexEmail =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (regexEmail.test(emailText)) {
    userEmailInput.classList.add('is-valid');
    userEmailInput.classList.remove('is-invalid');
    emailMsg.classList.add('d-none');
    return true;
  } else {
    userEmailInput.classList.add('is-invalid');
    userEmailInput.classList.remove('is-valid');
    emailMsg.classList.remove('d-none');
    emailMsg.innerText = 'Invalid format\nExample: example@mail.com';
    return false;
  }
}

var passwordMsg = document.getElementById('passwordMsg');
userPasswordInput.addEventListener('input', validatePassword);
function validatePassword() {
  var passText = userPasswordInput.value;
  var regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regexPass.test(passText)) {
    userPasswordInput.classList.add('is-valid');
    userPasswordInput.classList.remove('is-invalid');
    passwordMsg.classList.add('d-none');
    return true;
  } else {
    userPasswordInput.classList.add('is-invalid');
    userPasswordInput.classList.remove('is-valid');
    passwordMsg.classList.remove('d-none');
    passwordMsg.innerHTML =
      'Must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number';
    return false;
  }
}
