function townPopulation(array) {

    let town = {};

    for (let el of array) {
        let [townName, population] = el.split(' <-> ');
        population = Number(population);

        if (!town.hasOwnProperty(townName)) {
            town[townName] = population;
        } else {
            town[townName] += population;
        }
    }

    for (let [key, value] of Object.entries(town)) {
        console.log(`${key} : ${value}`);
    }
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);