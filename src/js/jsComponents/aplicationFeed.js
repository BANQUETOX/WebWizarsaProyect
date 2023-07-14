let salaryRange = document.getElementById('salary-range-input')
let salaryValue = document.getElementById('salary-value')

salaryRange.oninput = ()=>{
    salaryValue.innerHTML = salaryRange.value + "₡"
}
