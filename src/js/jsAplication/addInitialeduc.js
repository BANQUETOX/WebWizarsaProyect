const user_initial_form =  document.getElementById("formulary_initialEducation");
const saveMessage = document.getElementById("saved-changes")

let inputsCollection = document.getElementsByClassName("user_initialeduc-input");
let inputsSelectsCollection = document.getElementsByClassName("select");
let errorLabel = document.getElementById("inputs-errors");
let invalidInputs = document.getElementsByClassName("user-input__invalid");

function verify_InitialEducationinputs(){
    for (let i = 0; i < inputsCollection.length;i++){
        if (inputsCollection[i].value == ""){
            inputsCollection[i].classList.add("user-input__invalid");
            inputsCollection[i].classList.remove("user-input__valid");
            if (inputsCollection[i].type == "select-one"){
                inputsCollection[i].classList.remove("user-input__invalid");
                inputsCollection[i].classList.remove("user-input__valid");
                inputsSelectsCollection[i].classList.add("user-input__invalid");
                inputsSelectsCollection[i].classList.remove("user-input__valid");

            }
        } else{
            inputsCollection[i].classList.add("user-input__valid");
            inputsCollection[i].classList.remove("user-input__invalid");
            if (inputsCollection[i].type == "select-one"){
                inputsCollection[i].classList.remove("user-input__invalid");
                inputsCollection[i].classList.remove("user-input__valid");
                inputsSelectsCollection[i].classList.add("user-input__valid");
                inputsSelectsCollection[i].classList.remove("user-input__invalid");
            }
        }
        
    }
    if (invalidInputs >= 1){
        errorLabel.style.display = "initial";
        hideSavedChanges(saveMessage);

    } else{
        showSavedChanges(saveMessage);
        errorLabel.style.display = "none";

    }
}

user_initial_form.addEventListener("submit",(e) => {
    e.preventDefault();
    verify_InitialEducationinputs();

    if(invalidInputs.length === 0){
        showSavedChanges(saveMessage);
        errorLabel.style.display = "none";
        
        setTimeout(() =>{
            user_initial_form.reset();
            for (let i = 0; i < inputsCollection.length; i++) {
                inputsCollection[i].classList.remove("user-input__valid");
              }
            for (let i = 0; i <inputsSelectsCollection.length; i++ ) {
                inputsSelectsCollection[i].classList.remove("user-input__valid");
            }
            hideSavedChanges(saveMessage);
            errorLabel.style.display = "none"
        },3000);
    } else{
        errorLabel.style.display = "initial";
        hideSavedChanges(saveMessage);
    }
});