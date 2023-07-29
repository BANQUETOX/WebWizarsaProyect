function disableSelectStyle(styleElement) {
  styleElement.textContent =
    ".select::after {background-color: rgb(222, 221, 221)}";
  document.head.appendChild(styleElement);
}
function enableSelectStyle(styleElement) {
  styleElement.textContent = ".select::after {background-color: #fff}";
  document.head.appendChild(styleElement);
}

function disableSaveButton(saveButton) {
  saveButton.disabled = true;
}

function enableSaveButton(saveButton) {
  saveButton.disabled = false;
}

function disableInputs(inputsCollection) {
  for (let i = 0; i < inputsCollection.length; i++) {
    inputsCollection[i].disabled = true;
  }
}

function enableinputs(inputsCollection) {
  enableSelectStyle(styleElement);
  for (let i = 0; i < inputsCollection.length; i++) {
    inputsCollection[i].disabled = false;
  }
}

function showSavedChanges(savedChangesLabel) {
  savedChangesLabel.style.display = "initial";
}

function hideSavedChanges(savedChangesLabel) {
  savedChangesLabel.style.display = "none";
}

function moveToPage(pageReference) {
  window.location.href = pageReference;
}

function readURL(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      $("#imagePreview").css(
        "background-image",
        "url(" + e.target.result + ")"
      );
      $("#imagePreview").hide();
      $("#imagePreview").fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
