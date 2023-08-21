//access form 



const permissionFormulary = document.getElementById("access-form");
const saveMessage = document.getElementById("saved-changes");

let inputEmail = document.getElementsByClassName("input-email_landing");
let errorEmail = document.getElementById("error-email_message");

let inputPassword = document.getElementsByClassName("input-password-landing");
let errorPassword = document.getElementById("error-password-message");

let invalidInput = document.getElementsByClassName("invalid-input-landing");
let errorGeneral = document.getElementById("general-error-message");


function verifyInputEmail () {
  for (let i = 0; i < inputEmail.length; i++) {
    if (inputEmail[i].value == "") { //? Fomrulario esta vacio
      inputEmail[i].classList.add("invalid-input-landing");
      inputEmail[i].classList.remove("valid-input-landing");

    } else { // TODO Este es cuando el formualario se lleno correctamente
      inputEmail[i].classList.add("valid-input-landing");
      inputEmail[i].classList.remove("invalid-input-landing");
    }
  }
  if (invalidEmail.length >= 1) {
    errorEmail.style.display = "initial";

  } else {
    showSavedChanges(saveMessage);
    errorEmail.style.display = "none";
  }
}

function verifyInputPassword () {
  for (let i = 0; i < inputEmail.length; i++) {
    if (inputPassword[i].value == "") { //? Fomrulario esta vacio
      inputPassword[i].classList.add("invalid-input-landing");
      inputPassword[i].classList.remove("valid-input-landing");
      
    } else { // TODO Este es cuando el formualario se lleno correctamente
      inputPassword[i].classList.add("valid-input-landing");
      inputPassword[i].classList.remove("invalid-input-landing");
    }
  }
  if (invalidPassword.length >= 1) {
    errorPassword.style.display = "initial";

  } else {
    showSavedChanges(saveMessage);
    errorPassword.style.display = "none";
  }
}

permissionFormulary.addEventListener("submit", (e) => {
  e.preventDefault();
  verifyInputEmail();
  verifyInputPassword();

  if (invalidInput.length === 0) {
    showSavedChanges(saveMessage);
    errorEmail.style.display = "none";
    errorPassword.style.display = "none";

    setTimeout(() => {
      permissionFormulary.reset();
      for (let i = 0; i < inputEmail.length; i++) {
        inputEmail[i].classList.remove("invalid-input-landing");
      }      
      hideSavedChanges(saveMessage);
      errorEmail.style.display = "none";
 
      for (let i = 0; i < inputPassword.length; i++) {
       inputPassword[i].classList.remove("invalid-input-landing");
      }  
      hideSavedChanges(saveMessage);
      errorPassword.style.display = "none";
    }, 3000);

  } else {
    errorGeneral.style.display = "initial";
    hideSavedChanges(saveMessage);
  }
});
