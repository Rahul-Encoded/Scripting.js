//eventListener = Listen for specific events to create interavtive web pages.
//                events: keydown, keyup, keypress(incompatible with web browsers)  

const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event => {
    myBox.textContent = "😈";
    myBox.style.backgroundColor = "tomato";
})

document.addEventListener("keyup", event => {
    myBox.textContent = "🫡";
    myBox.style.backgroundColor = "aliceblue";
})

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});

// document.addEventListener("keydown", event => {
//     console.log(event);
//     console.log(event.key);
//     console.log(`key down = ${event.key}`);
// })

// document.addEventListener("keyup", event => {
//     console.log(event);
//     console.log(event.key);
//     console.log(`key up = ${event.key}`);
// })