function fruits(fruit, weightGr, cost) {

    let weightKg = weightGr / 1000;
    let totalCost = weightKg * cost;

    console.log(`I need $${totalCost.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

fruits('apple', 1563, 2.35);