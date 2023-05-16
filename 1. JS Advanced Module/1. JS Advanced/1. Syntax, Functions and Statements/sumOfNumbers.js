function sumOfNumbers(x, y) {

    let num1 = Number(x);
    let num2 = Number(y);
    let result = 0;

    for (let i = num1; i <= num2; i++) {
        result += i;
    }

    console.log(result)
}

sumOfNumbers('-8', '20');