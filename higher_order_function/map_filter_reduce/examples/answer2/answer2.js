const users = [
    { firstName: "ravi", lastName: "raj", age: 25 },
    { firstName: "narendra", lastName: "modi", age: 75 },
    { firstName: "akshay", lastName: "kumar", age: 50 },
    { firstName: "ishan", lastName: "singh", age: 25 }
]

const ageFrequency = users.reduce((accumulator, currentValue) => {
    console.log("accumulator : ",accumulator)
    if (accumulator[currentValue.age]) {
        accumulator[currentValue.age] += 1
    }
    else {
        accumulator[currentValue.age] = 1
    }
    return accumulator
}, {})

console.log("Final frequency : ",ageFrequency)