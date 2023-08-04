let experinceForm = document.getElementById("experienceForm");
let userDataForm = document.getElementById("userExtraData");
let inputsCollection = document.getElementsByClassName(
  "addWorkExperience--input"
);
let noWorkCheckbox = inputsCollection[0];
let workHereCheckbox = document.getElementById("workHere");
let workUntil = document.getElementById("until");
let workSince = document.getElementById("since");


workUntil.max = new Date().toISOString().slice(0, 10);



function verifyInputs(elementList) {
  for (let i = 1; i < elementList.length; i++) {
    let element = elementList[i];
    if (element.value == "") {
      element.classList.add("addWorkExperience--input__alert");
      console.log("vacio");
    }
  }
}

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

function disableWorkButton() {
  let button = document.getElementById("upload-work");
  button.disabled = true;
  button.classList.add("button--disabled");
}

function enableWorkButton() {
  let button = document.getElementById("upload-work");
  button.disabled = false;
  button.classList.remove("button--disabled");
}

function enableInputs(elementList) {
  for (let i = 1; i < elementList.length; i++) {
    elementList[i].disabled = false;
  }
  enableWorkButton();
}

workHereCheckbox.addEventListener("change", function () {
  if (this.checked) {
    workUntil.value = new Date().toISOString().slice(0, 10);
  } else {
    workUntil.value = "";
  }
});

noWorkCheckbox.addEventListener("change", function () {
  if (this.checked) {
    disableInputs(inputsCollection);
  } else {
    enableInputs(inputsCollection);
  }
});

experinceForm.addEventListener("submit", function (e) {
  verifyInputs(inputsCollection);
  disableInputs(inputsCollection);
  enableInputs(inputsCollection);
  disableNoWorkExperience();
  e.preventDefault();
});


