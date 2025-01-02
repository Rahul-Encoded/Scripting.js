//eventListener = Listen for specific events to create interactive web pages events: click, mouseover, mouseout.
//                events: cancelIdleCallback, mouseover, mouseout  
//                .addEventListener(event, callback);
//                The callback can be also a be an anonymous function or arrow function

const myBox = document.getElementById("myBox");

// function changeColor(event){
//     console.log(event);
//     event.target.style.backgroundColor = "tomato"  ;
//     event.target.textContent = "OUCH! 😭";
// }

// myBox.addEventListener("click", changeColor);
// myBox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "tomato"  ;
//     event.target.textContent = "OUCH! 😭";
// });

myBox.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato"  ;
    event.target.textContent = "OUCH! 😭";
});

myBox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow"  ;
    event.target.textContent = "Don't do it!!!🙇🏼";
})

myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "lightgreen"  ;
    event.target.textContent = "Click me 🫡";
})

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato"  ;
    event.target.textContent = "OUCH! 😭";
});

myButton.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow"  ;
    event.target.textContent = "Don't do it!!!🙇🏼";
})

myButton.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "lightgreen"  ;
    event.target.textContent = "Click me 🫡";
})

myButton.addEventListener("click", (event) => {
    myBox.target.style.backgroundColor = "tomato"  ;
    myBox.target.textContent = "OUCH! 😭";
});

myButton.addEventListener("mouseover", event =>{
    myBox.target.style.backgroundColor = "yellow"  ;
    myBox.target.textContent = "Don't do it!!!🙇🏼";
})

myButton.addEventListener("mouseout", event =>{
    myBox.target.style.backgroundColor = "lightgreen"  ;
    myBox.target.textContent = "Click me 🫡";
})