//closures are the functions bundled together with its lexical scope
//whenever a closure is formed, it takes the reference of the variable used inside that
//we are calling the inner functions outside the scope of the variables used inside that but still we are getting the same values of the variables
function outest(){
    var c = 20;
    function outer(b){
        function inner(){
            console.log(a,b,c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}
let a = 100;
var close = outest()("Hello World")();