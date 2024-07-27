// task 01
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Set time out runs')
        resolve();
    }, 2000)
}).then(() => {
    console.log('promise reolved');
})

// task 02
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Set time out runs task02')
        reject('Error, something went wrong');
    }, 2000)
}).then(() => {
    console.log('promise reolved');
}).catch(error => console.log(error));

// task 03
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('message 01');
        resolve();
    }, 1000)
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('message 02');
            resolve();
        }, 1000)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('message 03');
            resolve();
        }, 1000)
    })
}).then(() => {
    console.log('Logged all messages');
})

// task 04
const promiseFunction = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('timeout runs')
        resolve('task 04: resolved value');
    }, 1000)
});

async function logResolvedValue() {
    const response = await promiseFunction;
    console.log(response);
}
logResolvedValue();

// task 05
const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('task 05: Error, something went wrong');
    }, 1000)
})

async function handleError() {
    try {
        await rejectedPromise;
    } catch (error) {
        console.log(error);
    }
}
handleError();

// task 06
fetch(
    'https://jsonplaceholder.typicode.com/users'
).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data)
}).catch((error) =>
    console.log(`Error: ${error}`)
)

// task 07
async function fetchPublicApi() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
        const data = await response.json();
        console.log('task07', data)
    } catch (error) {
        console.log('error: ' + error);
    }
}
fetchPublicApi();

// task 08
Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('first timeout');
        }, 4000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('second timeout');
        }, 1000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('third timeout');
        }, 1000)
    })
]).then((value) => {
    value.forEach(eachValue => console.log(eachValue))
});

// task 09
Promise.race([
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('one')
        }, 100)
    }), new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('two')
        }, 500)
    })
]).then(value => console.log(value));
