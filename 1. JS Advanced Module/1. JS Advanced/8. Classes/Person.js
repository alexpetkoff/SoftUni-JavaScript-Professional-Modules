class Person {
    constructor (firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName + ' ' + this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
};


const myPerson = new Person('Alexander', 'Petkov', 30, 'iskander9207@gmail.com');
const myPerson2 = new Person('Siika', 'Siikova', 29, 'siika@abv.bg');

console.log([myPerson, myPerson2].join('\n'));