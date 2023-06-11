function sumFirstLast(array) {

    let first = Number(array.shift());
    let last = Number(array.pop());
    let sum = first + last;
    return sum;
}

console.log(sumFirstLast(['20', '30', '40']));