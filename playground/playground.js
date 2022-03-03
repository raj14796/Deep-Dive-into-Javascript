// const obj = {
//     name : 'ravi'
// }
// function fun(place){
//     console.log(this.name + ' from '+ place);
// }

// fun.call(obj,'Patna');
// fun.apply(obj,['Patna']);
// const fun2 = fun.bind(obj,'Patna')
// fun2();

const product1 = {
    productName: "test",
    price: 20,
    calculateReturn: (givenAmount) => {
        return givenAmount - this.price;
    }
}
const product2 = {
    productName: "test2",
    price: 30
}
var price = 1;
const res = product1.calculateReturn(100)
console.log('res: ',res)
const result = product1.calculateReturn.call(product2, 40);
console.log('result: ',result)








// const fun = () => {
//     const a = 5;
//     console.log(this.a);
// }
// fun();