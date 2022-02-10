let counter = 0;
const getData = () => {
    //calls an api and gets data
    console.log('Fetching Data...', counter++)
}

const debounce = (fn, delay) => {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        // console.log(context,args)
        clearTimeout(timer);
        timer = setTimeout(() => {
            //console.log('inside timer')
            fn.apply(context, args)
        }, delay);
    }
}
const betterFunction = debounce(getData, 300);

const searchBox = document.querySelector('.searchBox')
searchBox.addEventListener('keyup', () => {
    betterFunction();
    // debounce(getData, 300)()  // if we use this way instead of storing into betterFunction, debouncing won't work as on every key stroke debounce() will give new reference.
})

//Some Examples :
//  search box
//  changing window size
//  scrolling
