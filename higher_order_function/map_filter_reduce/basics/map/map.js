//applies on array and returns array
const arr = [1,2,3,4,5]

function doubleFunction(x){
    return x*2;
}

const double = arr.map(doubleFunction)
const triple = arr.map(function (x){
    return x*3;
})
const binary = arr.map(x => x.toString(2))

console.log("double : ",double);
console.log('triple : ',triple);
console.log('binary : ',binary);