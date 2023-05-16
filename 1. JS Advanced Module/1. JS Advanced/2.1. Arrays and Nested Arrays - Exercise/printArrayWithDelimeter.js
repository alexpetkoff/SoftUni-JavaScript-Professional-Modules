function printArrayWithDelimiter(array, delimeter) {

    let result = array.join(delimeter);
    console.log(result)

}

printArrayWithDelimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_');