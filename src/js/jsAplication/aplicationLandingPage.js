const companyFormulary = document.getElementById("login-form");
const saveMessage = document.getElementById("saved-changes");

let inputsCollection = document.getElementsByClassName("text-input");
let errorLabel = document.getElementById("inputs-errors");
let invalidInputs = document.getElementsByClassName("company-input__invalid");
//let inputsErrorLabels = document.getElementsByClassName("error--input-label");

function verifyComapanyinputs() {
  for (let i = 0; i < inputsCollection.length; i++) {
    if (inputsCollection[i].value == "") { //? Fomrulario esta vacio
      inputsCollection[i].classList.add("company-input__invalid");
      inputsCollection[i].classList.remove("company-input__valid");
      //   inputsErrorLabels[i].style.display = "initial";
      if (inputsCollection[i].type == "select-one") {
        inputsCollection[i].classList.remove("company-input__invalid"); //? LLego y quito las otras clases para evitar que se sobrepongan
        inputsCollection[i].classList.remove("company-input__valid");
        inputsSelectsCollection[i - 7].classList.add("company-input__invalid");
        inputsSelectsCollection[i - 7].classList.remove("company-input__valid");
      }
    } else { // TODO Este es cuando el formualario se lleno correctamente
      inputsCollection[i].classList.add("company-input__valid");
      inputsCollection[i].classList.remove("company-input__invalid");
      //   inputsErrorLabels[i].style.display = "none";
      if (inputsCollection[i].type == "select-one") {
        inputsCollection[i].classList.remove("company-input__invalid");
        inputsCollection[i].classList.remove("company-input__valid");
        inputsSelectsCollection[i - 7].classList.add("company-input__valid");
        inputsSelectsCollection[i - 7].classList.remove("company-input__invalid");
      }
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
companyFormulary.addEventListener("submit", (e) => {
  e.preventDefault();
  verifyComapanyinputs();

  if (invalidInputs.length === 0) {
    showSavedChanges(saveMessage);
    errorLabel.style.display = "none";

    setTimeout(() => {
      companyForm.reset();
      for (let i = 0; i < inputsCollection.length; i++) {
        inputsCollection[i].classList.remove("company-input__valid");
      }
      for (let i = 0; i < inputsSelectsCollection.length; i++) {
        inputsSelectsCollection[i].classList.remove("company-input__valid");
      }
      hideSavedChanges(saveMessage);
      errorLabel.style.display = "none";
    }, 3000);
  } else {
    errorLabel.style.display = "initial";
    hideSavedChanges(saveMessage);
  }
});
