// feature request 01:
const num3 = 123;
const str3 = 'ali';
const isBool3 = true;
const obj2 = {name: 'raza', age: 123};
const arr2 = ['cricket', 'hockey'];

console.log(num3, typeof num3)
console.log(str3, typeof str3)
console.log(isBool3, typeof isBool3)
console.log(obj2, typeof obj2)
console.log(arr2, typeof arr2)

// feature request 02:
let reassignable = 'first value';
reassignable = 'second changed value';
console.log(reassignable);

const nonReassignable = 'const value' 
nonReassignable = 'changed'
console.log(nonReassignable)