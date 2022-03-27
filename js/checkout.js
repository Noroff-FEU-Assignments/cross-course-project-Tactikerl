const form = document.querySelector("#checkoutForm");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#nameError");

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#nameError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const cityName = document.querySelector("#city");
const cityNameError = document.querySelector("#cityError");

const zipCode = document.querySelector("#zipCode");
const zipCodeError = document.querySelector("#zipCodeError");

const emailAddress = document.querySelector("#email");
const emailAddressError = document.querySelector("#emailError");

const phoneNumber = document.querySelector("#phone");
const phoneNumberError = document.querySelector("#phoneNumberError");

const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardError");

const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");

const validationComplete = document.querySelector(".validationComplete");
validationComplete.innerHTML = "";
function validateForm(event) {
  event.preventDefault();

  let firstNameValid = false;
  let lastNameValid = false;
  let addressValid = false;
  let cityNameValid = false;
  let zipCodeValid = false;
  let emailValid = false;
  let phoneNumberValid = false;
  let cardNumberValid = false;
  let cvcValid = false;

  if (checkLength(firstName.value, 0)) {
    firstNameError.style.display = "none";
    firstNameValid = true;
  } else {
    firstNameError.style.display = "block";
    firstNameValid = false;
  }

  if (checkLength(lastName.value, 0)) {
    lastNameError.style.display = "none";
    lastNameValid = true;
  } else {
    lastNameError.style.display = "block";
    lastNameValid = false;
  }

  if (checkLength(address.value, 5)) {
    addressError.style.display = "none";
    addressValid = true;
  } else {
    addressError.style.display = "block";
    addressValid = false;
  }

  if (checkLength(cityName.value, 0)) {
    cityNameError.style.display = "none";
    cityNameValid = true;
  } else {
    cityNameError.style.display = "block";
    cityNameValid = false;
  }

  if (checkLength(zipCode.value, 4)) {
    zipCodeError.style.display = "none";
    zipCodeValid = true;
  } else {
    zipCodeError.style.display = "block";
    zipCodeValid = false;
  }

  if (validateEmail(emailAddress.value)) {
    emailAddressError.style.display = "none";
    emailValid = true;
  } else {
    emailAddressError.style.display = "block";
    emailValid = false;
  }

  if (checkLength(phoneNumber.value, 8)) {
    phoneNumberError.style.display = "none";
    phoneNumberValid = true;
  } else {
    phoneNumberError.style.display = "block";
    phoneNumberValid = false;
  }

  if (checkLength(cardNumber.value, 16)) {
    cardNumberError.style.display = "none";
    cardNumberValid = true;
  } else {
    cardNumberError.style.display = "block";
    cardNumberValid = false;
  }

  if (checkLength(cvc.value, 3)) {
    cvcError.style.display = "none";
    cvcValid = true;
  } else {
    cvcError.style.display = "block";
    cvcValid = false;
  }

  if (
    firstNameValid &&
    lastNameValid &&
    addressValid &&
    cityNameValid &&
    zipCodeValid &&
    emailValid &&
    phoneNumberValid &&
    cardNumberValid &&
    cvcValid
  ) {
    window.location = "checkoutsuccess.html";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
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
