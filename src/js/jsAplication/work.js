const workForm = document.getElementById("experienceForm");
const userDataForm = document.getElementById("userExtraData");
const saveMessage = document.getElementById("saved-changes");
const saveMessage_extra = document.getElementById("saved-change");
let inputsCollection = document.getElementsByClassName("addWorkExperience--input");
let errorLabel = document.getElementById("inputs-errors")
let errorLabel_extra = document.getElementById("inputs-error")
let invalidInputs = document.getElementsByClassName("work-input__invalid")
let inputsCollection_extra = document.getElementsByClassName("upload-input")
let noWorkCheckbox = inputsCollection[0];
let workHereCheckbox = document.getElementById("workHere");
let workUntil = document.getElementById("until");
let workSince = document.getElementById("since");
const addexperience = document.getElementById("upload-work")

workUntil.max = new Date().toISOString().slice(0, 10);


function verifyWorkInputs(){
    for (i = 0; i < inputsCollection.length;i++){
        if (inputsCollection[i].value == ""){
            inputsCollection[i].classList.add("work-input__invalid");
            inputsCollection[i].classList.remove("worrk-input__valid");
        } else {
            inputsCollection[i].classList.add("work-input__valid");
            inputsCollection[i].classList.remove("work-input__invalid");
        }
    }


    if (invalidInputs >=1){
        errorLabel.style.display = "initial";
        hideSavedChanges(saveMessage);
    } else{
        showSavedChanges(saveMessage);
        errorLabel.style.display = "none";

    }
}

workForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    verifyWorkInputs();

    if (invalidInputs.length === 0 ){
        showSavedChanges(saveMessage);
        errorLabel.style.display = "none"


        setTimeout(() => {
            workForm.reset();
            for (let i = 0; i< inputsCollection.length; i++){
                inputsCollection[i].classList.remove("work-input__valid");
            }
            hideSavedChanges(saveMessage);
            errorLabel.style.display = "none";
        },3000);
    } else{
        errorLabel.style.display = "initial";
        hideSavedChanges(saveMessage);
    }
});

function verifydata_form(){
  for (i = 0;i<inputsCollection_extra.length;i++){
    if (inputsCollection_extra[i].value == ""){
      inputsCollection_extra[i].classList.add("work-input__invalid");
      inputsCollection_extra[i].classList.remove("work-input__valid");

    } else{
      inputsCollection_extra[i].classList.add("work-input__valid");
      inputsCollection_extra[i].classList.remove("work-input__invalid");

    }

    if (invalidInputs.length >= 1){
      errorLabel_extra.style.display = "initial";
      hideSavedChanges(saveMessage_extra);

    } else{
      showSavedChanges(saveMessage_extra);
      errorLabel_extra.style.display = "none";

    }
  }
}

userDataForm.addEventListener("submit",(e) =>{
  e.preventDefault();
  verifyWorkInputs();
  verifydata_form();

  

  if (invalidInputs.length === 0){
    showSavedChanges(saveMessage)
    showSavedChanges(saveMessage_extra);
    errorLabel_extra.style.display = "none"
    

    setTimeout(() =>{
      userDataForm.reset();
      for (let i = 0; i < inputsCollection_extra.length; i++){
        inputsCollection_extra[i].classList.remove("work-input__valid");

      }
      hideSavedChanges(saveMessage_extra);
      hideSavedChanges(saveMessage);
      errorLabel_extra.style.display = "none";
    },3000)
  } else{
    hideSavedChanges(saveMessage_extra);
    hideSavedChanges(saveMessage);
    errorLabel_extra.style.display = "initial";
    
  }
});





function disableNoWorkExperience() {
    document.getElementById("noWorkExperience").disabled = true;
  }
  
  function disableInputs(elementList) {
    for (let i = 1; i < elementList.length; i++) {
      let element = elementList[i];
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
      for (let i = 1; i <inputsCollection.length; i++){
        inputsCollection[i].classList.remove("work-input__invalid");
      }
      errorLabel.style.display = "none";
    }else {
      enableInputs(inputsCollection);
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