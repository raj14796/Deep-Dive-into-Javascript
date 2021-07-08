// let a = 10;
// //var a = 10;
// {
//     var a = 100;
// }
// console.log(a);


function abc(){
    let a = 10;
    return function def(){
        let a = 20;
        return function ghi(){
            console.log(a)
        }
    }
}
abc()()()