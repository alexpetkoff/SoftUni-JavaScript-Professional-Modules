function jansNotation(array) {

    let instructions = [...array];
    let result = [];

    for (let i = 0; i < instructions.length; i++) {
        if (Number.isInteger(instructions[i])) {
            result.push(instructions[i]);
        } else {

            let secondNum = result.pop();
            let firstNum = result.pop();
            if (!(Number.isInteger(secondNum) && Number.isInteger(firstNum))) {
                console.log('Error: not enough operands!'); break;
            }
            let newNum = 0;

            switch (instructions[i]) {
                case '+':
                    newNum = firstNum + secondNum; result.push(newNum); break;
                case '-':
                    newNum = firstNum - secondNum; result.push(newNum); break;
                case '*':
                    newNum = firstNum * secondNum; result.push(newNum); break;
                case '/':
                    newNum = firstNum / secondNum; result.push(newNum); break;
            }
        }
    }
    if (result.length === 1) {
        console.log(result[0]);
    } else if (result.length > 1) {
        console.log('Error: too many operands!');
    }
}

jansNotation([5,
    3,
    4,
    '*',
    '-']);