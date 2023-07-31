const inviteForm = document.getElementById("invite-formulary");
const savedChangesLabel = document.getElementById("saved-changes");

inviteForm.addEventListener("submit", (e) => {
  showSavedChanges(savedChangesLabel);
  inviteForm.reset();
  setTimeout(() => {
    savedChangesLabel.style.display = "none";
  }, 3000);
  e.preventDefault();
});
