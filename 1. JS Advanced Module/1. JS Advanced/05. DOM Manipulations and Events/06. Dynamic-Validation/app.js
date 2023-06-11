function validate() {

    let input = document.getElementById('email');
    input.addEventListener('change', checker); //use change, not blur;

    function checker(event) {
        let pattern = /[a-z]+@[a-z]+\.[a-z]+/g;
        let value = event.target.value; 
        if(!pattern.test(value)) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    }
}