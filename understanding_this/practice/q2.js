const parent = {
    name: "Sam",
    sayHi: function () {
        const sayHola = () => {
            return `${this.name} says hola.`;
        }
        console.log(sayHola()); // output -
        return `${this.name} says hi.`;
    },
    sayHello: () => {
        return `${this.name} says hello.`;
    },
};

console.log(parent.sayHi()); // output -
console.log(parent.sayHello()); // output -