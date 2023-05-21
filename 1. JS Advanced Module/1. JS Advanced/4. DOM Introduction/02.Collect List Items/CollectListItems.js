function extractText() {
    let text = document.getElementsByTagName('li');
    let result = '';
    for(let el of text) {
        result += el.textContent + '\n';
    }

    return document.getElementById('result').textContent = result;
}