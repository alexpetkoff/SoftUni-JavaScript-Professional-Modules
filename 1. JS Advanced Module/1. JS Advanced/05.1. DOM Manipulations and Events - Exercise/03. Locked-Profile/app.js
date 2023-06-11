function lockedProfile() {

    let buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach((btn) => {
        btn.addEventListener('click', pressBtn);
    });

    function pressBtn(event) {

        let button = event.target;
        let parent = button.parentElement;
        let radioBtn = parent.querySelector('[value="unlock"]');
        
        if(radioBtn.checked && button.textContent === "Show more"){
            let hiddenDiv = button.previousElementSibling;
            hiddenDiv.style.display = 'block';
            button.textContent = "Hide it";
            return;
        } else if(radioBtn.checked && button.textContent === "Hide it"){
            let hiddenDiv = button.previousElementSibling;
            hiddenDiv.style.display = 'none';
            button.textContent = "Show more";
        }
    }
}
