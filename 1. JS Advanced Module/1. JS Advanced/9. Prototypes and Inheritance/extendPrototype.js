function recieveClass(cls) {
    cls.prototype.species = 'Human';
    cls.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

class Person {
    constructor(name) {
      this.name = name;
    }
  
    toString() {
      return `My name is ${this.name}.`;
    }
}

recieveClass(Person);
let person = new Person('Ivan');
console.log(person.toSpeciesString());