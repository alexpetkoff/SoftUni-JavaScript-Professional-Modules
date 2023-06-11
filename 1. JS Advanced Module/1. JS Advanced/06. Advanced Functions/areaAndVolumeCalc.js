function solve(area, vol, input) {

    let array = JSON.parse(input);
    let result = [];

    for(let data of array) {
        let areaVal = area.call(data);
        let volVal = vol.call(data);
        result.push({area: areaVal, volume: volVal});
    }
    return result;
}

//calling the solve function
console.table(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`));
    
//helper functions
function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};