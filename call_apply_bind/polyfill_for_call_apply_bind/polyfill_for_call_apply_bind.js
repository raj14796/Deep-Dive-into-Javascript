// the goal is to add a new entry in the name object which has the value = printName function

let name = {
    firstname: 'Ravi',
    lastname: 'Raj'
};

let printName = function (hometown, state, country) {
    console.log(this.firstname + ' ' + this.lastname + ', from ' + hometown + ', ' + state + ', ' + country);
};

// call method
console.log('1.call method : ');
printName.call(name, 'Patna', 'Bihar', 'India');

// apply method
console.log('2.apply method : ');
printName.apply(name, ['Patna', 'Bihar', 'India'])

// bind method
console.log('3.bind method : ');
const printMyName = printName.bind(name, 'Patna', 'Bihar', 'India');
printMyName();





// Polyfills
console.log('--------------***--------------');

// Polyfill for call method
console.log('1.Polyfill for call method : ');
Function.prototype.myCall = function (context, ...args) {
    context._this = this; // this = printName
    context._this(...args);
}
printName.myCall(name, 'Patna', 'Bihar', 'India');

// Polyfill for apply method
console.log('2.Polyfill for apply method : ');
Function.prototype.myApply = function (context, args) {
    context._this = this; // this = printName
    context._this(...args);
}
printName.myApply(name, ['Patna', 'Bihar', 'India']);

// Polyfill for bind method
console.log('3.Polyfill for bind method : ');
Function.prototype.myBind = function (context, ...args) {
    context._this = this; // this = printName
    return function () {
        context._this(...args);
    }
}
const printMyName2 = printName.myBind(name, 'Patna', 'Bihar', 'India');
printMyName2();
const printMyName3 = printName.myBind(name, 'Patna', 'Bihar');
printMyName2('India');
