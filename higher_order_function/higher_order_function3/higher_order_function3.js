//Polyfill for map function
const area = function (radius) {
    return Math.PI * radius * radius
}

const circumference = function (radius) {
    return 2 * Math.PI * radius
}

const diameter = function (radius) {
    return 2 * radius
}

Array.prototype.calculate = function (logic) {
    const output = []
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]))
    }
    return output
}

const radius = [1, 2, 3, 4]

console.log(radius.calculate(area))    //radius.calculate((radii)=>area(radii))
console.log(radius.calculate(circumference))
console.log(radius.calculate(diameter))
