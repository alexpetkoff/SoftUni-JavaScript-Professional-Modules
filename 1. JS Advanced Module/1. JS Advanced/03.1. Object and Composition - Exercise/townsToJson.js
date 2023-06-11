function townsToJSON(array) {
    let result = [];

    let firstRow = array.shift().split('|');
    let town = firstRow[1].trim();
    let latitude = firstRow[2].trim();
    let longitude = firstRow[3].trim();

    for (let i = 0; i < array.length; i++) {
        let row = array[i].split('|');
        let currentTown = row[1].trim();
        let currentLat = +row[2].trim();
        let currentLong = +row[3].trim();
        let obj = { 
            [town]: currentTown,
            [latitude]: +currentLat.toFixed(2),
            [longitude]: +currentLong.toFixed(2)
        }
        result.push(obj);
    }

    console.log(JSON.stringify(result));
}

townsToJSON(
    ['| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |']);