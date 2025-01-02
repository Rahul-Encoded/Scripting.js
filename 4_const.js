//const = a variable that can not be changed
 
const PI = 3.14159
let radius
let circumference

// radius = window.prompt("Enter the radius of the circle")
document.getElementById("mySubmit").onclick=function(){
    radius=document.getElementById("radius").value
    radius = Number(radius)
    let flag=Boolean(radius)
    if(flag){
        circumference=2 * PI * radius
        document.getElementById("answer").textContent=`ANSWER: Circumference = ${circumference} cm`
    }
    else{
        document.getElementById("answer").textContent="Enter a valid #"
    }
}