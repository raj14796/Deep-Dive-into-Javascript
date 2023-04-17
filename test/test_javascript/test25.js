// Write down the defination of createFunction();
const sum = (a,b) => a+b;
const newFunction = createFunction(sum, 10);
console.log(newFunction(20)); // 30
console.log(newFunction(30)); // 60
console.log(newFunction(40)); // 100

// Answer
function createFunction(callback, num) {
    let sum = num
    return function(args) {
        sum = callback(sum,args)
        return sum;
    }
}

// pollyfil of promise


// ---------------------

arr = [33,44,56,22,33,11];
// output = [MINIMUM, MAXIMUM]

// Answer
output = arr.reduce((acc, curr) => {
    if(curr > acc[1]) {
        acc[1] = curr
    }
    if(curr < acc[0]) {
        acc[0] = curr
    }
    return acc
},[99999, -99999]); // [11, 56]