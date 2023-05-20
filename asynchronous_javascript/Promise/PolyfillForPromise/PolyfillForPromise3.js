const STATUS = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
}
console.log('ravi')

function MyPromise(callback) {
    let value;
    let error;
    let status = STATUS.PENDING;
    let thenCbs = [];
    let catchCbs = [];

    function runCallbacks() {
        if (status === STATUS.FULFILLED) {
            for (let i = 0; i < thenCbs.length; i++) {
                const cb = thenCbs[i];
                cb(value);
            }
            thenCbs = [];
        }
        if (status === STATUS.REJECTED) {
            for (let i = 0; i < catchCbs.length; i++) {
                const cb = catchCbs[i];
                cb(error);
            }
            catchCbs = [];
        }
    }

    function resolve(val) {
        queueMicrotask(function () {
            if (status !== STATUS.PENDING) return;
            value = val;
            status = STATUS.FULFILLED;
            runCallbacks();
        })
    }
    function reject(err) {
        queueMicrotask(function () {
            if (status !== STATUS.PENDING) return;
            error = err;
            status = STATUS.REJECTED;
            runCallbacks();
        })
    }
    this.then = function (thenCb, catchCb) {
        return new MyPromise(function (resolve, reject) {
            const successCb = function (result) {
                if (thenCb == null) {
                    resolve(result);
                    return;
                }
                try {
                    resolve(thenCb(result));
                }
                catch (e) {
                    reject(e)
                }
            }
            const failureCb = function (err) {
                if (catchCb == null) {
                    reject(err);
                    return;
                }
                try {
                    resolve(catchCb(err));
                }
                catch (e) {
                    reject(e)
                }
            }
            thenCbs.push(successCb);
            catchCbs.push(failureCb);
            runCallbacks();
        })
    }
    this.catch = function (cathchCb) {
        return this.then(undefined, cathchCb);
    }
    this.finally = function (finallyCb) {
        const cb = function (result) {
            finallyCb();
            return result;
        }
        return this.then(cb, cb);
    }
    callback(resolve, reject);
}

const promise = new MyPromise((resolve, reject) => {
    // resolve(1);
    setTimeout(function () {
        resolve(1);
    }, 5000)
})
const promise2 = new MyPromise((resolve, reject) => {
    // reject('error');
    setTimeout(function () {
        reject('error');
    }, 3000)
})
const promise3 = new MyPromise((resolve, reject) => {
    // resolve(2);
    setTimeout(function () {
        resolve(2);
    }, 4000)
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
// MyPromise.allSettled([promise, promise3]).then(res => {console.log(res); return res;});
// MyPromise.allSettled([promise, promise2, promise3]).then(res => console.log(res));

// race
// MyPromise.race([promise, promise3]).then(res => console.log(res));
// MyPromise.race([promise2, promise, promise3]).then(res => console.log(res)).catch(err => console.log(err));

// any
// MyPromise.any([promise, promise3]).then(res => console.log(res));
// MyPromise.any([promise2]).then(res => console.log(res)).catch(err => console.log(err));
