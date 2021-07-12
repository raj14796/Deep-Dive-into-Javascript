//Guess the output

let count = 0;

setTimeout(() => {
    clearInterval(timerInterval)
}, 2000)

let timerInterval = setInterval(() => {
    console.log(count++)
}, 200);


