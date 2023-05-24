function addItem() {
    
    let newLi = document.createElement('li');
    let inputField = document.getElementById('newItemText').value;
    newLi.textContent = inputField;
    let ul = document.getElementById('items');
    ul.appendChild(newLi);

}