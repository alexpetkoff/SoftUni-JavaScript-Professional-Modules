function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let dropDown = document.getElementById('menu');
    
    let newElement = document.createElement('option');
    newElement.textContent = text.value;
    newElement.value = value.value;
    dropDown.appendChild(newElement);
    
    text.value = '';
    value.value = '';
}