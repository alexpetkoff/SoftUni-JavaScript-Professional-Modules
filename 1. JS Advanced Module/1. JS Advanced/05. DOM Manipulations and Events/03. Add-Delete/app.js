function addItem() {

    let newLi = document.createElement('li');
    let inputFieldValue = document.getElementById('newItemText').value;
    newLi.textContent = inputFieldValue;
    let ul = document.getElementById('items');
    ul.appendChild(newLi);
    let a = document.createElement("a");
    newLi.appendChild(a);
    a.href = '#';
    a.textContent = '[Delete]';

    a.addEventListener('click', function(event) {
        let link = event.target;
        link.parentElement.remove();
    });
}