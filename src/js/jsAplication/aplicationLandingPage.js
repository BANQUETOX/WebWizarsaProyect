const loginFormulary = document.getElementById("aplication-landing-form");
const saveMessage = document.getElementById("saved-changes");

let inputsCollection = document.getElementsByClassName("aplication-landing-input");
let errorLabel = document.getElementById("inputs-error");
let invalidInputs = document.getElementsByClassName("login-input__invalid");

function verifyLoginForm() {
  for (let i = 0; i < inputsCollection.length; i++) {
    if (inputsCollection[i].value == "") { //? Fomrulario esta vacio
      inputsCollection[i].classList.add("login-input__invalid");
      inputsCollection[i].classList.remove("login-input__valid");

    } else { // TODO Este es cuando el formualario se lleno correctamente
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
  e.preventDefault();
  verifyLoginForm();

  if (invalidInputs.length === 0) {
    showSavedChanges(saveMessage);
    errorLabel.style.display = "none";

    setTimeout(() => {
      companyForm.reset();
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
