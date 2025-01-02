//classList = Element property in JS used to interact with an element's list of classes(CSS Classes).
//            Allows you to make reusable classes for many elements across your webpage.

//add(
//remove()
//toggle(remove if present, add if not)
//replace(oldClass, newClass)
//contains()

// const myBtn = document.getElementById("myBtn");

// myBtn.classList.add("enabled");

// // myBtn.addEventListener("mouseover", event=>{
// //     event.target.classList.add("hover");
// // });

// // myBtn.addEventListener("mouseout", event=>{
// //     event.target.classList.remove("hover");
// // });

// // myBtn.addEventListener("mouseover", event=>{
// //     event.target.classList.toggle("hover");
// // });

// // myBtn.addEventListener("mouseout", event=>{
// //     event.target.classList.toggle("hover");
// // }); 

// // myBtn.classList.remove("enabled");

// myBtn.addEventListener("click", event=>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🥶";
//     }
//     else{
//         event.target.textContent += "🥵";
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

// const myH1 = document.getElementById("myH1");
// myH1.classList.add("enabled");

// myH1.addEventListener("click", event=>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🥶";
//     }
//     else{
//         event.target.textContent += "🥵";
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

let btns = document.querySelectorAll(".myBtns");

btns.forEach(btn=>{
    btn.classList.add("enabled");
});

btns.forEach(btn=>{
    btn.addEventListener("mouseover", event=>{
        event.target.classList.toggle("hover");
    });
});

btns.forEach(btn=>{
    btn.addEventListener("mouseout", event=>{
        event.target.classList.toggle("hover");
    });
});

btns.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
    });
});

