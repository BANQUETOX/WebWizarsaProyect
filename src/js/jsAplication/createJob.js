const jobForm = document.getElementById("job-creation-form");
const saveMessage = document.getElementById("saved-changes");
let inputsCollection = document.getElementsByClassName("job-input");
let inputsSelectsCollection = document.getElementsByClassName("select");
let errorLabel = document.getElementById("inputs-error");
let invalidInputs = document.getElementsByClassName("job-input__invalid");

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

  if (invalidInputs.length >= 1) {
    errorLabel.style.display = "initial";
    hideSavedChanges(saveMessage);
  } else {
    showSavedChanges(saveMessage);
    errorLabel.style.display = "none";
  }
}

/*jobForm.addEventListener("submit", (e) => {
  verifyJobInputs();
  e.preventDefault();
});*/
//?-----------------------------------/
jobForm.addEventListener("submit", (e) => {
  e.preventDefault();
  verifyJobInputs();
  if (invalidInputs.length === 0) {
    showSavedChanges(saveMessage);
    errorLabel.style.display = "none";
    jobForm.submit();
    setTimeout(() => {
      jobForm.reset();
      for (let i = 0; i < inputsCollection.length; i++) {
        inputsCollection[i].classList.remove("job-input__valid");
      }
      for (let i = 0; i < inputsSelectsCollection.length; i++) {
        inputsSelectsCollection[i].classList.remove("job-input__valid");
      }
      hideSavedChanges(saveMessage);
      errorLabel.style.display = "none";
    }, 3000);
  } else {
    errorLabel.style.display = "initial";
    hideSavedChanges(saveMessage);
  }
});
