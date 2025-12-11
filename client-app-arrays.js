const arrUtils = require('./array-utils.js');
const numbers = [10, 5, 8, 3, 15];

console.log("Numbers:", numbers);
console.log("Sum:", arrUtils.sum(numbers));
console.log("Min:", arrUtils.min(numbers));
console.log("Max:", arrUtils.max(numbers));
console.log("Average:", arrUtils.avg(numbers));

function sum(arr){
    return arr.reduce((acc,val) => acc + val, 0n);
}

let numsBigInt = [10n, 20n, 30n];
console.log("BigInt Numbers:", numsBigInt);
console.log("Sum of BigInt Numbers:", sum(numsBigInt));
const emptyArray = [];
console.log("Sum of empty array:", sum(emptyArray));
