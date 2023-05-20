function Student (name, age) {
    this.name = name;
    this.age = age;
}

var Laws = {
    drinking_age : function (age, fn) {
        setTimeout(function() {
            console.log('age >>>>', age)
            fn(age > 21);
        },1000)
    }
}

Student.prototype.check_drinking = function check_drinking (fn) {
    console.log('this >>>>', this)
    Laws.drinking_age(this.age, function (able_to_drink) {
        console.log('this.age >>>>', this.age)
        if (able_to_drink) {
            fn(null, true);
        } else {
            fn(this.age + " does not meet the minimum drinking age.", false);
        }
    });
};

const s = new Student('ravi', 26)
s.check_drinking((message, ableToDrink) => console.log('ableToDrink >>>>', ableToDrink))