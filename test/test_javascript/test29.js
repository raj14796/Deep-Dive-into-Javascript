// const arr = [1, 2, 3, 4];
// for (var i = 0; i < arr.length; i++) {
//     function fn(input) {
//       setTimeout(function() {
//         console.log('Index: ' + input + ', element: ' + arr[input]);
//       }, 500);
//     }
//     fn(i)
// }

// // 1,2,3,4


// console.log('script start');

// setTimeout(function () {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve()
//   .then(function () {
//     console.log('promise1');
//   })
//   .then(function () {
//     console.log('promise2');
//   });

// console.log('script end');


// const memoize = (anyFunction) => {
//     const cacheObj = {}
//     return function (...args) {
//         const temp = [...args]
//         if (!cacheObj[JSON.stringify(temp)]) {
//             cacheObj[JSON.stringify(temp)] = anyFunction(...args)
//         }
//         return cacheObj[JSON.stringify(temp)]
//     }
// }

// // return a function which will not calculate anything again for the 
// // same set of arguments

// // e.g.
// const sum = (a,b) => {
//     console.log("sum is called")
//     return a + b
// };
// const memoizedSum = memoize(sum)
// console.log(memoizedSum(1,2)) // -> o/p : cache miss 3
// console.log(memoizedSum(1,2))  // -> o/p : cache hit 3


