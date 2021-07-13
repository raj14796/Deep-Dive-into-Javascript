//Currying provides a way for working with functions that take multiple arguments,
//and using them in frameworks where functions might take only one argument. 
//For example, some analytical techniques can only be applied to functions 
//with a single argument. Practical functions frequently take more arguments than this.

let multiply = function(x,y){
    console.log(x*y)
}

let multiplyByTwo = multiply.bind(this,2)
multiplyByTwo(5)

let multiplyByThree = multiply.bind(this,3)
multiplyByThree(5)