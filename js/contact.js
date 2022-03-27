const form = document.querySelector("#contactForm");

const nameLine = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#emailAddress");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const question = document.querySelector("#question");
const questionError = document.querySelector("#questionError");

const validationComplete = document.querySelector(".validationComplete");
validationComplete.innerHTML = "";
function validateForm(event) {
  event.preventDefault();

  let nameIsValid = false;
  let emailIsValid = false;
  let subjectIsValid = false;
  let questionIsValid = false;

  if (checkLength(nameLine.value, 0)) {
    nameError.style.display = "none";
    nameIsValid = true;
  } else {
    nameError.style.display = "block";
    nameIsValid = false;
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
    emailIsValid = true;
  } else {
    emailError.style.display = "block";
    emailIsValid = false;
  }

  if (checkLength(subject.value, 10)) {
    subjectError.style.display = "none";
    subjectIsValid = true;
  } else {
    subjectError.style.display = "block";
    subjectIsValid = false;
  }

  if (checkLength(question.value, 10)) {
    questionError.style.display = "none";
    questionIsValid = true;
  } else {
    questionError.style.display = "block";
    questionIsValid = false;
  }

  if (nameIsValid && emailIsValid && subjectIsValid && questionIsValid) {
    validationComplete.innerHTML += `<h4 class="validation-text">Question submitted</h4>`;
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
