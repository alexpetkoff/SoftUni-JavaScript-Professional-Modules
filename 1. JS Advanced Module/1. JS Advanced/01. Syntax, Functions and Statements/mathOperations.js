function mathOperations(x, y, operator) {

    let result = 0;
    switch(operator) {
        case '+': result = x + y; break;
        case '-': result = x - y; break;
        case '*': result = x * y; break;
        case '/': result = x / y; break;
        case '%': result = x % y; break;
        case '**': result = x ** y; break;
        default: break;
    }

    console.log(result);
}

mathOperations(2, 4, '**');