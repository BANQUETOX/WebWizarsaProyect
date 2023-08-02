const companyFormulary = document.getElementById("companyForm");
const saveMessage = document.getElementById("saved-changes");

let inputsCollection = document.getElementsByClassName("company-input");
let inputsSelectsCollection = document.getElementsByClassName("select");
let errorLabel = document.getElementById("inputs-errors");
let invalidInputs = document.getElementsByClassName("company-input__invalid");
let inputsErrorLabels = document.getElementsByClassName("error--input-label");

function verifyComapanyinputs() {
  for (let i = 0; i < inputsCollection.length; i++) {
    if (inputsCollection[i].value == "") {
      inputsCollection[i].classList.add("company-input__invalid");
      inputsCollection[i].classList.remove("company-input__valid");
      //   inputsErrorLabels[i].style.display = "initial";
      if (inputsCollection[i].type == "select-one") {
        inputsCollection[i].classList.remove("company-input__invalid");
        inputsCollection[i].classList.remove("company-input__valid");
        inputsSelectsCollection[i - 7].classList.add("company-input__invalid");
        inputsSelectsCollection[i - 7].classList.remove("company-input__valid");
      }
    } else {
      inputsCollection[i].classList.add("company-input__valid");
      inputsCollection[i].classList.remove("company-input__invalid");
      //   inputsErrorLabels[i].style.display = "none";
      if (inputsCollection[i].type == "select-one") {
        inputsCollection[i].classList.remove("company-input__invalid");
        inputsCollection[i].classList.remove("company-input__valid");
        inputsSelectsCollection[i - 7].classList.add("company-input__valid");
        inputsSelectsCollection[i - 7].classList.remove(
          "company-input__invalid"
        );
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
