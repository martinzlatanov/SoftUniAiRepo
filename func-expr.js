const add = function(a, b) {
    return a + b;
};

console.log(add(2, 3));
let sum = add, sqrt = Math.sqrt;
console.log(sqrt(sum(3,6)));