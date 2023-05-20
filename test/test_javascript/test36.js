// const arr1 = [1,2,-1,-18, 8, 9]
// const arr2 = [-1,-1,-2,-4,-19]
// const arr3 = [2,2,4,67,98]
// function fn(arr) {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     if (min < 0) {
//         if (max > 0) {
//             return min*max;
//         }
//         else {
//             const ind = arr.indexOf(max)
//             const temp = [...arr]
//             temp.splice(ind, 1)
//             const max2 = Math.max(...temp);
//             return max*max2;
//         }
//     }
//     else {
//         const ind = arr.indexOf(min)
//         const temp = [...arr]
//         temp.splice(ind, 1)
//         const min2 = Math.min(...temp);
//         return min*min2;
//     }
//     return min*max;
// }

// console.log(fn(arr2))



// let i;
// for(i=0; i<5;i++) {
//   setTimeout(() => console.log(i));
// }

// sum(1,2). //3
// sum(1)(2)





const testFunc = (a, b, c) => a + b + c;
console.log(testFunc.length)
const curriedTestFunc = curry(testFunc);
console.log(curriedTestFunc(1, 2, 3));
console.log(curriedTestFunc(1)(2)(3));
console.log(curriedTestFunc(1, 2)(3));
console.log(curriedTestFunc(1)(2, 3));


function curry(fn) {
    const len = fn.length;
    return function inner(...args) {
        if (args.length === len) {
            return fn(...args)
        }
        else {
            return function (...arg2) {
                return inner(...args, ...arg2)
            }
        }
    }
}



















