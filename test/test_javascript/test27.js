// write a function which returns true if there is a subarray with sum=0, otherwise return false

const arr1 = [3,9,3,4,-7,6,3,2]; // 
const arr2 = [0,10,12,2]

// O(n*n)
function fn(arr) {
    for(let i=0; i<arr.length; i++) {
        let sum = arr[i];
        if(element === 0) {
            return true;
        }
        if(sum === 0) {
            return true
        }
        for(let j=i+1; j<arr.length; j++) {
            sum+=arr[j];
            if(sum === 0) {
                return true
            }
        }
    }
    return false;
}
console.log(fn(arr2))

// O(n)
function fn2(arr) {
    const obj = {};
    let sum=0
    arr.some(element => {
        sum+=element;
        if(obj[sum]) {
            return true;
        }
        else {
            obj[sum] = true;
            return false;
        }
    });
}
console.log(fn(arr2))