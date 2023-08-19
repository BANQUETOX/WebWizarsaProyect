const SAVEBUTTON = document.getElementById("save-button");
const NEWINPUTBUTTON = document.getElementById("new-input-button");
const DISCARDBUTTON = document.getElementById("discard-button");
const SELECTPROVINCES = document.getElementById("select-provinces");
let locationsContainer = document.getElementById(
  "catalogue__location-container"
);
let firstInput = document.getElementsByClassName(
  "catalogue__location-field"
)[0];

function createNewLocationField() {
  let newInput = firstInput.cloneNode(true);
  newInput.childNodes[1].value = "";
  newInput.childNodes[3].value = "";
  let deleteButton = document.createElement("button");
  let newInputId = Math.floor(Math.random() * (1000 - 0) + 0);
  newInput.setAttribute("id", newInputId);
  deleteButton.classList.add("button--red");
  deleteButton.innerText = "Eliminar";
  deleteButton.setAttribute("value", newInputId);
  deleteButton.setAttribute("onClick", "deleteLocation(this.value)");
  newInput.appendChild(deleteButton);
  locationsContainer.appendChild(newInput);
}

// function createProvinceObject(internId){
//     while(listedProvinces.find(e => e.internId == internId)){
//         internId = Math.floor(Math.random() * (1000 - 0) + 0)
//     }
//     return {
//         cantones:[],
//         internId
//     }
// }

// function createCantonObject(provinceId, internId){
//     let provinceObject = listedProvinces.find(e => e.internId == provinceId)
//     while(provinceObject.cantones.find(e => e.internId == internId)){
//         internId = Math.floor(Math.random() * (1000 - 0) + 0)
//     }
//     return {
//         districts:[],
//         internId
//     }
// }

// function deleteLocationObject(elementId){
//     let provinceObject = listedProvinces.find(e => e.internId == elementId)
//     listedProvinces.pop(provinceObject)
// }

function deleteLocation(elementId) {
  // deleteLocationObject(elementId)
  let elementToRemove = document.getElementById(elementId);
  locationsContainer.removeChild(elementToRemove);
}

// function fillProvinces(){
//     let elementCollection = document.getElementsByClassName("catalogue__location-field")
//     for(let i = 0; i < elementCollection.length; i++){
//         let internId = elementCollection[i].id
//         if(!listedProvinces.find(e => e.internId == internId)){
//             let newProvinceObject = createProvinceObject(internId)
//             listedProvinces.push(newProvinceObject)
//         }
//         let provinceObject = listedProvinces.find(e => e.internId == internId)
//         provinceObject.name = elementCollection[i].childNodes[3].value
//         provinceObject.id = elementCollection[i].childNodes[1].value
//     }
// }

NEWINPUTBUTTON.onclick = () => {
  createNewLocationField();
};

// SAVEBUTTON.onclick = ()=>{
//     fillProvinces()
// }
