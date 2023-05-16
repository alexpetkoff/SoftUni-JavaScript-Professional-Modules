function printEveryNElement(array, n) {
    
    let result = [];

    for(let i = 0; i < array.length; i+=n) {
        result.push(array[i]);
    }
    return result;
}

console.log(printEveryNElement(['1',
'2',
'3',
'4',
'5'],
6));