//Function Statement aka Function Declaration
function a() {
    console.log("Function Statement aka Function Declaration");
}


//Function Expression
const b = function () {
    console.log("Function Expression");
}


//Named Function Expression
const c = function xyz() {
    console.log("Named Function Expression");
}
//Difference between Function Statement and Function Expression is HOISTING.


//Anonymous Function
function() {
    console.log("Anonymous Function");
}
//Anonymous Function does not have its own identity.
//It always needs to be declared like function expression.
//Otherwise,it will result into syntax error: Function statements require a function name.



//Difference between parameters and arguments
function d(parameter) {
    console.log("Difference between parameters and arguments");
}
d(argument);



//First Class Function
console.log("A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.");



//Arrow Function
const e = () => {
    console.log("Arrow Function");
}