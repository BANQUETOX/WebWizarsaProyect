const forgetPassword_Form = document.getElementById("forget__password");
const saveMessage = document.getElementById("saved-changes");

let inputsCollection = document.getElementsByClassName("forget__input");
let errorLabel = document.getElementById("inputs-errors");
let invalidInputs = document.getElementsByClassName("forget-input__invalid");

function verify_forgetPassword(){
    for (let i = 0; i < inputsCollection.length;i++){
        if (inputsCollection[i].value == ""){
             inputsCollection[i].classList.add("forget-input__invalid");
             inputsCollection[i].classList.remove("forget-input__valid");

        } else{
            inputsCollection[i].classList.add("forget-input__valid");
            inputsCollection[i].classList.remove("forget-input__invalid");
        
        }
    }
    if (invalidInputs.length >=1){
        errorLabel.style.display = "initial";
        hideSavedChanges(saveMessage);

    } else{
        showSavedChanges(saveMessage);
        errorLabel.style.display = "none";
    }

}

forgetPassword_Form.addEventListener("submit",(e) =>{
    e.preventDefault();
    verify_forgetPassword();

    if (invalidInputs.length ===0){
        showSavedChanges(saveMessage);
        errorLabel.style.display = "none";

        setTimeout(() =>{
            forget__password.reset();
            for (let i = 0; i < inputsCollection.length; i++){
                inputsCollection[i].classList.remove("forget-input__valid");
            }
            hideSavedChanges(saveMessage);
            errorLabel.style.display = "none"
        },3000);
    } else{
        hideSavedChanges(saveMessage);
        errorLabel.style.display = "initial";
    }

});

