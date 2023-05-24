function deleteByEmail() {

    let userInput = document.querySelector('[type="text"]');
    let userValue = userInput.value;
    let tableInfo = document.getElementsByTagName('td');
    let resultDiv = document.getElementById('result');
    let isFound = false;

    for(let el of tableInfo) {
        if(el.textContent === userValue) {
            el.parentElement.remove();
            isFound = true;
        }
    }
    
    if(isFound) {
        resultDiv.textContent = 'Deleted.'
    } else {
        resultDiv.textContent = 'Not found.'
    }
}