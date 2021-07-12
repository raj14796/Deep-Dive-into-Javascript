// Guess the output
let arr = [1,2,3,4,5]
let i;
for(let j=0;j<arr.length;j++){
    console.log(j)
}
console.log('-----------------------------------')
for(i=0;i<arr.length;i++){
    setTimeout(()=>{
        console.log(i,arr[i])
    },2000)
}

setTimeout(()=>{
    console.log('-----------------------------------')
},2000)

for(let i=0;i<arr.length;i++){
    setTimeout(()=>{
        console.log(arr[i])
    },2000)
}

setTimeout(()=>{
    console.log('-----------------------------------')
},2000)

for(var j=0;j<arr.length;j++){
    setTimeout(()=>{
        console.log(arr[j])
    },2000)
}