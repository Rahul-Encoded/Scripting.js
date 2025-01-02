// spread operator =  ... allows an iterable such as an
//                                  array or string to be expanded
//                                  into separate elements
//                                 (unpacks the elements)

// ------------- EXAMPLE 1 -------------
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

let max = Math.max(numbers)
let min = Math.min(numbers)

console.log(maximum)
console.log(minimum)

console.log(max)
console.log(min)
// ------------- EXAMPLE 2 -------------
let username = "Bro Code";
let letters = [...username]; 

console.log(letters);
console.log(username)
console.log(`\n`)

//---------------EXAPLE 2.1-------------
let usernamem ="Rahul Mondal"
let lettersm = [...usernamem].join("-")
let lettersm_ = [...usernamem]

console.log(lettersm);
console.log(usernamem)
console.log(lettersm_)
console.log(`\n`)

// ------------- EXAMPLE 3 -------------
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);