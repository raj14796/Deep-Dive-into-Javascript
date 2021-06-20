//Garbage Collector is kind of a program used by javascript engine which is used to free the unused memory.
//Disadvantage of closures is that it is not garbage collected.
//But in modern browsers those unused variables are also garbage collected smartly.

function a(){
    var x=0,z=0;
    return function b(){
        console.log(x)
    }
}

a()();