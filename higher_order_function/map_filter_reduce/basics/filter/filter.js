//applies on array and returns array
const arr = [1, 2, 3, 4, 5]

function oddFunction(x) {
    return x % 2 !== 0;
}

const odd = arr.filter(oddFunction)
const even = arr.filter(function (x) {
    return x % 2 === 0;
})
const greaterThanThree = arr.filter(x => x > 3)

console.log('Odd : ', odd);
console.log('Even : ', even);
console.log('Greater Than 3 : ', greaterThanThree);