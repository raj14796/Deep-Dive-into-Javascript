// implement myMap using reduce()
// const arr = [1,2,3,4]

// const doubleArr = arr.map(ele => ele*2)
// console.log(doubleArr)

// const sum = arr.reduce((acc,curr) => acc+curr, 0)
// console.log(sum)

// Array.prototype.myMap = function(callback) {
//   const array = this;
//   const res = array.reduce((acc, curr, index) => {
//     acc.push(callback(curr, index))
//     return acc;
//   }, [])
//   return res
// }

// const doubleArr2 = arr.myMap(ele => ele*2)
// console.log(doubleArr2 , "doubleArr2")

const p1 = new Promise((resolve, reject) => {
  resolve("1");
});
const p2 = new Promise((resolve, reject) => {
  reject("100");
});
const p3 = new Promise((resolve, reject) => {
  resolve("10");
});

const arr1 = [p1, p2, p3];

async function fn(arr) {
  let failed = false;
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    try {
      const res = await ele;
    } catch (e) {
      console.log("in catch", i, ele, e);
      failed = true;
    }
  }
  return failed
    ? false
    : new Promise((resolve, reject) => {
        resolve("98");
      });
}
fn(arr1).then((res) => console.log(res));