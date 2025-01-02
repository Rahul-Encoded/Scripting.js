
let min = 1
let max = 6

document.getElementById("myButton").onclick=function(){
    let x = Math.floor(Math.random() * (max-min)) + min
    // console.log(x)
    document.getElementById("rand1").textContent=`${x}`

    let y = Math.floor(Math.random() * (max-min)) + min
    // console.log(y)
    document.getElementById("rand2").textContent=`${y}`

    let z = Math.floor(Math.random() * (max-min)) + min
    // console.log(z)
    document.getElementById("rand3").textContent=`${z}`
}
