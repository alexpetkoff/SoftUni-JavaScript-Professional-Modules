function storeCatalogue(array) {

    let sortedArray = array.sort((a, b) => a.localeCompare(b));
    let alphabet = '';
    for(let element of sortedArray) {
        let [product, price] = element.split(' : ');
        if(alphabet != product[0]) {
            alphabet = product[0];
            console.log(alphabet);
        }
        console.log(` ${product}: ${price}`)
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