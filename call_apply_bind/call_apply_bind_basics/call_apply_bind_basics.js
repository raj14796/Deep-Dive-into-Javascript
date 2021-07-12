let name = {
    firstname: 'Ravi',
    lastname: 'Raj'
}

let printFullName = function (hometown, state) {
    console.log(this.firstname + ' ' + this.lastname + ' from ' + hometown + ', ' + state)
}

//function borrowing
printFullName.call(name, 'Patna', 'Bihar')

let name2 = {
    firstname: 'Abhik',
    lastname: 'Mehta'
}

//call and apply : function borrowing 
printFullName.call(name2, 'Patna', 'Bihar')
    
printFullName.apply(name2, ['Patna', 'Bihar'])


//bind method : returns reference of the function
let printMyName = printFullName.bind(name2,'Patna', 'Bihar')
console.log(printMyName)
printMyName()




//The first argument of all three functions contains the context for which the function is to be invoked.