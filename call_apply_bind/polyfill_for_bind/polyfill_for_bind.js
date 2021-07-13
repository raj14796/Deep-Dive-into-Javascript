//A polyfill is a piece of code (usually JavaScript on the Web) used to 
//provide modern functionality on older browsers that do not natively support it.
//here we are writing polyfill for bind.

let name = {
    firstname: 'Ravi',
    lastname: 'Raj'
}

let printName = function (hometown, state, country) {
    console.log(this.firstname + ' ' + this.lastname + ', from ' + hometown + ', ' + state + ', ' + country)
}
console.log('Original bind method : ')
//bind function
let printMyname = printName.bind(name, 'Patna', 'Bihar')
printMyname('India')


console.log('--------------------------------------------------------------')


console.log('Polyfill myBind method : ')
//Polyfill myBind
Function.prototype.myBind = function (...args) {
    let obj = this,
        params = args.slice(1)
    return function(...args2){
        obj.apply(args[0],[...params,[...args2]])
    }
}
//params=['Patna', 'Bihar']     
//args2=['India']

let printMyname2 = printName.myBind(name,'Patna','Bihar')
printMyname2('India')