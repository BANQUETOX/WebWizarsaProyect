const jobForm = document.getElementById("job-creation-form");
const saveMessage = document.getElementById("saved-changes");

jobForm.addEventListener("submit", (e) => {
  showSavedChanges(saveMessage);
  e.preventDefault();
});
