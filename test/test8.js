//Guess the output

let a = true;
let count = 0;

setTimeout(()=>{
    a=false;
},2000)

setInterval(() => {
    if(a){
        console.log(count++)
    }
}, 200);


