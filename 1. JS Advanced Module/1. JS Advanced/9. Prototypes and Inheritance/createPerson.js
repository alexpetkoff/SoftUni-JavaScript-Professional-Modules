function createPerson(firstName, lastName) {

    let obj = {
        firstName,
        lastName
    };

    Object.defineProperty(obj, 'fullName', {
        get() {
            return fullName = this.firstName + ' ' + this.lastName;
        },
        set(value) {
            let [first, last] = value.split(' ');
            if(first != undefined && last != undefined) {
                this.firstName = first;
                this.lastName = last;
            }
     
        }
    });

    return obj;

}


let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla