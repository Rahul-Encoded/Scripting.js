//DOM = DOCUMENT ObJECT MODEL
//      Object{} that represents the page you see in the web browser and provides you with an API to interact with it.
//      Web Browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representaion.
//      JavaScript can access the DOM to dynamically change the content, structure and style of a web page.

console.log(document);
console.dir(document);

document.title = "My website";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

const username = "";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `Guest` : username;
