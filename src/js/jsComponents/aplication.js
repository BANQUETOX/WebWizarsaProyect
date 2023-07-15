function truncateText(element, maxLength) {
    let truncated = element.innerText;
    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '...';
    }
    return truncated;
}
let elementList = document.getElementsByClassName('aplication--description')
for(let i = 0; i < elementList.length; i++){
    let element = elementList[i]
    element.innerText = truncateText(element,150)
}
