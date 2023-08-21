//Password Validation
let passwordForm = document.getElementById("register-account--form");
let firstPasswordInput = document.getElementById("first-password");
let secondPasswordInput = document.getElementById("second-password");
let firstErrorLabel = document.getElementById("first-password--message");
let secondErrorLabel = document.getElementById("second-password--message");
let inputsCollection = document.getElementsByClassName("register-input");
let saveMessage = document.getElementById("saved-changes");
let errorLabel = document.getElementById("inputs-errors");
let invalidInputs = document.getElementsByClassName("text-input__invalid");
let imagePreviewBorder = document.getElementById("imagePreview");

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
