// task 01
function throwError() {
    throw new Error('Error, something went wrong')
}

try {
    let error = true;
    console.log('start');
    if (error) {
        throwError();
    }
} catch (error) {
    console.log(error)
}

// task 02
function divideNumbers(numerator, denominator) {
    try {
        if (denominator === 0) {
            throw new Error('Your denominator is zero!');
        }
        return numerator / denominator;
    } catch (error) {
        console.log(error)
    }
}
console.log(divideNumbers(25, 10))

// task 03
try {
    console.log('START');
    // throw new Error();
    console.log('STOP');
} catch (error) {
    console.log('ERROR');
} finally {
    console.log('Finally block code runs')
}

// task 04: TODO after class topic

// task 05
function validateUserInput(userInput) {
    try {
        if (userInput === '') {
            throw new Error('Empty: Please fill complete input')
        }
        console.log('correct userinput');
    } catch (error) {
        console.log(error);
    }
}
validateUserInput('');

// task 06
const randomPromise = new Promise((resolve, reject) => {
    const random = Math.random();
    let error = random > 0.5 ? true : false;
    setTimeout(() => {
        console.log('timeout code runs')
        error ? reject('error aagaya!') : resolve('code resolve hogaya')
    }, 1000)
}).then((value) => console.log('resolved value:', value))
    .catch((err) => console.log(err));

// task 07
async function handlePromise() {
    try {
        const response = await randomPromise
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
handlePromise();

// task 08
fetch('https://invalidsbf.com').then((response) => {
    console.log(response);
}).catch((error) => {
    console.log('error:', error)
})

// task 09
async function fetchInvalidUrl() {
    try {
        const response = await fetch('https://abcdefghijkl.com')
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
fetchInvalidUrl();
