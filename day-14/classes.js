// task 01
class Person {
    constructor(name, age, firstName, lastName) {
        this.name = name;
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // task 05
    static genericGreeting(name) {
        return `Good morning ${name}`;
    }

    // task 07
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    // task 08
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ');
    }

    greeting() {
        return `Hello ${this.name}, you are ${this.age} years old`
    }

    updateAge() {
        this.age = 120;
    }
}
const perosnOne = new Person('anas', 12);
console.log('task01:', perosnOne.greeting());

// task 02
perosnOne.updateAge();
console.log('task02 updated age:', perosnOne.age);

// task 03
class Student extends Person {
    static numberOfStudents = 0;

    constructor(name, age, studentId) {
        super(name, age, studentId)
        this.studentId = studentId
        Student.numberOfStudents++;
    }


    // task 04
    greeting() {
        return `Hello ${this.name}, you are ${this.age} years old. Student Id is ${this.studentId}`
    }

    returnStudentId() {
        return this.studentId;
    }
}
const studentOne = new Student('ali', 10, 1201);
console.log('task03 student id:', studentOne.studentId);

// task 04
console.log('task04:', studentOne.greeting());

// task 05
console.log(Person.genericGreeting('anas'));

// task 06
console.log('number of students:', Student.numberOfStudents);

// task 07
const personTwo = new Person('anas', 45, 'anas', 'raza');
console.log(personTwo.fullName)

// task 08
personTwo.fullName = 'shahid ibrahim'
console.log(personTwo);

// task 09 and 10
class Account {
    #balance = 0;

    deposit(amount) {
        console.log('Your current balance is', this.#balance += amount);
    }

    withdraw(amount) {
        console.log('Your current balance is', this.#balance -= amount);
    }
}

const myAccount = new Account();
myAccount.deposit(100);
myAccount.withdraw(20);
