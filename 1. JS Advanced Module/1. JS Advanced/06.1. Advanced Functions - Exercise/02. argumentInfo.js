function argumentInfo(...args) {
    let res = [];
    let objCount = {};
    let array = args;
    for(let el of array) {
        let type = typeof(el);
        let line = `${type}: ${el}`;
        res.push(line);
        objCount.hasOwnProperty(type) ? 
            objCount[type] += 1 :
            objCount[type] = 1;
    }

    let arrayCounts = Object.entries(objCount).sort((a,b) => b[1] - a[1]);

    for(let el of res) {
        console.log(el);
    }
    for(let element of arrayCounts) {
        console.log(`${element[0]} = ${element[1]}`);
    }
}

argumentInfo('cat', 22, 42,43, function () { console.log('Hello world!'); });