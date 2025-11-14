const sum = (a, b) => a + b;
const mult = (a, b) => a * b;
const average = (a, b) => sum(a, b) / 2;
const sign = (n) => (n > 0 ? 1 : n < 0 ? -1 : 0);

console.log(sum(5, 10));
console.log(mult(4, 3));
console.log(average(8, 12));
console.log(sign(-7));