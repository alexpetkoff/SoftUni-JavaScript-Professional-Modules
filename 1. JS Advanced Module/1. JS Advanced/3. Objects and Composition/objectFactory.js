function factory(library, orders) {

    let result = [];

    for(let i = 0; i < orders.length; i++) {
        let currentObject = {};
        let name = orders[i].template.name;
        let parts = orders[i].parts;
        currentObject.name = name;
        for(let el of parts) {
                currentObject[el] = library[el];
        }
        result.push(currentObject);
    }
    
    return result[0];
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print'] 
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];
const products = factory(library, orders);
console.log(products);