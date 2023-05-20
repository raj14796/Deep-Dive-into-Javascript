const STATUS = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
}

function MyPromise(callback) {
    let value;
    let error;
    let status = STATUS.PENDING;
    let thenCbs = [];
    let catchCbs = [];

    function setValue(val) {
        value = val;
    }
    function getValue() {
        return value;
    }
    function setError(err) {
        error = err;
    }
    function getError() {
        return error;
    }
    function setStatus(stat) {
        status = stat;
    }
    function getStatus() {
        return status;
    }
    function setThenCbs(cbArr) {
        thenCbs = cbArr;
    }
    function getThenCbs() {
        return thenCbs;
    }
    function setCatchCbs(cbArr) {
        catchCbs = cbArr;
    }
    function getCatchCbs() {
        return catchCbs;
    }

    function runCallbacks() {
        if (getStatus.call(this) === STATUS.FULFILLED) {
            for (let i = 0; i < getThenCbs.call(this).length; i++) {
                const cb = getThenCbs.call(this)[i];
                cb(getValue.call(this));
            }
            setThenCbs.call(this, [])
        }
        if (getStatus.call(this) === STATUS.REJECTED) {
            for (let i = 0; i < getCatchCbs.call(this).length; i++) {
                const cb = getCatchCbs.call(this)[i];
                cb(getError.call(this));
            }
            setCatchCbs.call(this, [])
        }
    }

    function resolve(val) {
        if (getStatus.call(this) !== STATUS.PENDING) return;
        setValue.call(this, val);
        setStatus.call(this, STATUS.FULFILLED);
        runCallbacks.call(this);
    }
    function reject(err) {
        if (getStatus.call(this) !== STATUS.PENDING) return;
        setError.call(this, err);
        setStatus.call(this, STATUS.REJECTED);
        runCallbacks.call(this);
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
            setThenCbs.call(this, [...getThenCbs.call(this), successCb]);
            setCatchCbs.call(this, [...getCatchCbs.call(this), failureCb]);
            runCallbacks.call(this);
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
    })
}, 300)
const promise2 = new MyPromise((resolve, reject) => {
    // reject('error');
    setTimeout(function () {
        reject('error');
    })
}, 100)
const promise3 = new MyPromise((resolve, reject) => {
    // resolve(2);
    setTimeout(function () {
        resolve(2);
    }, 400)
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
