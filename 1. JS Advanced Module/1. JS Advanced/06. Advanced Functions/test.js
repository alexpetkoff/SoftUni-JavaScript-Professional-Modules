const obj = {
    name: 'Peter',
    outer() {
        console.log(this); // Object {name: "Peter"}
        const inner = () => console.log(this)
        inner();
    }
}
obj.outer(); // Window