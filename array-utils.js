/**
 * Utility functions that operate on an iterable/array named `arr`.
 * Each function returns undefined when there are no numeric values.
 */


function sum(arr) {
    if (arr.length === 0) return undefined;
    return arr.reduce((acc,val) =>  acc + val , 0)
}

function min(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr)
}

function max(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr)
}  

function avg(arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 0) return undefined;
    return sum(arr) / arr.length;

module.exports = { sum, min, max, avg };
