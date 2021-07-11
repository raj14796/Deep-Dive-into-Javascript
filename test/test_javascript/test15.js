//Guess the output
let a = true;
let count=0;

setTimeout(() => {
    a=false;
}, 2000);

while(a){
    console.log(count++)
}