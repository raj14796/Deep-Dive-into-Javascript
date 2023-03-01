const parent = {
    name: "Sam",
    sayHi: function () {
        return `${this.name} says hi.`;
    },
    sayHello: () => {
        return `${this.name} says hello.`;
    },
};

console.log(parent.sayHi()); // output -
console.log(parent.sayHello()); // output -