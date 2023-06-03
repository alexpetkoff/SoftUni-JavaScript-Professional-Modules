function validate() {
    let input = document.getElementById('email');
    let regex = /([a-z]+@[a-z]+.[a-z]+)/g;

    input.addEventListener('change', () => {
        !regex.test(input.value) ? 
            input.classList = 'error' :
            input.classList = '';
    });
}