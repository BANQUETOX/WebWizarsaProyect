let experinceForm = document.getElementById('experienceForm')
let userDataForm = document.getElementById('userExtraData')
let inputsCollection =document.getElementsByClassName("addWorkExperience--input")
let noWorkCheckbox = inputsCollection[0]
let workHereCheckbox = document.getElementById("workHere")
let workUntil = document.getElementById("until")
let workSince = document.getElementById("since")

let genericUser = {
    workEperiences:[],
}
workUntil.max = new Date().toISOString().slice(0, 10)

function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function verifyInputs(elementList){
    for (let i=1; i < elementList.length; i++){
        let element = elementList[i]
        if (element.value == ""){
            element.classList.add('addWorkExperience--input__alert')
            console.log("vacio")
        }
    }

}

function disableNoWorkExperience(){
    document.getElementById("noWorkExperience").disabled = true
}

function disableInputs(elementList){
    for (let i=1; i < elementList.length; i++){
        let element = elementList[i]
        element.disabled = true
        element.value = ""
        if (element.type == "checkbox"){
            element.checked = false
        }
    }
    disableWorkButton()
}

function disableWorkButton(){
    let button = document.getElementById('upload-work')
    button.disabled = true
    button.classList.add('button--disabled')
}

function enableWorkButton(){
    let button = document.getElementById('upload-work')
    button.disabled = false
    button.classList.remove('button--disabled')

}

function enableInputs(elementList){
    for (let i= 1; i < elementList.length; i++){
        elementList[i].disabled = false
    }
    enableWorkButton()

}

function createWorkExperienceObject(){
    return {
        jobPosition: document.getElementById("workPosition").value,
        company: document.getElementById("company").value ,
        location:document.getElementById("location").value ,
        since:document.getElementById("since").value,
        until: document.getElementById("until").value,
        workHere: document.getElementById("workHere").checked,
        description: document.getElementById("jobDescription").value
    }
}


function attachWorkExperiencesToUser(user,workExperienceObject){
    user.workEperiences.push(workExperienceObject)
}
function attachProfilepictureToUser(user){
    user.profilePicture = document.getElementById("imageUpload").value
}

function attachSheetsToUser(user){
    user.liveSheet = document.getElementById("lifeSheet").value
    user.crimeSheet = document.getElementById("crimeSheet").value
}
workHereCheckbox.addEventListener('change', function(){
    if (this.checked) {
        workUntil.value =  new Date().toISOString().slice(0, 10)
      } else {
        workUntil.value = ""
      }
})

noWorkCheckbox.addEventListener('change', function() {
    if (this.checked) {
      disableInputs(inputsCollection)
    } else {
      enableInputs(inputsCollection)
    }
  });

  $("#imageUpload").change(function(){
    if(this.files[0].size > 20000000){
        document.getElementById('avatar-preview').classList.add('avatar-preview__error')
        this.value = "";
     }
     else{
        document.getElementById('avatar-preview').classList.remove('avatar-preview__error')
         readURL(this)
     }
});

experinceForm.addEventListener("submit", function(e){
    verifyInputs(inputsCollection)
    attachWorkExperiencesToUser(genericUser,createWorkExperienceObject())
    disableInputs(inputsCollection)
    enableInputs(inputsCollection)
    disableNoWorkExperience()
    e.preventDefault()
})

// userDataForm.addEventListener("submit",function(e){
//     attachProfilepictureToUser(genericUser)
//     attachSheetsToUser(genericUser)
//     e.preventDefault()
// })

