let firstName = "Rahul" //strings
let age = 21   //number
let student //declaration
student = true //boolean
               //assignment

// console.log(firstName)
// console.log(age)
// console.log(student)

// age += 1

// console.log(age)

// firstName = firstName + 1

// console.log(firstName)

console.log("Hello", firstName)
console.log(`You are ${age} years old.`)

document.getElementById("p1").innerHTML = "Hello " + firstName
document.getElementById("p2").innerHTML = "You are " + age + " years old"
document.getElementById("p3").innerHTML = "Enrolled: " + student

/* 
   arithmetic expression is a combination of...
   operands (values, variables, etc.)
   operators (+ - * / %)
   that can be evaluated to a value
   ex. y = x + 5;
*/

let students = 20;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//let extraStudents = students % 2;
//students = students ** 2;

console.log(`There are ${students} students`);

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

//let result = (1 + 2) * (3 + 4);

//console.log(result);
