function biggestElement(array) {
    let res = [];
    for(let el of array) {
        res.push(Math.max(...el));
    }
    return Math.max(...res);
}

console.log(biggestElement([[20, 50, 10],
[8, 33, 145]]));