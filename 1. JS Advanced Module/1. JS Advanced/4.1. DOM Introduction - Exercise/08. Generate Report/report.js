function generateReport() {
    let checker = document.querySelectorAll('th input');
    let rows = document.querySelectorAll('tr');
    let output = document.getElementById('output');
    let result = [];

    for(let i = 1; i < rows.length; i++) {
        let currentInfo = {};
        for(let j = 0; j < checker.length; j++) {
            if(checker[j].checked) {
               currentInfo[checker[j].name] = rows[i].children[j].textContent;
            }
        }
        result.push(currentInfo);
    }
    
    output.value = JSON.stringify(result);
}
