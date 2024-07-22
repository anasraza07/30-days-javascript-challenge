// task 01
function checkNum(num) {
    console.log(num % 2 === 0 ? 'Even number' : 'Odd number');
}
checkNum(201);

// task 02
function calculateSquare(num) {
    return num * num;
}
console.log(calculateSquare(12));

// task 03
const findMaximumNumber = function (num1, num2) {
    if (num1 === num2) {
        console.log('Please give different numbers!');
        return;
    }
    let result = num1 > num2 ? num1 : num2
    console.log(`Maximum number is ${result}`);
}
findMaximumNumber(12, 112);

// task 04
const concatenateStrings = function (str1, str2) {
    return str1 + ' ' + str2;
}
console.log(concatenateStrings('Hello', 'Anas'));

// task 05
const calculateSum = (num1, num2) => {
    return num1 + num2;
}
console.log(calculateSum(12, 11));

// task 06
const isCharacter = (str, char) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return true;
        }
    }
    return false;
}
console.log(isCharacter('anasraza', 'z'));

// task 07
function returnProduct(num1, num2 = 1) {
    return num1 * num2;
}
console.log(returnProduct(12));

// task 08
function greet(name, age = 18) {
    return `Hello ${name}, You are ${age} years old.`
}
console.log(greet('Anas', 10));

// task 09
function callFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
};
callFunction(hello, 3);

function hello() {
    console.log('Hello!')
};

// task 10
function callTwoFunctions(func1, func2, value) {
    const result = func1(value);
    func2(result);
}

callTwoFunctions(one, two, 'Anas');

function one(value) {
    return `Hello ${value}!`;
};

function two(value){
    console.log(`${value}, How are you?`);
};




