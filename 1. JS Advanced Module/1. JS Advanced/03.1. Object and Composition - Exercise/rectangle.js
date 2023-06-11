function rectangle(width, height, color) {
    
    let newColor = color.charAt(0).toUpperCase() + color.slice(1);
    color = newColor;
    
    return { 
        width,
        height,
        color,
        calcArea: function() {
            return this.width * this.height;
        }
    }

}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());