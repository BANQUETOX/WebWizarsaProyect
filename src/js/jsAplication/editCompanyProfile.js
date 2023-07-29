let styleElement = document.createElement("style");
const companyProfile = document.getElementById("companyForm");
const inputsCollection = document.getElementsByClassName("company-input");
const selectCollection = document.getElementsByClassName("select");
const editButton = document.getElementById("edit-button");
const saveButton = document.getElementById("save-button");
const savedChangesLabel = document.getElementById("saved-changes");

function disableSelectStyle(styleElement) {
  styleElement.textContent =
    ".select::after {background-color: rgb(222, 221, 221)}";
  document.head.appendChild(styleElement);
}
function enableSelectStyle(styleElement) {
  styleElement.textContent = ".select::after {background-color: #fff}";
  document.head.appendChild(styleElement);
}

function disableSaveButton(saveButton) {
  saveButton.disabled = true;
}

function enableSaveButton(saveButton) {
  saveButton.disabled = false;
}

function disableInputs(inputsCollection) {
  disableSelectStyle(styleElement);
  for (let i = 0; i < inputsCollection.length; i++) {
    inputsCollection[i].disabled = true;
  }
}

function enableinputs(inputsCollection) {
  enableSelectStyle(styleElement);
  for (let i = 0; i < inputsCollection.length; i++) {
    inputsCollection[i].disabled = false;
  }
}

function showSavedChanges(savedChangesLabel) {
  savedChangesLabel.style.display = "initial";
}

function hideSavedChanges(savedChangesLabel) {
  savedChangesLabel.style.display = "none";
}

disableSelectStyle(styleElement);

editButton.addEventListener("click", () => {
  hideSavedChanges(savedChangesLabel);
  enableinputs(inputsCollection);
  enableSaveButton(saveButton);
});

saveButton.addEventListener("click", () => {});

companyProfile.addEventListener("submit", (e) => {
  disableInputs(inputsCollection);
  disableSaveButton(saveButton);
  showSavedChanges(savedChangesLabel);
  e.preventDefault();
});
