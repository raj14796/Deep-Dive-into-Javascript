// run callbacks sequentially

const dataSet = [
    {
        cb: () => new Promise((resolve) => setTimeout(() => resolve("Hello"), 100)),
        t: 500
    },
    {
        cb: () => ({ them: 1, then: 2, those: 3 }),
        t: 400
    },
    {
        cb: () => [1, 2, 3],
        t: 300
    },
    {
        cb: () => false,
        t: 200
    },
    {
        cb: () => "abc",
        t: 100
    }
];

dataSet.reduce((acc, current) => {
    acc += current.t;
    setTimeout(async () => console.log(await current.cb()), acc);
    return acc;
}, 0);

// dataSet.reduce((acc, current) => {
//     acc.push({ ...current, t: current.t + acc[acc.length - 1].t });
//     return acc;
// }, [{ cb: () => { }, t: 0 }])
//     .slice(1)
//     .forEach(ele => setTimeout(async () => console.log(await ele.cb()), ele.t));


// function fun(arr) {
//     if (!arr.length) {
//         return;
//     }
//     let run = false;
//     const t = setTimeout(async () => {
//         run = await arr[0].cb();
//         console.log(run)
//     }, arr[0].t);
//     // console.log("run >>>>", run)
//     fun(arr.slice(1));
// }
// fun(dataSet);


// let i = 0;
// let timer;
// while (i < dataSet.length) {
//     if (!timer) {
//         timer = setTimeout(async () => {
//             const res = await dataSet.cb();
//             if (res) {
//                 console.log(res);
//                 clearTimeout(timer);
//                 i++;
//             }
//         }, dataSet[i].t);
//     }
// }