const body = document.body;
body.append("Hello World", " Bye");
//body.appendChild("Hello World");//this will give error
const div = document.createElement("div");
div.innerText = "Hello Div";
const div2 = document.createElement("div");
div2.innerHTML = "<strong>Hello div2</strong>"
body.appendChild(div);
body.append(div2);