// let count = 0;
// document.getElementById("clickMe")
//     .addEventListener("click", function xyz() {
//         console.log("Button Clicked ", ++count);
//     })
//Callback function xyz will be called only after click event occurs.
//this is not a good program as count is global variable.
//solution is closure.


function attachEventListener() {
    let count = 0;
    document.getElementById("clickMe")
        .addEventListener("click", function xyz() {
            console.log("Button Clicked ", ++count);
        })
}
attachEventListener();