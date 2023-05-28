function solution() {
    let result = ''
    return {
        append(str) { result += str },
        removeStart(n) { result = result.slice(n) },
        removeEnd(n) { result = result.slice(0, -n) },
        print() { console.log(result) }
    }
}

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();