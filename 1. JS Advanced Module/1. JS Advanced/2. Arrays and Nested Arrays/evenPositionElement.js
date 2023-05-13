function evenPositionElement(array) {

    let newArray = array.filter((value, index) => index % 2 == 0);
    console.log(newArray.join(' '));

}

evenPositionElement(['5', '10']);