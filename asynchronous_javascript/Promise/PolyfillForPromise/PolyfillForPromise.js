const STATE = {
    FULLFILLED: 'FULLFILLED',
    REJECTED: 'REJECTED',
    PENDING: 'PENDING'
}

class MyPromise {
    #thenCbs = []
    #catchCbs = []
    #state = STATE.PENDING
    #value
    #onSuccessBind = this.#onSuccess.bind(this)
    #onFailBind = this.#onFail.bind(this)

    constructor(cb) {
        try {
            cb(this.#onSuccess, this.#onFail)
        } catch (e) {
            this.#onFail(e)
        }
    }
    #runCallbacks() {
        if (this.#state === STATE.FULLFILLED) {
            this.#thenCbs.forEach(callback => {
                callback(this.#value)
            })
            this.#thenCbs = []
        }
        if (this.#state === STATE.REJECTED) {
            this.#catchCbs.forEach(callback => {
                callback(this.#value)
            })
            this.#catchCbs = []
        }
    }
    #onSuccess(value) {
        if (this.#state !== STATE.PENDING) return
        this.#value = value
        this.#state = STATE.FULLFILLED
        this.#runCallbacks()
    }
    #onFail(value) {
        if (this.#state !== STATE.PENDING) return
        this.#value = value
        this.#state = STATE.REJECTED
        this.#runCallbacks()
    }
    then(thenCb, catchCb) {
        // Without Chaining
        // if(thenCb !== null) this.#thenCbs.push(thenCb)
        // if(catchCb !== null) this.#catchCbs.push(catchCb)

        // this.#runCallbacks()

        // With Chaining
        return new MyPromise((resolve, reject) => {
            
        })
    }
    catch(cb) {
        this.then(null, cb)
    }
}

module.exports = MyPromise;