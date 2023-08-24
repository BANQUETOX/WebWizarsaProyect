const SALARYRANGEINPUT = document.getElementById("salary-range-input");
let salaryRangeValue = document.getElementById("salary-value");
let filterRefresh = document.getElementById('filter-refresh')

SALARYRANGEINPUT.oninput = () => {
  salaryRangeValue.innerHTML = SALARYRANGEINPUT.value + "₡";
};

filterRefresh.addEventListener("click", () => {
  location.reload()
})