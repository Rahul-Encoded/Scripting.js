//NodeList = static collection of HTML elements by (id, class, element).
//           Can be created by using querySelectorAll()
//           Similar to an array, but no (map, filter, reduce)
//           They do have a forEach() method tho.   
//           NodeList won't update to automatically reflect changes

let btns = document.querySelectorAll(".myBtns");

//ADD HTML/CSS PROP

btns.forEach(btn=>{
    btn.style.backgroundColor = "lightgreen";
    btn.textContent += "🫡"
})

//CLICK event listener

btns.forEach(btn=>{
    btn.addEventListener("click", event=>{
        event.target.style.backgroundColor = "tomato";
    })
})

//MOUSEOVER + MOUSEOUT even listener

btns.forEach(btn=>{
    btn.addEventListener("mouseover", event=>{
        event.target.style.backgroundColor = "hsl(102, 28%, 47%)";
    })
})

btns.forEach(btn=>{
    btn.addEventListener("mouseout", event=>{
        event.target.style.backgroundColor = "lightgreen";
    })
})

//ADD AN ELEMENT

const newBtn = document.createElement("button"); // STEP1
newBtn.textContent = "Button 5"; //STEP2
newBtn.classList = "myBtns";
document.body.appendChild(newBtn); //STEP3

btns = document.querySelectorAll(".myBtns");

console.log(buttons);

//REMOVE AN ELEMENT

btns.forEach(btn=>{
    btn.addEventListener("click", event => {
        event.target.remove();
        console.log(btns);
        btns.document.querySelectorAll(".myBtns");
        console.log(btns);
    })
})
