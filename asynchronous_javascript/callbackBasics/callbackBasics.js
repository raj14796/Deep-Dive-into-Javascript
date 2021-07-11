//A callback is a function passed as an argument to another function. 
//This technique allows a function to call another function. 
//A callback function can run after another function has finished(Asynchronous).

function x(y){
    console.log("Function x");
    y();
}

x(function(y){
    console.log("Function y");
})

//y is a callback function.
//x is a higher order function.