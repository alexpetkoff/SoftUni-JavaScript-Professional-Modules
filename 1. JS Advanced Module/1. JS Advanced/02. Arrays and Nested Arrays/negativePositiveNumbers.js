function negativePositive(array) {

    let result = [];

    array.forEach(element => {
        if(element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    });
    
    return result.join('\n');
}

console.log(negativePositive([7, -2, 8, 9]));
