//write code to find the given output for this input
let obj ={
    ab: { id: 'abbc', test: 1 },
    bc: { id: 'bccd', test: 2 },
    cd: { id: 'cdde', test: 3 },
    de: { id: 'deef', test: 4 },
}

// output: 
// {
// abbc: {id: 'ab', test: 1}
// bccd: {id: 'bc', test: 2}
// cdde: {id: 'cd', test: 3}
// deef: {id: 'de', test: 4}
// }


// answer

Object.entries(obj).forEach((item) => console.log(item))
console.log('---------');

const obj2 = {};
Object.entries(obj).forEach((item) => {
    [item[0], item[1].id] = [item[1].id, item[0]];
    obj2[item[0]] = item[1];
});
obj = obj2;
console.log(obj);