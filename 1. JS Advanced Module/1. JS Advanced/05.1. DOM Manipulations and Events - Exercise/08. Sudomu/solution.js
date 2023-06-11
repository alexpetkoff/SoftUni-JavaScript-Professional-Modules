function solve() {

    let [checkBtn, clearBtn] = document.querySelectorAll('td button');
    checkBtn.addEventListener('click', check);
    clearBtn.addEventListener('click', clear);
    let tableBorder = document.querySelector('table');
    let output = document.querySelector('div p');

    function check() {
        let result = [];
        let tableRow = Array.from(document.querySelectorAll('tr td input'));


        let temp = [];
        let boolResult = true;
        for (el of tableRow) {
            temp.push(Number(el.value));
            if (temp.length === 3) {
                result.push(temp)
                temp = [];
            }
        }

        let sumChecker = 0;
        result[0].forEach(element => {
            sumChecker += element;
        });
        //row checker and column checker
        for (let i = 0; i < result.length; i++) {
            let rowSum = 0;
            let columnSum = 0;
            for (let j = 0; j < result.length; j++) {
                rowSum += result[i][j];
                columnSum += result[j][i];
            }
            if (rowSum != sumChecker || columnSum != sumChecker || sumChecker === undefined) {
                boolResult = false;
                break;
            }
        }

        if(boolResult && sumChecker != 0) {
            tableBorder.style.border = "2px solid green";
            output.style.color = 'green';
            output.textContent = 'You solve it! Congratulations!';
        } else {
            tableBorder.style.border = "2px solid red";
            output.style.color = 'red';
            output.textContent = 'NOP! You are not done yet...';
        }
    }

    function clear() {
        let tableRow = Array.from(document.querySelectorAll('tr td input'));
        for(let el of tableRow) {
            el.value = '';
        }
        tableBorder.style.border = 'none';
        output.textContent = '';
    }
}