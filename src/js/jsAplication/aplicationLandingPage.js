const loginFormulary = document.getElementById("aplication-landing-form");
const saveMessage = document.getElementById("saved-changes");

let inputsCollection = document.getElementsByClassName(
  "aplication-landing-input"
);
let errorLabel = document.getElementById("inputs-error");
let invalidInputs = document.getElementsByClassName("login-input__invalid");

const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eye-icon");

eyeIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
});

function verifyLoginForm() {
  for (let i = 0; i < inputsCollection.length; i++) {
    if (inputsCollection[i].value == "") {
      inputsCollection[i].classList.add("login-input__invalid");
      inputsCollection[i].classList.remove("login-input__valid");
    } else {
      inputsCollection[i].classList.add("login-input__valid");
      inputsCollection[i].classList.remove("login-input__invalid");
    }
  }
  if (invalidInputs.length >= 1) {
    errorLabel.style.display = "initial";
    hideSavedChanges(saveMessage);
  } else {
    showSavedChanges(saveMessage);
    errorLabel.style.display = "none";
  }
}
loginFormulary.addEventListener("submit", (e) => {
  verifyLoginForm();
  if (invalidInputs.length === 0) {
    loginFormulary.submit();
    showSavedChanges(saveMessage);
    errorLabel.style.display = "none";
    setTimeout(() => {
      loginFormulary.reset();
      for (let i = 0; i < inputsCollection.length; i++) {
        inputsCollection[i].classList.remove("login-input__valid");
      }
      hideSavedChanges(saveMessage);
      errorLabel.style.display = "none";
    }, 3000);
  } else {
    errorLabel.style.display = "initial";
    hideSavedChanges(saveMessage);
  }
});
