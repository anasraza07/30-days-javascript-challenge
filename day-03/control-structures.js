// task 01
const num = 0;
if (num > 0) {
    console.log('number is positive');
} else if (num < 0) {
    console.log('num is negative');
} else {
    console.log('number is zero')
}

// task 02
const age = 17;
if (age >= 18) {
    console.log('person is eligible to vote');
} else {
    console.log('person is not eligible to vote');
}

// task 03
const a = 310;
const b = 130;
const c = 30;
if (a > b) {
    if (a > c) {
        console.log('Largest number is:', a);
    } else {
        console.log('Largest number is:', c);
    }

} else if (b > a) {
    if (b > c) {
        console.log('Largest number is:', b);
    } else {
        console.log('Largest number is:', c);
    }

} else {
    console.log('there must be 3 different numbers')
}

// task 04
const number = 8;
let weekday;
switch (number) {
    case 1: weekday = 'Monday';
        break;
    case 2: weekday = 'Tuesday';
        break;
    case 3: weekday = 'Wednesday';
        break;
    case 4: weekday = 'Thursday';
        break;
    case 5: weekday = 'Friday';
        break;
    case 6: weekday = 'Saturday';
        break;
    case 7: weekday = 'Sunday';
        break;

    default: weekday = 'Invalid Number';
        break;
}
console.log(weekday)

// task 05
const score = 70;
switch (score) {
    case 90: console.log('A')
        break;
    case 80: console.log('B')
        break;
    case 70: console.log('C')
        break;
    case 60: console.log('D')
        break;
    case 50: console.log('E')
        break;
    case 40: console.log('F')
        break;

    default: console.log('Number should be in tenth unit')
        break;
}

// task 06
const numTwo = 20;
console.log(numTwo % 2 === 0 ? 'Even number' : 'Odd number');

// task 07
const year = 2024;
if (year % 4 === 0 || year % 100 === 0 && year % 400 === 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`)
}


