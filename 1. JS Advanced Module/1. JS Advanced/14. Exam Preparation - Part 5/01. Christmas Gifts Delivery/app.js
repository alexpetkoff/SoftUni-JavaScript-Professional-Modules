function solution() {
    
    let sections = document.getElementsByClassName('card');

    let addGiftsSection = sections[0];
    let listGiftsSection = sections[1];
    let sentGiftsSection = sections[2];
    let discardedSection = sections[3];

    let inputField = addGiftsSection.getElementsByTagName('input')[0];
    let addBtn = addGiftsSection.getElementsByTagName('button')[0];

    addBtn.addEventListener('click', addFunc);

    function addFunc(event) {
        let giftName = inputField.value;
        let ul = document.getElementsByTagName('ul')[0];

        let li = document.createElement('li');
        li.classList.add('gift');
        li.textContent = giftName;
        ul.appendChild(li);

        let sendBtn = document.createElement('button');
        sendBtn.textContent = 'Send';

        let discardBtn = document.createElement('button');
        discardBtn.textContent = 'Discard';

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);

        sendBtn.id = 'sendButton';
        discardBtn.id = 'discardButton';

        inputField.value = '';
        //sorting
        let sortElements = Array.from(ul.getElementsByClassName('gift'));
        sortElements.sort((a,b) => a.textContent.localeCompare(b.textContent));
        Array.from(ul.children).forEach(li => li.remove());
        sortElements.forEach(li => ul.appendChild(li));

        sendBtn.addEventListener('click', (e) => {
            let currentLi = e.target.parentElement;
            let ul = sentGiftsSection.getElementsByTagName('ul')[0];
            ul.appendChild(currentLi);

            sendBtn.remove();
            discardBtn.remove();
            
        });

        discardBtn.addEventListener('click', (e) => {
            let currentLi = e.target.parentElement;
            let ul = discardedSection.getElementsByTagName('ul')[0];
            ul.appendChild(currentLi);

            sendBtn.remove();
            discardBtn.remove();
        });
    }
}