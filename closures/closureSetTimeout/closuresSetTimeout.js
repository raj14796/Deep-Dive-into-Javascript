//goal of this program is to print 1 2 3 4 5 respectively after every second
function x() {
    for (var i = 1; i < 6; i++) {
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
    console.log("ravi")
}
x()


// function y() {
//     for (let i = 1; i < 6; i++) {
//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }
//     console.log("ravi")
// }
// y()


// function z() {
//     for (var i = 1; i < 6; i++) {
//         function close(i2){
//             setTimeout(function(){
//                 console.log(i2)
//             },i2*1000)
//         }
//         close(i)
//     }
//     console.log("ravi")
// }
// z()