function storeCatalogue(array) {

    let catalogue = {};
    let sortedArray = array.sort((a, b) => a.localeCompare(b));
    let alphabet = '';

    for(let element of sortedArray) {
        let [product, price] = element.split(' : ');
        let currentAlphabet = product[0];
        if(currentAlphabet != alphabet) {
            alphabet = currentAlphabet;
            catalogue[alphabet] = [];
        }
        catalogue[alphabet].push([product, price])
    }

    for(let key of Object.keys(catalogue)) {
        console.log(key);
        for(let i = 0; i < catalogue[key].length; i++) {
            console.log(` ${catalogue[key][i][0]}: ${catalogue[key][i][1]}`);
        }
    }
}

storeCatalogue([
    'Appricot : 20.4', 
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);