let styleElement = document.createElement("style");
const inputsCollection = document.getElementsByClassName("profile-input");
const eyeToggle = document.getElementsByClassName("password-toggle");
const container = document.getElementsByClassName("password-input-container")
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


//Mostrar ocultar las contransenas
const passwordInput = document.getElementById("first-new-password");
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

const secondpasswordInput = document.getElementById("second-new-password")
const second_eyeIcon = document.getElementById("second_eye-icon");

second_eyeIcon.addEventListener("click", () => {
  if (secondpasswordInput.type === "password") {
    secondpasswordInput.type = "text";
    second_eyeIcon.classList.remove("fa-eye");
    second_eyeIcon.classList.add("fa-eye-slash");
  } else {
    secondpasswordInput.type = "password";
    second_eyeIcon.classList.remove("fa-eye-slash");
    second_eyeIcon.classList.add("fa-eye");
  }
});


const thirdpasswordInput = document.getElementById("confirm-password-input")
const third_eyeIcon = document.getElementById("third_eye-icon");

third_eyeIcon.addEventListener("click", () => {
  if (thirdpasswordInput.type === "password") {
    thirdpasswordInput.type = "text";
    third_eyeIcon.classList.remove("fa-eye");
    third_eyeIcon.classList.add("fa-eye-slash");
  } else {
    thirdpasswordInput.type = "password";
    third_eyeIcon.classList.remove("fa-eye-slash");
    third_eyeIcon.classList.add("fa-eye");
  }
});

function alingEyes() {
  if (
    !firstPasswordInput.classList.contains("text-input__invalid") &&
    !secondPasswordInput.classList.contains("text-input__invalid")
  ) {
    for (let i = 0; i < eyeToggle.length; i++) {
      eyeToggle[i].style.top = "-62px";
    }
  } else if (firstPasswordInput.classList.contains("text-input__invalid")) {
    container[0].style.top = "25px"
    eyeToggle[0].style.right="200px"
    eyeToggle[0].style.top="76px"
    eyeToggle[1].style.top = "-90px";
    eyeToggle[1].style.marginLeft = "-200px";
    
  } else if (secondPasswordInput.classList.contains("text-input__invalid")) {
    eyeToggle[0].style.top = "68px";
    eyeToggle[1].style.top = "-81px";
    container[1].style.top = "14px"
  }
  if (
    firstPasswordInput.classList.contains("text-input__invalid") &&
    secondPasswordInput.classList.contains("text-input__invalid")
  ) {
    eyeToggle[0].style.top="76px"
    eyeToggle[1].style.top = "-90px";
    eyeToggle[1].style.right="20px"
    container[1].style.top = "14px"

    /*for (let i = 0; i < eyeToggle.length; i++) {
      eyeToggle[i].style.top = "-95px";
    }*/
  }
}


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
  //alingInputs();
  alingEyes();
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
 // alingInputs();
  alingEyes();
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
 // alingInputs();
  alingEyes();
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

/*function alingInputs() {
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
}*/

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

