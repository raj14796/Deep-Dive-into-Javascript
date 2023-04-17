// const ob1 = {
//     a: 1,
//     b: {
//         c: 5
//     },
//     c: [
//         1,
//         {r: 5},
//         [1,2,3,4]
//         ]
// }

// function copy(obj) {
//     const ob2 = Array.isArray(obj) ? [] : {}
//     // function copy2() {
//         for (let key in obj) {
//             if (typeof key === 'object') {
//                 const copyObj = copy(obj[key])
//                 ob2[key] = copyObj
//             }
//             else {
//               ob2[key] = obj[key]
//             }
//         }
//     // }
//     return ob2
// }

// const aqww = 



const arr = [1, 3, 4, 6, 9]
const sum = 7
let n1, n2;

function findPair(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; i < arr.length; j++) {
            if (arr[i1] + arr[i2] === sum) {
                return [arr[i1], arr[i2]]
            }
        }
    }
}
// const pair = findPair(arr, )

function findPair1(arr, sum) {
    const obj = {}
    const res = []
    arr.some(ele => {
        if (obj[sum - ele]) {
            res[0] = ele
            res[1] = sum - ele
            return true;
        }
        obj[ele] = true;
        return false;
    })
    return res
}

