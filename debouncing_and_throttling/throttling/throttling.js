let counter = 0;
const getData = () => {
    //calls an api and gets data
    console.log('Fetching Data...', counter++)
}

const throttle = function (fn, limit) {
    let flag = true;
    return function () {
        let context = this,
            args = arguments;
        if (flag) {
            fn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit)
        }
    }
}


const betterFunction = throttle(getData, 300);

const searchBox = document.querySelector('.searchBox');
searchBox.addEventListener('keyup', () => {
    betterFunction();
    // throttle(getData, 300)()  // if we use this way instead of storing into betterFunction, throttlling won't work as on every key stroke throttle() will give new reference.
})