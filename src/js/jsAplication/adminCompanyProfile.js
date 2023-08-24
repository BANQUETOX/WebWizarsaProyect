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

function confirmSave() {
  var message = "Se han guardado los cambios";
  var result = alert(message);
}

const profileForm = document.getElementById("company-profile-form");
let saveChangesButton = document.getElementById("profile-save-button");
saveChangesButton.addEventListener("click", () => {
  profileForm.submit();
  confirmSave();
});
