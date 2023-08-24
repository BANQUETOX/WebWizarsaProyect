let salaryRange = document.getElementById('salary-range-input')
let salaryValue = document.getElementById('salary-value')
let filterRefresh = document.getElementById('filter-refresh')

salaryRange.oninput = ()=>{
    salaryValue.innerHTML = salaryRange.value + "₡"
}

filterRefresh.addEventListener("click", () => {
    location.reload()
});