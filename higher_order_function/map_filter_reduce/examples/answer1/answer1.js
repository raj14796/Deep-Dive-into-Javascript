const users = [
    { firstName: "ravi", lastName: "raj", age: 25 },
    { firstName: "narendra", lastName: "modi", age: 75 },
    { firstName: "akshay", lastName: "kumar", age: 50 },
    { firstName: "ishan", lastName: "singh", age: 9 }
]

const name = users.map((aUser) => aUser.firstName + " " + aUser.lastName)
console.log(name)