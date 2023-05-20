const STATUS = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
}

function MyPromise(callback) {
    let value;
    let error;
    let status = STATUS.PENDING;

    function resolve(val) {
        if (status !== STATUS.PENDING) return;
        value = val;
        status = STATUS.FULFILLED;
    }
    function reject(err) {
        if (status !== STATUS.PENDING) return;
        error = err;
        status = STATUS.REJECTED;
    }
    this.then = function (thenCb) {
        if (status === STATUS.FULFILLED) {
            value = thenCb(value);
        }
        return this;
    }
    this.catch = function (catchCb) {
        if (status === STATUS.REJECTED) {
            error = catchCb(error);
        }
        return this;
    }
    this.finally = function (finallyCb) {
        if (status !== STATUS.PENDING) {
            finallyCb()
        }
        return this;
    }
    callback(resolve, reject)
}

MyPromise.resolve = function (val) {
    return new MyPromise(function (resolve, reject) {
        resolve(val)
    })
}
MyPromise.reject = function (err) {
    return new MyPromise(function (resolve, reject) {
        reject(err)
    })
}
MyPromise.race = function (arr) {
    return new MyPromise(function (resolve, reject) {
        for (let i = 0; i < arr.length; i++) {
            const aPromise = arr[i];
            aPromise
                .then(resolve)
                .catch(reject)
        }
    })
}
MyPromise.any = function (arr) {
    const errors = [];
    let rejectedCount = 0;
    return new MyPromise(function (resolve, reject) {
        for (let i = 0; i < arr.length; i++) {
            const aPromise = arr[i];
            aPromise
                .then(resolve)
                .catch(function (err) {
                    rejectedCount++;
                    errors[i] = err;
                    if (rejectedCount === arr.length) {
                        reject(new AggregateError(errors, 'All promises were rejected'));
                    }
                })
        }
    })
}
MyPromise.all = function (arr) {
    const results = [];
    let fulfilledCount = 0;
    return new MyPromise(function (resolve, reject) {
        for (let i = 0; i < arr.length; i++) {
            const aPromise = arr[i];
            aPromise
                .then(function (res) {
                    fulfilledCount++;
                    results[i] = res;
                    if (fulfilledCount === arr.length) {
                        resolve(results);
                    }
                })
                .catch(reject)
        }
    });
}
MyPromise.allSettled = function (arr) {
    const results = [];
    let completedPromises = 0;
    return new MyPromise(function (resolve, reject) {
        for (let i = 0; i < arr.length; i++) {
            const aPromise = arr[i];
            aPromise
                .then(function (res) {
                    results[i] = { status: STATUS.FULFILLED, value: res };
                })
                .catch(function (err) {
                    results[i] = { status: STATUS.REJECTED, reason: err };
                })
                .finally(function () {
                    completedPromises++;
                    if (completedPromises === arr.length) {
                        resolve(results)
                    }
                })
        }
    })
}

const promise = new MyPromise((resolve, reject) => {
    resolve(1);
})
const promise2 = new MyPromise((resolve, reject) => {
    reject('error');
})
const promise3 = new MyPromise((resolve, reject) => {
    resolve(2);
})

// then / catch / finally
promise
    .then(res => { console.log('then', res); return res + 1; })
    .finally(res => { console.log('finally', res); })
    .then(res => { console.log('then2', res); return res; })
    .catch(err => console.log(err))
    .finally(res => console.log('finally2', res))

// all
// MyPromise.all([promise, promise3]).then(res => console.log(res));
// MyPromise.all([promise, promise2, promise3]).then(res => console.log(res)).catch(err => console.log(err));

// allSettled
// MyPromise.allSettled([promise, promise3]).then(res => console.log(res));
// MyPromise.allSettled([promise, promise2, promise3]).then(res => console.log(res));

// race
// MyPromise.race([promise, promise3]).then(res => console.log(res));
// MyPromise.race([promise2, promise, promise3]).then(res => console.log(res)).catch(err => console.log(err));

// any
// MyPromise.any([promise, promise3]).then(res => console.log(res));
// MyPromise.any([promise2]).then(res => console.log(res)).catch(err => console.log(err));
