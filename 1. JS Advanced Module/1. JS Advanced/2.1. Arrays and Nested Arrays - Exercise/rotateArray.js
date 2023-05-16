function rotateArray(array, rotationAmmount) {
    
    let result = [...array];
    for(let i = 0; i < rotationAmmount; i++) {
        const lastElement = result.pop();
        result.unshift(lastElement);
    }
    let forPrint = result.join(' ');
    console.log(forPrint);
}

rotateArray(['Banana',
'Orange',
'Coconut',
'Apple'],
15);