class Dog {
    constructor(name) {
        this.name = name
    }

    bark() {
        console.log(`Woof, my name is ${this.name}`);
    }

    sitAndBark() {
        setTimeout(function () { console.log(`Woof, my name is ${this.name}`) }, 1000)
    }

    sitAndBarkAgain() {
        setTimeout((function () { console.log(`Woof, my name is ${this.name}`) }).bind(this), 2000)
    }

    sitAndBarkFinally() {
        setTimeout(() => { console.log(`Woof, my name is ${this.name}`) }, 3000)
    }
}

let rex = new Dog('Rex')

rex.bark()
rex.sitAndBark()
rex.sitAndBarkAgain()
rex.sitAndBarkFinally()