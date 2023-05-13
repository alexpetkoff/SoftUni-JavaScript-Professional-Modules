function roadRadar(speed, area) {

    let speedLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }
    let result = speed - speedLimit[area];

    if (result <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit[area]} zone`);
    } else if (result <= 20) {
        console.log(`The speed is ${result} km/h faster than the allowed speed of ${speedLimit[area]} - speeding`);
    } else if (result <= 40) {
        console.log(`The speed is ${result} km/h faster than the allowed speed of ${speedLimit[area]} - excessive speeding`);
    } else {
        console.log(`The speed is ${result} km/h faster than the allowed speed of ${speedLimit[area]} - reckless driving`);
    }
}

roadRadar(200, 'motorway' );