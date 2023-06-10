function personAndTeacher() {
    
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email); // calls the constructor of class Person;
            this.subject = subject;
        }
    }
    return {
        Person,
        Teacher
    }

}

let classes = personAndTeacher();
let Teacher = classes.Teacher;
let Person = classes.Person;

let p = new Teacher('Pesho', 'pesho@pesho.com', 'English');
console.log(p.subject);
