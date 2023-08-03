const user_education_form =  document.getElementById("formulary_addEduaction");
const saveMessage = document.getElementById("saved-changes")

let inputsCollection = document.getElementsByClassName("user_eduaction-input");
let inputsSelectsCollection = document.getElementsByClassName("select");
let errorLabel = document.getElementById("inputs-errors");
let invalidInputs = document.getElementsByClassName("user-eduction-input__invalid");

function verify_Educationinputs(){
    for (let i = 0; i < inputsCollection.length ;i++){
        if(inputsCollection[i].value == ""){
            inputsCollection[i].classList.add("user-eduction-input__invalid");
            inputsCollection[i].classList.remove("user-education-input__valid");
            if (inputsSelectsCollection[i].type == "select-one"){
                inputsCollection[i].classList.remove("user-education-input_invalid");
                inputsCollection[i].classList.remove("user-education-input_valid");
                inputsSelectsCollection[i].classList.add("user-education-input_invalid");
                inputsSelectsCollection[i ].classList.remove("user-education-input__valid");

            }
        } else{
            inputsCollection[i].classList.add("user-education-input__valid");
            inputsCollection[i].classList.remove("user-education-input__invalid");
            if (inputsCollection[i].type = "select_one"){
                inputsCollection[i].classList.remove("user-education-input_invalid");
                inputsCollection[i].classList.remove("user-education-input_valid");
                inputsSelectsCollection[i].classList.add("user-education-input_valid");
                inputsSelectsCollection[i ].classList.remove("user-education-input__invalid");
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

user_education_form.addEventListener("submit",(e) => {
    e.preventDefault();
    verify_Educationinputs();

    if(invalidInputs.length === 0){
        showSavedChanges(saveMessage);
        errorLabel.style.display = "none";
        
        setTimeout(() =>{
            user_education_form.reset();
            for (let i = 0; i < inputsCollection.length; i++) {
                inputsCollection[i].classList.remove("user-education-input__valid");
              }
            for (let i = 0; i <inputsSelectsCollection.length; i++ ) {
                inputsSelectsCollection[i].classList.remove("user-education-input__valid");
            }
            hideSavedChanges(saveMessage);
            errorLabel.style.display = "none"
        },3000);
    } else{
        errorLabel.style.display = "initial";
        hideSavedChanges(saveMessage);
    }
});