//Why this iffe not work

function abc() {
    console.log('abc')
} ();


//ans : iffe needs to be defined inside parenthesis like this-
// (function abc() {
//     console.log('abc')
// }) ();