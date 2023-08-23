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





const permissionFormulary = document.getElementById("access-form");
const saveMessage = document.getElementById("saved-changes");

let inputEmail = document.getElementsByClassName("input-email_landing");
let errorEmail = document.getElementById("error-email_message");

let inputPassword = document.getElementsByClassName("input-password-landing");
let errorPassword = document.getElementById("error-password-message");

let invalidInput = document.getElementsByClassName("invalid-input-landing");
let errorGeneral = document.getElementById("general-error-message");


function verifyInputEmail () {
  for (let i = 0; i < inputEmail.length; i++) {
    if (inputEmail[i].value == "") { //? Fomrulario esta vacio
      inputEmail[i].classList.add("invalid-input-landing");
      inputEmail[i].classList.remove("valid-input-landing");
      errorEmail.style.display = "initial";


    } 
     else {  // TODO Este es cuando el formualario se lleno correctamente

      inputEmail[i].classList.add("valid-input-landing");
      inputEmail[i].classList.remove("invalid-input-landing");
      errorEmail.style.display = "none";
    }
  }

  // if (invalidInput.length >= 1) {
  //   errorEmail.style.display = "initial";

  // } else {
  //   errorEmail.style.display = "none";
  // }

}

function verifyInputPassword () {
  for (let i = 0; i < inputPassword.length; i++) {
    if (inputPassword[i].value == "") { //? Fomrulario esta vacio
      inputPassword[i].classList.add("invalid-input-landing");
      inputPassword[i].classList.remove("valid-input-landing");
      errorPassword.style.display = "initial";
    } else { // TODO Este es cuando el formualario se lleno correctamente
      inputPassword[i].classList.add("valid-input-landing");
      inputPassword[i].classList.remove("invalid-input-landing");
      errorPassword.style.display = "none";
    }
  }

  // if (invalidInput.length >= 1) {
  //   errorPassword.style.display = "initial";

    
  // } else {
  //   errorPassword.style.display = "none";
    
  // }


}

permissionFormulary.addEventListener("submit", (e) => {
  e.preventDefault();
  verifyInputEmail();
  verifyInputPassword();

  if (invalidInput.length === 0) {

    

    errorEmail.style.display = "none";
    errorPassword.style.display = "none";

    setTimeout(() => {
      permissionFormulary.reset();
      for (let i = 0; i < inputEmail.length; i++) {
        inputEmail[i].classList.remove("invalid-input-landing");

        inputEmail[i].classList.remove("valid-input-landing");

      }      
      hideSavedChanges(saveMessage);
      errorEmail.style.display = "none";
 
      for (let i = 0; i < inputPassword.length; i++) {
       inputPassword[i].classList.remove("invalid-input-landing");

       inputPassword[i].classList.remove("valid-input-landing");

      }  
      hideSavedChanges(saveMessage);
      errorPassword.style.display = "none";
    }, 3000);

  } else {
    //errorGeneral.style.display = "initial";
    hideSavedChanges(saveMessage);
  }
});

