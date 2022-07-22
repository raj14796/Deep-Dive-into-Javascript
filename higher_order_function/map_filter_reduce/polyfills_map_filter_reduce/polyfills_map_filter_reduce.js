const arr = [10, 20, 5, 14, 97, 54, 3];

// Map Function
const doubleArr = arr.map(ele => ele * 2);
console.log('Map Function: ');
console.log(doubleArr);
console.log('-------------------------------');

// Filter Function
const lessThanTwenty = arr.filter(ele => ele < 20);
console.log('Filter Function: ');
console.log(lessThanTwenty);
console.log('-------------------------------');

// Reduce Function
const max = arr.reduce((accumulator, current) => {
    if (current > accumulator) {
        accumulator = current;
    }
    return accumulator;
}, -9999999);
console.log('Reduce Function: ');
console.log(max);
console.log('-------------------------------');



// Polyfill for map
Array.prototype.myMap = function (callback) {
    const givenArray = this;
    const outputArray = [];
    for (let i = 0; i < givenArray.length; i++) {
        const resultForSingleElement = callback(givenArray[i]);
        outputArray.push(resultForSingleElement);
    }
    return outputArray;
}
const myDoubleArr = arr.myMap(ele => ele * 2);
console.log('My Map Function: ');
console.log(myDoubleArr);
console.log('-------------------------------');




// Polyfill for filter
Array.prototype.myFilter = function (callback) {
    const givenArray = this;
    const outputArray = [];
    for (let i = 0; i < givenArray.length; i++) {
        const resultForSingleElement = callback(givenArray[i]);
        if (resultForSingleElement) {
            outputArray.push(givenArray[i]);
        }
    }
    return outputArray;
}
const myLessThanTwenty = arr.myFilter(ele => ele < 20);
console.log('My Filter Function: ');
console.log(myLessThanTwenty);
console.log('-------------------------------');




// Polyfill for reduce
Array.prototype.myReduce = function (callback, initialValueForAccumulator) {
    const givenArray = this;
    let accumulator = initialValueForAccumulator;
    for (let i = 0; i < givenArray.length; i++) {
        if(accumulator === undefined ) {
            accumulator = givenArray[i];
        }
        else{
            accumulator = callback(accumulator, givenArray[i]);
        }
    }
    return accumulator;
}
const myMax = arr.myReduce((accumulator, current) => {
    if (current > accumulator) {
        accumulator = current;
    }
    return accumulator;
}, -9999999);
console.log('My Reduce Function: ');
console.log(myMax);
