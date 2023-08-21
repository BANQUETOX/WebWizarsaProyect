const buttonsForm = document.getElementById("buttons-form");
const userButton = document.getElementById("registerUser");
const adminButton = document.getElementById("registerAdmin");
let buttonClicked;

userButton.addEventListener("click", () => {
  buttonClicked = "user";
});

adminButton.addEventListener("click", () => {
  buttonClicked = "admin";
});
buttonsForm.addEventListener("submit", () => {
  if (buttonClicked == "user") {
    setTimeout(() => {
      window.location.href = "/sne/app/user/addInitialEducation";
    }, 3000);
  } else {
    setTimeout(() => {
      window.location.href = "/sne/app/admin/createCompany";
    }, 3000);
  }
});
