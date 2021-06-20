var count = 0;
function incrementCounter() {
    count++;
}
console.log(count);
//the problem here is anyone can access that counter using increment or decrement function.




// function counter() {
//     var count = 0;
//     function incrementCounter() {
//         count++;
//         console.log(count)
//     }
//     return incrementCounter;
// }
// var counter1 = counter();
// counter1();
// var counter2 = counter();
// counter2();
//counter1 and counter2 are different references, so both will have the independent values.
//now nobody can access the counter value outside the function ----- Data hiding is achieved.
//the problem here is we can create only one function.





// function Counter() {
//     var count = 0;
//     this.incrementCounter = function () {
//         count++;
//         console.log(count)
//     }
//     this.decrementCounter = function () {
//         count--;
//         console.log(count)
//     }
// }
// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.decrementCounter();
//here we can create as many functions as we want.
//so the solution is creating constructor function. 