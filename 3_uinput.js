//How to accept user input

//1. EASY WAY - Window input
//2. PROFESSIONAL WAY - HTML textbox

let username

// username = window.prompt("What's your username?")

// console.log(username)

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value
    let usernameinp = Boolean(username)
    console.log(usernameinp)
    if(usernameinp){
        console.log(username)
        document.getElementById("myH1").textContent=`Hello ${username}`
    }
    else{
        window.alert("Enter a username!!!")
    }
}