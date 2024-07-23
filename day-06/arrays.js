// task 01
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// task 02
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

// task 03
numbers.push(6);
console.log(numbers);

// task 04
numbers.pop();
console.log(numbers);

// task 05
numbers.shift();
console.log(numbers);

// task 06
numbers.unshift(10);
console.log(numbers);

// task 07
const doubledNumbers = numbers.map((num) => {
    return num + num;
});
console.log(doubledNumbers);

// task 08
const filteredEvenNumbers = numbers.filter(num => num % 2 === 0);
console.log(filteredEvenNumbers)

// task 09
const sumAllNumbers = numbers.reduce((acc, num) => acc + num, 0)
console.log(sumAllNumbers);

// task 10
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

// task 11
numbers.forEach(element => console.log(element));

// task 12
const multiDimensionalArray = [
    ['Anas', 20, 'Shahid'],
    ['Kaleem', 15, 'Saleem'],
    ['Hamza', 12, 'Tauseef'],
    ['Hassan', 6, 'Furqan'],
]
console.log(multiDimensionalArray);

// task 13
console.log(multiDimensionalArray[0][0]);


