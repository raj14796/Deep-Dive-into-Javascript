//Event bubbling is a type of EVENT PROPAGATION where the event first triggers on the innermost 
//target element, and then successively triggers on the ancestors (parents) of the target element 
//in the same nesting hierarchy till it reaches the outermost DOM element or document object 
//(Provided the handler is initialized).

// document.querySelector("#grandParent")
//     .addEventListener('click', () => {
//         console.log('Grand Parent Clicked');
//     },false)

// document.querySelector("#parent")
//     .addEventListener('click', () => {
//         console.log('Parent Clicked');
//     },false)

// document.querySelector("#child")
//     .addEventListener('click', () => {
//         console.log('Child Clicked');
//     },false)


//This is an example of event bubbling.
//Here first child event is called and then parent and then grand parent.
//For event capturing or trickling, put true instead of false.
//Default value is false only even if we don't pass the second argument.
//Capturing Down and Bubbling Up.




document.querySelector("#grandParent")
    .addEventListener('click', () => {
        console.log('Grand Parent Clicked');
    },true)//capturing

document.querySelector("#parent")
    .addEventListener('click', () => {
        console.log('Parent Clicked');
    },false)//bubbling

document.querySelector("#child")
    .addEventListener('click', () => {
        console.log('Child Clicked');
    },true)//capturing





//Stop Propagation
//It stops the further event propagation. 

// document.querySelector("#grandParent")
//     .addEventListener('click', () => {
//         console.log('Grand Parent Clicked');
//     },false)

// document.querySelector("#parent")
//     .addEventListener('click', (e) => {
//         console.log('Parent Clicked');
//         e.stopPropagation();
//     },false)

// document.querySelector("#child")
//     .addEventListener('click', () => {
//         console.log('Child Clicked');
//     },false)
