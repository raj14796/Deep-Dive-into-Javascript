// Given an array of key value pairs in which the keys are multi dimensional keys , need to build the actual object out of it 

// const arr =  ["name-firstName:abc", "name-lastName:de", "new-object-key:value"]

// // {
// // name:{
// // firstName:”abc”,
// // Lastname:”de”
// // },
// // new:{
// // object:{key: “value”}
// // }
// // }

// function fn(arr1) {
//     let obj = {}
//     arr1.forEach((ele,index) => {
//         let spl = ele.split('-');
//         const tempLast = spl[spl.length-1].split(':');
//         let tempLastObj = {[tempLast[0]] : tempLast[1]}
//         console.log(tempLastObj)
//         for(let i = spl.length-2; i>=0; i--) {
//             tempLastObj = { [spl[i]] : tempLastObj}
//         }
//         for(let key in tempLastObj) {
//             if(obj[key]) {
//                 obj[key] = {...obj[key], ...tempLastObj[key]}
//             }
//             else {
//                 obj[key] = {...tempLastObj[key]}
//             }
//         }
//     })
//     return obj
// }
// console.log(fn(arr))


