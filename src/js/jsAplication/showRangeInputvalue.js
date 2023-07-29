const SALARYRANGEINPUT = document.getElementById("salary-range-input");
let salaryRangeValue = document.getElementById("salary-value");

SALARYRANGEINPUT.oninput = () => {
  salaryRangeValue.innerHTML = SALARYRANGEINPUT.value + "₡";
};
