function stringLength(stringOne, stringTwo, stringThree) {

    let sumOfLength = stringOne.length + stringThree.length + stringTwo.length;
    console.log(sumOfLength)
    console.log(Math.floor(sumOfLength / 3));

}

stringLength('chocolate', 'ice cream', 'cake');