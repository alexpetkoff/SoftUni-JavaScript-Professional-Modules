function tickets(array, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let toSort = [];

    for (let element of array) {
        let [destination, price, status] = element.split('|');
        price = Number(price);
        toSort.push([destination, price, status]);
    }

    if(criteria === 'price') {
        toSort.sort((a,b) => a[1] - b[1]);
    }
    if(criteria === 'destination') {
        toSort.sort((a,b) => a[0].localeCompare(b[0]));
    }
    if(criteria === 'status') {
        toSort.sort((a,b) => a[2].localeCompare(b[2]));
    }
    
    let result = [];
    toSort.forEach(el => {
        result.push(new Ticket(...el));
    });

    return result;
}

console.table(tickets(['Philadelphia|100.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'));