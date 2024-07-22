// task 01
for (let index = 1; index <= 10; index++) {
    console.log(index)
}

// task 02
for (let table = 1; table <= 12; table++) {
    console.log(`5 * ${table} = ${5 * table}`)
}

// task 03
let sum = 1;
while (sum <= 10) {
    console.log(`${sum} + ${sum} = ${sum + sum}`)
    sum++;
}

// task 04
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// task 05
let j = 1;
do {
    console.log(j)
    j++;
} while (j <= 5);

// task 06
const factorial = 5;
let ind = 1;
let result = 1;
do {
    // 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10
    result = result * ind;
    ind++;
} while (ind <= factorial)

console.log(`factorial of ${factorial} is ${result}`);

// task 07
for (let i = 1; i <= 1; i++) {
    let star = ''
    for (let j = 1; j <= 5; j++) {
        star += ' * ';
        console.log(star)
    }
}

// task 08
for (let ind = 1; ind <= 10; ind++) {
    if (ind === 5) {
        continue;
    }
    console.log(ind);
}

// task 09
for (let index = 1; index <= 10; index++) {
    console.log(index);
    if (index === 7) {
        break;
    }
}


