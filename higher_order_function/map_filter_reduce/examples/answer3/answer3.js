const users = [
    { firstName: "ravi", lastName: "raj", age: 25 },
    { firstName: "narendra", lastName: "modi", age: 75 },
    { firstName: "akshay", lastName: "kumar", age: 50 },
    { firstName: "ishan", lastName: "singh", age: 9 }
]

//Approach 1 : map,filter chaining
console.log("Approach 1 : map,filter chaining\n")
const ageLessThanThirty = users.filter((aUser) => aUser.age < 30).map((aUser) => aUser.firstName + " " + aUser.lastName)
console.log(ageLessThanThirty)


console.log("\n--------------------------------------\n")
//Approach 2 : reduce function
console.log("Approach 2 : reduce function\n")
const ageLessThanThirty1 = users.reduce((accumulator, aUser) => {
    if (aUser.age < 30) {
        accumulator.push(aUser.firstName + " " + aUser.lastName)
    }
    return accumulator
}, [])
console.log(ageLessThanThirty1)