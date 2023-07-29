let styleElement = document.createElement("style");
const companyProfile = document.getElementById("companyForm");
const inputsCollection = document.getElementsByClassName("company-input");
const selectCollection = document.getElementsByClassName("select");
const editButton = document.getElementById("edit-button");
const saveButton = document.getElementById("save-button");
const savedChangesLabel = document.getElementById("saved-changes");

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
  disableSelectStyle(styleElement);
  showSavedChanges(savedChangesLabel);
  e.preventDefault();
});
