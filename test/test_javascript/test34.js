// Write a function to merge 2 sorted lists.
function merge(arr1, arr2) {
    const res = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        }
        else {
            res.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        res.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        res.push(arr2[j]);
        j++;
    }
    return res;
}

const l1 = []
const l2 = [1, 3, 9]
const l3 = [4, 6, 7]
const l4 = [4, 6, 8]
// 1 3
// console.log(merge(l1,l2))
mergeKLists(l1, l2, l3, l4)
mergeKLists(l1, l2, l3)
mergeKLists(l1, l2)
// console.log(mergeKLists(l1,l2, l3, l4))
function mergeKLists(...arr) {
    const nList = arr.length;
    let pointers = new Array(nList).fill(0);
    const res = [];
    const abc = arr.reduce((acc, curr) => acc + curr.length, 0) // n*k
    while (res.length !== abc) { // n*k
        const smallest = findMin(pointers.map((aPointer, index) => (
            { index: index, value: arr[index][aPointer] }
        )))
        pointers[smallest.index]++;
        // console.log(smallest)
        res.push(smallest.min)
    }
    return res;
}

function findMin(arr) {  // k
    return arr.reduce((acc, curr) => {
        if (curr !== undefined && acc.min > curr.value) {
            acc.index = curr.index;
            acc.min = curr.value;
        }
        return acc
    }, { index: null, min: 99999 })
}

// k = number of list 
// n = number of elements in one list


///Implement multiply(x)(y)
// multiply(5)(6) => 30

function multiply(num1) {
    return function (num2) {
        return num1 * num2;
    }
}
console.log(multiply(2)(5))


