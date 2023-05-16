function sortAnArrayByTwoCriteria(array) {

    let sortedArray = array.sort((a, b) =>
        a.length - b.length || a.localeCompare(b)
    )
    sortedArray.forEach(element => {
        console.log(element)
    });
}

sortAnArrayByTwoCriteria(['Isacc',
    'Theodor', 'Jack',
    'Harrison',
    'George']);