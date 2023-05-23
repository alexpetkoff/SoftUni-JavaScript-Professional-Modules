function generateReport() {
    let test = document.querySelectorAll('th input');

    for(let i = 0; i < test.length; i++) {
        if(test[i].checked) {
            console.log(test[i]);
        }
    }

}