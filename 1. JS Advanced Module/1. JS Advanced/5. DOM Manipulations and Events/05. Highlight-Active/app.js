function focused() {
    let element = document.querySelectorAll('input');

    for (let el of element) {
        el.addEventListener('focus', focused); //add style to focused element
        el.addEventListener('blur', blur); //remove style once focus is lost
    }

    function focused(e) {
        let element = e.target;
        let div = element.parentElement; //taking parent
        div.classList.add('focused'); //add class to parent
    }

    function blur(e) {
        let element = e.target;
        let div = element.parentElement; //taking parent
        div.classList.remove('focused'); //add class to parent
    }
}