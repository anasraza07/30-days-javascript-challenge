import singleFunc, { addTwoNumbers, person, sayHi, sayHello, askHowAreYou } from "./modules.js";
import {math} from "./modules.js";
import _ from "lodash";
import axios from 'axios';

addTwoNumbers(1, 3); // task 01

person.greeting(); // task 02

// task 03
sayHi();
sayHello();
askHowAreYou();

singleFunc(); // task 04

console.log(math.divide(12, 2)); // task 05

// task 06
const array = [1, 2, 3, 4, 5];
console.log(`task 06: ${_.reverse(array)}`);
console.log(`task 06: ${_.isArray(array)}`);

// task 07
axios.get('https://jsonplaceholder.typicode.com/users/1').then((response) => {
    console.log('task07 Data: ', response.data);
}).catch((err) => {
    console.log('task07: ', err);
});