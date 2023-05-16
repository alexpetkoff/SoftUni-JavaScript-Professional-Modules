function listOfNames(array) {

    let sortedArray = array.sort((a, b) => a.localeCompare(b));

    sortedArray.reduce((acc, val, index) => console.log(`${index + 1}.${val}`), 0)

}

listOfNames(["John",
"Bob",
"Christina",
"Ema"]);