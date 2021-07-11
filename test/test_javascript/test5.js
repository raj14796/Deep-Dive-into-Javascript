// Guess the output
let arr = [1,2,3,4,5]
let i;
for(i=0;i<arr.length;i++){
    setTimeout(()=>{
        console.log(arr[i])
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