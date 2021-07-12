//Guess the output 
a = 100;
console.log(a)


// reason: if var,const,let are not given, Javascript attaches the variable to global scope.


function abc() {
    b = 100;
    console.log(b)
}
abc()
console.log(b)