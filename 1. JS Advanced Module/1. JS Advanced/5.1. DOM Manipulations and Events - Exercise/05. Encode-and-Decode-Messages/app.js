function encodeAndDecodeMessages() {
    let decodeArea = document.querySelector('[placeholder="No messages..."]')
    let buttons = document.getElementsByTagName('button');
    let encodeBtn = buttons[0].addEventListener('click', encodeFunc);
    let decodeBtn = buttons[1].addEventListener('click', decodeFunc);

    function encodeFunc(event) {
        let textToEncode = event.target.previousElementSibling;
        let textEncoded = '';
        
        for(let i = 0; i < textToEncode.value.length; i++) {
            let char = textToEncode.value[i];
            let newChar = String.fromCharCode(char.charCodeAt() + 1);
            textEncoded += newChar;
        }

        decodeArea.textContent = textEncoded;
        textToEncode.value = '';
    }

    function decodeFunc(event) {
        let textToDecode = event.target.previousElementSibling;
        let textDecoded = '';

        for(let i = 0; i < textToDecode.textContent.length; i++) {
            let char = textToDecode.value[i];
            let newChar = String.fromCharCode(char.charCodeAt() - 1);
            textDecoded += newChar;
        }

        decodeArea.textContent = textDecoded;
    }
}