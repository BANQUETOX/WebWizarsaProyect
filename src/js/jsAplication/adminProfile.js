let styleElement = document.createElement("style");
const inputsCollection = document.getElementsByClassName("profile-input");
$("#imageUpload").change(function () {
  if (this.files[0].size > 20000000) {
    document
      .getElementById("avatar-preview")
      .classList.add("avatar-preview__error");
    this.value = "";
  } else {
    document
      .getElementById("avatar-preview")
      .classList.remove("avatar-preview__error");
    readURL(this);
  }
});

//passwords section
let passwordForm = document.getElementById("password-form");
let firstPasswordInput = document.getElementById("first-new-password");
let firstErrorLabel = document.getElementById("first-password--message");
let firstPasswordInputContainer = document.getElementById(
  "first-password-input-container"
);
let firstEye = document.getElementById("eye");
let secondPasswordInput = document.getElementById("second-new-password");
let secondErrorLabel = document.getElementById("second-password--message");
let secondPasswordInputContainer = document.getElementById(
  "second-password-input-container"
);
let secondEye = document.getElementById("eye2");

firstPasswordInput.addEventListener("keyup", () => {
  if (isValidPassword(firstPasswordInput.value)) {
    firstPasswordInput.classList.add("text-input__valid");
    firstPasswordInput.classList.remove("text-input__invalid");
    firstErrorLabel.style.display = "none";
  } else {
    firstPasswordInput.classList.add("text-input__invalid");
    firstPasswordInput.classList.remove("text-input__valid");
    firstErrorLabel.style.display = "initial";
  }
  alingInputs();
});

firstPasswordInput.addEventListener("blur", () => {
  if (isValidPassword(firstPasswordInput.value)) {
    firstPasswordInput.classList.add("text-input__valid");
    firstPasswordInput.classList.remove("text-input__invalid");
    firstErrorLabel.style.display = "none";
  } else {
    firstPasswordInput.classList.add("text-input__invalid");
    firstPasswordInput.classList.remove("text-input__valid");
    firstErrorLabel.style.display = "initial";
  }
  alingInputs();
});

secondPasswordInput.addEventListener("keyup", () => {
  if (
    checkTwoPasswords(firstPasswordInput.value, secondPasswordInput.value) &&
    isValidPassword(firstPasswordInput.value)
  ) {
    secondPasswordInput.classList.add("text-input__valid");
    secondPasswordInput.classList.remove("text-input__invalid");
    secondErrorLabel.style.display = "none";
  } else {
    secondPasswordInput.classList.add("text-input__invalid");
    secondPasswordInput.classList.remove("text-input__valid");
    secondErrorLabel.style.display = "initial";
  }
  alingInputs();
});

secondPasswordInput.addEventListener("blur", () => {
  if (
    checkTwoPasswords(firstPasswordInput.value, secondPasswordInput.value) &&
    isValidPassword(firstPasswordInput.value)
  ) {
    secondPasswordInput.classList.add("text-input__valid");
    secondPasswordInput.classList.remove("text-input__invalid");
    secondErrorLabel.style.display = "none";
  } else {
    secondPasswordInput.classList.add("text-input__invalid");
    secondPasswordInput.classList.remove("text-input__valid");
    secondErrorLabel.style.display = "initial";
  }
  alingInputs();
});

passwordForm.addEventListener("submit", (e) => {
  if (
    checkTwoPasswords(firstPasswordInput.value, secondPasswordInput.value) &&
    isValidPassword(firstPasswordInput.value)
  ) {
    window.location.href = "https://github.com/";
  }
  e.preventDefault();
});

function alingInputs() {
  if (
    firstPasswordInput.classList.contains("text-input__invalid") &&
    secondPasswordInput.classList.contains("text-input__invalid")
  ) {
    secondPasswordInputContainer.style.marginTop = "-9px";
    secondEye.style.top = "61px";
  } else if (secondPasswordInput.classList.contains("text-input__invalid")) {
    firstPasswordInputContainer.style.marginTop = "-30px";
    firstEye.style.top = "80px";
  } else if (firstPasswordInput.classList.contains("text-input__invalid")) {
    secondPasswordInputContainer.style.marginTop = "-45px";
    secondEye.style.top = "98px";
  }
  if (firstPasswordInput.classList.contains("text-input__valid")) {
    secondPasswordInputContainer.style.marginTop = "0px";
    secondEye.style.top = "50px";
  }
}

// Habilitar inputs
let profileInputsCollection = document.getElementsByClassName("profile-input");
let changePasswordCollection = document.getElementsByClassName(
  "change-password-input"
);
let accessInputsCollection = document.getElementsByClassName("access-input");
let editProfileButton = document.getElementById("profile-edit-button");
let changePasswordEditButton = document.getElementById(
  "change-password-button"
);
let accessEditButton = document.getElementById("edit-access-button");
function enableProfileinputs(inputsCollection) {
  for (let i = 0; i < inputsCollection.length; i++) {
    inputsCollection[i].readOnly = false;
    inputsCollection[i].disabled = false;
  }
}

editProfileButton.addEventListener("click", () => {
  enableProfileinputs(profileInputsCollection);
});

changePasswordEditButton.addEventListener("click", () => {
  enableProfileinputs(changePasswordCollection);
});

accessEditButton.addEventListener("click", () => {
  enableProfileinputs(accessInputsCollection);
});

function confirmSave() {
  var message = "Se han guardado los cambios";
  var result = alert(message);

};

let saveChangesButton = document.getElementById("profile-save-button");
saveChangesButton.addEventListener("click", () => {

  confirmSave();
});

