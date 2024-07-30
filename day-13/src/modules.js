// task 01
export function addTwoNumbers(num1, num2) {
    console.log(`task01: The sum of ${num1} and ${num2} equals to ${num1 + num2}`);
}

// task 02
export const person = {
    name: 'anas',
    age: 20,
    greeting() {
        console.log(`task02: ${person.name} is ${person.age} years old.`)
    }
}

// task 03
export function sayHi() {
    console.log('task03-sayHi: Hi')
}

export function sayHello() {
    console.log('task03-sayHello: Hello')
}

export function askHowAreYou() {
    console.log('task03-askHowAreYou: How are you?')
}

// task 04
export default function singleFunc() {
    console.log('task04: I am a default function');
}

// task 05: app.js line:9
export * as math from './math.js'; 