const workForm = document.getElementById("experienceForm");
const saveMessage = document.getElementById("saved-changes");
let inputsCollection = document.getElementsByClassName(
  "addWorkExperience--input"
);
let errorLabel = document.getElementById("inputs-errors");
let invalidInputs = document.getElementsByClassName("work-input__invalid");
let noWorkCheckbox = inputsCollection[0];
let workHereCheckbox = document.getElementById("workHere");
let workUntil = document.getElementById("until");
let workSince = document.getElementById("since");
const addexperience = document.getElementById("upload-work");

workUntil.max = new Date().toISOString().slice(0, 10);

function enableWorkInputs(inputsCollection) {
  for (let i = 0; i < inputsCollection.length; i++) {
    inputsCollection[i].disabled = false;
  }
}

function verifyWorkInputs() {
  for (i = 1; i < inputsCollection.length; i++) {
    if (inputsCollection[i].value == "") {
      inputsCollection[i].classList.add("work-input__invalid");
      inputsCollection[i].classList.remove("worrk-input__valid");
    } else {
      inputsCollection[i].classList.add("work-input__valid");
      inputsCollection[i].classList.remove("work-input__invalid");
    }
  }

  if (invalidInputs >= 1) {
    errorLabel.style.display = "initial";
    hideSavedChanges(saveMessage);
  } else {
    showSavedChanges(saveMessage);
    errorLabel.style.display = "none";
  }
}

workForm.addEventListener("submit", (e) => {
  verifyWorkInputs();

  if (invalidInputs.length === 0) {
    showSavedChanges(saveMessage);
    errorLabel.style.display = "none";
    workForm.submit();

    setTimeout(() => {
      workForm.reset();
      for (let i = 1; i < inputsCollection.length; i++) {
        inputsCollection[i].classList.remove("work-input__valid");
      }
      hideSavedChanges(saveMessage);
      errorLabel.style.display = "none";
    }, 3000);
  } else {
    errorLabel.style.display = "initial";
    hideSavedChanges(saveMessage);
  }
  e.preventDefault();
});

function verifydata_form() {
  for (i = 1; i < inputsCollection_extra.length; i++) {
    if (inputsCollection_extra[i].value == "") {
      inputsCollection_extra[i].classList.add("work-input__invalid");
      inputsCollection_extra[i].classList.remove("work-input__valid");
    } else {
      inputsCollection_extra[i].classList.add("work-input__valid");
      inputsCollection_extra[i].classList.remove("work-input__invalid");
    }

    if (invalidInputs.length >= 1) {
      errorLabel_extra.style.display = "initial";
      hideSavedChanges(saveMessage_extra);
    } else {
      showSavedChanges(saveMessage_extra);
      errorLabel_extra.style.display = "none";
    }
  }
}

function disableInputs(elementList) {
  for (let i = 1; i < elementList.length; i++) {
    let element = elementList[i];
    console.log(element);
    element.disabled = true;
    element.value = "";
    if (element.type == "checkbox") {
      element.checked = false;
    }
  }
  disableWorkButton();
}

noWorkCheckbox.addEventListener("change", function () {
  if (this.checked) {
    disableInputs(inputsCollection);
    addexperience.disabled = true;
    for (let i = 1; i < inputsCollection.length; i++) {
      inputsCollection[i].classList.remove("work-input__invalid");
    }
    this.disabled = false;
    errorLabel.style.display = "none";
  } else {
    enableWorkInputs(inputsCollection);
    addexperience.disabled = false;
  }
});

workHereCheckbox.addEventListener("change", function () {
  if (this.checked) {
    workUntil.value = new Date().toISOString().slice(0, 10);
  } else {
    workUntil.value = "";
  }
});
