let catalogueForm = document.getElementById('catalogueForm')
let firstInput = document.getElementsByClassName('catalogue__location-field')[0]
let locationsContainer = document.getElementById('catalogue__location-container')
let genericProvincesList = []
genericProvincesList.push({cantones:[],internId:1})

function createNewLocationField(){
    let newInput = firstInput.cloneNode(true)
    newInput.childNodes[1].value = ""
    newInput.childNodes[3].value = ""
    let deleteButton = document.createElement('button')
    let newInputId = Math.floor(Math.random() * (1000 - 0) + 0)
    let newProvinceObject = {
        cantones: [],
        internId: newInputId
    }
    newInput.setAttribute("id", newInputId)
    deleteButton.classList.add('button--red')
    deleteButton.innerText = "Eliminar"
    deleteButton.setAttribute('value',newInputId)
    deleteButton.setAttribute('onClick','deleteLocation(this.value)')
    newInput.appendChild(deleteButton)
    locationsContainer.appendChild(newInput)
    genericProvincesList.push(newProvinceObject)
}

function deleteLocation(elementId){
    deleteLocationObject(elementId)
    let elementToRemove = document.getElementById(elementId)
    locationsContainer.removeChild(elementToRemove)
    console.log(genericProvincesList)

}

function deleteLocationObject(elementId){
    let provinceObject = genericProvincesList.find(e => e.internId == elementId)
    genericProvincesList.pop(provinceObject)
}

function fillProvinces(){
    let elementCollection = document.getElementsByClassName("catalogue__location-field")
    for(let i = 0; i < elementCollection.length; i++){
        let internId = elementCollection[i].id
        let provinceObject = genericProvincesList.find(e => e.internId == internId)
        provinceObject.name = elementCollection[i].childNodes[3].value
        provinceObject.id = elementCollection[i].childNodes[1].value
    }
    console.log(genericProvincesList)
}

function discardChanges(){
    let elementList = document.getElementsByClassName('catalogue__location-field')
    for(let i = 0; i < elementList.length;i++){
        let element =  document.getElementsByClassName('catalogue__location-field')[i]
        let elementId = document.getElementsByClassName('catalogue__location-field')[i].id
        element.childNodes[1].value = ""
        element.childNodes[3].value = ""
    }
    

}
catalogueForm.addEventListener('submit', function(e){

    e.preventDefault()
})

