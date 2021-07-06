//Function calls depends on user in debouncing

counter = 0;
const getData = () => {
    //calls an api and gets data
    console.log('Fetching Data...', counter++)
}

const debounce = (fn, delay) => {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        console.log(context,args)
        clearTimeout(timer);
        setTimeout(() => {
            //console.log('inside timer')
            fn.apply(context, args)
        }, delay);
    }
}

const searchBox = document.querySelector('.searchBox')
searchBox.addEventListener('keyup', () => {
    debounce(getData, 300)();
})

//Some Examples :
//  search box
//  changing window size
//  scrolling
