//Password Validation
let passwordForm = document.getElementById("register-account--form");
let firstPasswordInput = document.getElementById("first-password");
let secondPasswordInput = document.getElementById("second-password");
let firstErrorLabel = document.getElementById("first-password--message");
let secondErrorLabel = document.getElementById("second-password--message");
let inputsCollection = document.getElementsByClassName("register-input");
let saveMessage = document.getElementById("saved-changes-cont");
let errorLabel = document.getElementById("inputs-errors-cont");
let invalidInputs = document.getElementsByClassName("text-input__invalid");
let imagePreviewBorder = document.getElementById("imagePreview");
const passwordInput = document.getElementById("first-password");
const secondpasswordInput = document.getElementById("second-password");
const eyeIcon = document.getElementById("eye-icon");
const second_eyeIcon = document.getElementById("second_eye-icon");
const eyeToggle = document.getElementsByClassName("password-toggle");
alingEyes();

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
  alingEyes();
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
  alingEyes();
});

// All inputs verification

function verifyInputs() {
  for (let i = 0; i < inputsCollection.length; i++) {
    if (inputsCollection[i].value == "") {
      inputsCollection[i].classList.add("text-input__invalid");
      inputsCollection[i].classList.remove("text-input__valid");
      if (inputsCollection[i].type == "file") {
        imagePreviewBorder.classList.add("text-input__invalid");
        imagePreviewBorder.classList.remove("text-input__valid");
      }
    } else {
      inputsCollection[i].classList.add("text-input__valid");
      inputsCollection[i].classList.remove("text-input__invalid");
      if (inputsCollection[i].type == "file") {
        imagePreviewBorder.classList.add("text-input__valid");
        imagePreviewBorder.classList.remove("text-input__invalid");
      }
    }
  }
  if (invalidInputs.length >= 1) {
    errorLabel.style.display = "initial";
    hideSavedChanges(saveMessage);
    return false;
  } else {
    showSavedChanges(saveMessage);
    errorLabel.style.display = "none";
    return true;
  }
}

passwordForm.addEventListener("submit", (e) => {
  let inputsVerifyed = verifyInputs();
  if (
    checkTwoPasswords(firstPasswordInput.value, secondPasswordInput.value) &&
    isValidPassword(firstPasswordInput.value) &&
    inputsVerifyed
  ) {
    passwordForm.submit();
    setTimeout(() => {
      window.location.href = "/sne/newRegister";
    }, 3000);
  }
  e.preventDefault();
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
    eyeToggle[0].style.top = "-95px";
    eyeToggle[1].style.top = "-62px";
  } else if (secondPasswordInput.classList.contains("text-input__invalid")) {
    eyeToggle[0].style.top = "-62px";
    eyeToggle[1].style.top = "-95px";
  }
  if (
    firstPasswordInput.classList.contains("text-input__invalid") &&
    secondPasswordInput.classList.contains("text-input__invalid")
  ) {
    for (let i = 0; i < eyeToggle.length; i++) {
      eyeToggle[i].style.top = "-95px";
    }
  }
}

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
