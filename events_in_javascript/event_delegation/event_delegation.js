//Event delegation refers to the process of using event propagation (bubbling) to handle 
//events at a higher level in the DOM than the element on which the event originated. 
//It allows us to attach a single event listener for elements that exist now or in the future. 
//Inside the Event Handling Function.

document.querySelector("#category")
    .addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target.tagName == 'LI')
            window.location.href = "/" + e.target.id;
    })