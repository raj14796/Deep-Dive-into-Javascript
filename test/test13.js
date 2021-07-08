//What is proper way to check undefined
let a;
console.log('a : ',typeof a);
console.log('b : ',typeof b);

console.log(a===undefined);
console.log(a==='undefined')
let c='undefined'
console.log(c==='undefined')


//line 6 is the proper way. why?
//Same goes for null too