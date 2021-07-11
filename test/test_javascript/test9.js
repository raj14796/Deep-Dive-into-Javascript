//Guess the output

let count = 0;

setTimeout(() => {
    clearInterval(timerInterval)
    a = false;
}, 2000)

let timerInterval = setInterval(() => {
    console.log(count++)
}, 200);


