//RANDOM NUMBER GENERATOR

let rand = Math.random()
let rand1 = Math.random() * 6   // 0 to 5 random number
let rand3 = Math.floor(Math.random() * 6) + 1 // 1 to 6 random integers

const min = 50
const max = 100
let rand2 = Math.floor(Math.random() * (max - min)) + min 

console.log(rand) 
console.log(rand1) 
console.log(rand2) 
console.log(rand3) 