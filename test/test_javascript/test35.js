async function fn() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 100)
    })
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null)
        }, 1000)
    })
    const result = Promise.race([promise, promise2]).then(res => {
        //   console.log(res)
        return res
    })
    return result
}

fn().then(res => {
    console.log(res)
})