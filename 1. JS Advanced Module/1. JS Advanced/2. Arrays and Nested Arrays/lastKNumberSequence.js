function lastKNumberSequence(n, k) {

    let array = [1];

    for (let i = 1; i < n; i++) {
        let currentSequence = array.slice(-k).reduce((ac, value) => ac + value);
        array.push(currentSequence);
    }
    return array;
}

console.log(lastKNumberSequence(6, 3));