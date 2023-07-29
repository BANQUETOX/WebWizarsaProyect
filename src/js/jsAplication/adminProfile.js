let styleElement = document.createElement("style");
const inputsCollection = document.getElementsByClassName("profile-input");
// disableInputs(inputsCollection);
// disableSelectStyle(styleElement);

$("#imageUpload").change(function () {
  if (this.files[0].size > 20000000) {
    document
      .getElementById("avatar-preview")
      .classList.add("avatar-preview__error");
    this.value = "";
  } else {
    document
      .getElementById("avatar-preview")
      .classList.remove("avatar-preview__error");
    readURL(this);
  }
});
