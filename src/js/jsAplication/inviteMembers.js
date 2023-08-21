const inviteForm = document.getElementById("invite-formulary");
const saveMessage = document.getElementById("saved-changes");

let inputsCollection = document.getElementsByClassName("invite-input");
let inputsSelectsCollection = document.getElementsByClassName("select");
let errorLabel = document.getElementById("inputs-error");
let invalidInputs = document.getElementsByClassName("invite-input__invalid");

function verifyInviteinputs() {
  for (let i = 0; i < inputsCollection.length; i++) {
    if (inputsCollection[i].value == "") {
      inputsCollection[i].classList.add("invite-input__invalid");
      inputsCollection[i].classList.remove("invite-input__valid");
      if (inputsCollection[i].type == "select-one") {
        inputsCollection[i].classList.remove("invite-input__valid"); //? Esto lo que hace es quitarle la clase para que no se le sobre ponga
        inputsCollection[i].classList.remove("invite-input__invalid");
        inputsSelectsCollection[i - 3].classList.add("invite-input__invalid");
        inputsSelectsCollection[i - 3].classList.remove("invite-input__valid");
      }
    } else {
      inputsCollection[i].classList.add("invite-input__valid");
      inputsCollection[i].classList.remove("invite-input__invalid");
      if (inputsCollection[i].type == "select-one") {
        inputsCollection[i].classList.remove("invite-input__valid");
        inputsCollection[i].classList.remove("invite-input__invalid");
        inputsSelectsCollection[i - 3].classList.add("invite-input__valid");
        inputsSelectsCollection[i - 3].classList.remove(
          "invite-input__invalid"
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

inviteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  verifyInviteinputs();

  if (invalidInputs.length === 0) {
    showSavedChanges(saveMessage);
    errorLabel.style.display = "none";
    inviteForm.submit();

    setTimeout(() => {
      inviteForm.reset();
      for (let i = 0; i < inputsCollection.length; i++) {
        inputsCollection[i].classList.remove("invite-input__valid");
      }
      for (let i = 0; i < inputsSelectsCollection.length; i++) {
        inputsSelectsCollection[i].classList.remove("invite-input__valid");
      }
      hideSavedChanges(saveMessage);
      errorLabel.style.display = "none";
    }, 3000);
  } else {
    errorLabel.style.display = "initial";
    hideSavedChanges(saveMessage);
  }
});
