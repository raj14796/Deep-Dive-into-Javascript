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
const price = 1;
const res = product1.calculateReturn(100)
console.log('res: ', res)
const result = product1.calculateReturn.call(product2, 40);
console.log('result: ', result)