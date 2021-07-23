//applies on array and returns single value i.e, final value of accumulator
//final accumulator value can be of any type (integer, string, array etc)
const arr = [1, 2, 3, 4, 5]

const sum = arr.reduce(function (accumulator, current) {
    accumulator += current;
    return accumulator;
}, 0)

const max = arr.reduce((accumulator, current) => {
    if (current > accumulator) {
        accumulator = current;
    }
    return accumulator;
}, -999999)

console.log('Sum : ', sum);
console.log('Maximum : ', max)