const area = function (radius) {
    return Math.PI * radius * radius
}

const circumference = function (radius) {
    return 2 * Math.PI * radius
}

const diameter = function (radius) {
    return 2 * radius
}

const calculate = function (arr,logic) {
    const output = []
    for (let i = 0; i<arr.length; i++){
        output.push(logic(arr[i]))
    }
    return output
}

const radius = [1,2,3,4]

console.log(calculate(radius,area))
console.log(calculate(radius,circumference))
console.log(calculate(radius,diameter))

//this is very similar to map function which is nothing but a predefined higher order function in Array.
console.log('\n-------------------------------------\n')

console.log(radius.map(area)) //radius.map((radii)=>area(radii))
console.log(radius.map(circumference))
console.log(radius.map(diameter))