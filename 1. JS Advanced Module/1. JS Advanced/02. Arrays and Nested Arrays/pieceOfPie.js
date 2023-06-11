function pieceOfPie(array, stringOne, stringTwo) {

    let startIndex = array.indexOf(stringOne);
    let lastIndex = array.indexOf(stringTwo) + 1;

    return array.slice(startIndex, lastIndex);

}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));