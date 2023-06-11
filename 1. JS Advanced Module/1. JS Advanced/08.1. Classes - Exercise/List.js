class List {

    constructor() {
        this.array = [];
        this.size = 0;
    }
    add(value) {
        this.array.push(value);
        this.array.sort((a,b) => a - b);
        this.size++;
        return;
    }
    remove(index) {

        if(index >= 0 && index <= this.array.length - 1) {
            this.array.splice(index, 1);
            this.size--;
            return;
        }
        
    }
    get(index) {
        if(index >= 0 && index <= this.array.length - 1) {
            return this.array[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(3);
// list.remove(0);
console.log(list.size);
console.log(list.get(0))
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));
// console.log(list.size)