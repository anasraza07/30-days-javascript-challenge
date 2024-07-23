// task 01
const name = 'Bilal';
const age = 12;
console.log(`${name} is ${age} years old`);

// task 02
console.log(`hi, 
        hello
                    how are you??`);

// task 03
const numbers = [10, 11, 14, 18, 20];
const [first, second, third] = numbers;
console.log(first);
console.log(second);

// task 04
const book = {
    title: 'personal development',
    author: 'Robert brown',
}
const { title, author } = book;
console.log(title + ' book by ' + author);

// task 05
const newArr = [...numbers, 23, 29, 30];
console.log(newArr);

// task 06
function sumArbitaryArguments(...nums) {
    return nums.reduce((acc, currVal) => acc + currVal, 0)
}
console.log(sumArbitaryArguments(2, 21, 1, 12, 100));

// task 07
function defaultParameters(num1, num2 = 1) {
    return num1 * num2;
};
console.log(defaultParameters(6, 2));
console.log(defaultParameters(6));

// task 08
const name1 = 'Anas';
const age1 = 21;
const greet = function () {
    console.log(`hello ${name1} your age is ${age}`);
}
const obj = {name1, age1, greet};
console.log(obj)

// task 09
const lastName = 'lastname';
obj[lastName] = 'raza';
console.log(obj)

