function carFactory(object) {

    let result = {};

    result.model = object.model;

    if (object.power <= 90) {
        result.engine = { power: 90, volume: 1800 }
    } else if (object.power > 90 && object.power <= 120) {
        result.engine = { power: 120, volume: 2400 }
    } else {
        result.engine = { power: 200, volume: 3500 }
    }

    result.carriage = object.carriage === 'hatchback' ? { type: 'hatchback', color: object.color } : { type: 'coupe', color: object.color }

    result.wheels = object.wheelsize % 2 != 0 ? new Array(4).fill(object.wheelsize) : new Array(4).fill(object.wheelsize - 1)

    return result;

}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});