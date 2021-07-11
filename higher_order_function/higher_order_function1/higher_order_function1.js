//Goal is to find area, circumference and diameter of a circle.

const radius = [1, 2, 3, 4]
const calculateAreaOfCircle = function (radius) {
    const output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output
}


const calculateCircumference = function (radius) {
    const output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * 2)
    }
    return output
}


const calculateDiameter = function (radius) {
    const output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(radius[i] * 2)
    }
    return output
}


console.log(calculateAreaOfCircle(radius))
console.log(calculateCircumference(radius))
console.log(calculateDiameter(radius))

//this is not a good approach as code repeatition is there.
//solution 1)constructor function
//solution 2)higher Order function

