function upCase(text) {

    let pattern = /[A-Za-z0-9]+/g;
    let words = text.match(pattern);
    console.log(words.join(', ').toUpperCase());
    
}

upCase('Hello, from JS Advanced!');