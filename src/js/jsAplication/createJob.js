const jobForm = document.getElementById("job-creation-form");
const saveMessage = document.getElementById("saved-changes");
let inputsCollection = document.getElementsByClassName("job-input");
let inputsSelectsCollection = document.getElementsByClassName("select");

function verifyJobInputs() {
  for (let i = 0; i < inputsCollection.length; i++) {
    if (inputsCollection[i].value == "") {
      inputsCollection[i].classList.add("job-input__invalid");
      inputsCollection[i].classList.remove("job-input__valid");
      if (inputsCollection[i].type == "select-one") {
        inputsCollection[i].classList.remove("job-input__valid");
        inputsCollection[i].classList.remove("job-input__invalid");
        inputsSelectsCollection[i - 2].classList.add("job-input__invalid");
        inputsSelectsCollection[i - 2].classList.remove("job-input__valid");
      }
    } else {
      inputsCollection[i].classList.add("job-input__valid");
      inputsCollection[i].classList.remove("job-input__invalid");
      if (inputsCollection[i].type == "select-one") {
        inputsCollection[i].classList.remove("job-input__valid");
        inputsCollection[i].classList.remove("job-input__invalid");
        inputsSelectsCollection[i - 2].classList.add("job-input__valid");
        inputsSelectsCollection[i - 2].classList.remove("job-input__invalid");
      }
    }
  }
  let errorLabel = document.getElementById("inputs-error");
  let invalidInputs = document.getElementsByClassName("job-input__invalid");
  if (invalidInputs.length > 0) {
    errorLabel.style.display = "initial";
  }
}

jobForm.addEventListener("submit", (e) => {
  verifyJobInputs();
  showSavedChanges(saveMessage);
  e.preventDefault();
});
