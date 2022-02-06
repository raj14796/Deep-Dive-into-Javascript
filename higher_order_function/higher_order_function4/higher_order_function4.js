// Polyfill for reduce function

Array.prototype.myReduce = function (logic, accumulator) {
    for (let i = 0; i < this.length; i++) {
        accumulator = logic(accumulator,this[i]);
    }
    return accumulator;
}




const arr = [1, 2, 1000, 4, 5];
const max = arr.myReduce((accumulator, current) => {
    if (current > accumulator) {
        accumulator = current;
    }
    return accumulator
}, -999999);

console.log('max: ',max);