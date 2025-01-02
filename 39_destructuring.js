//destructuring = extract values from arrays and objects, then assign them to variables in a convenient way.
//                [] = to perform array destructuring
//                {} = to perform object destructuring  
//                5 examples

// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF 2 VARIABLES

let a = 1;
let b = 2;

console.log(`Before Swapping:`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);

[a, b] = [b, a];

console.log(`After Swapping:`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);

// ---------- EXAMPLE 2 ----------
//SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["white", "black", "brown", "yellow", "red"]; 

console.log(`\n`);
console.log(`Before Swapping:`);
console.log(colors);

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(`After Swapping:`);
console.log(colors);

// --------- EXAMPLE 3 ---------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor,/*rest parameters*/ ...extraColors] = colors;

console.log(`\n`);
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// --------- EXAMPLE 4 ---------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: 'Spongebob',
    lastName: 'Squarepants',
    age: 30,
    job: "Fry cook",
};
  
const person2 = {
    firstName: 'Patrick',
    lastName: 'Star',
    age: 34
};
  
const {firstName1, lastName1, age1, job1="Unemployed"} = person1;

console.log(firstName1);
console.log(lastName1);
console.log(age1);
console.log(job1);
const {firstName2, lastName2, age2, job2} = person2;

console.log(firstName2);
console.log(lastName2);
console.log(age2);
console.log(job2);


// --------- EXAMPLE 5 ---------
// DESTRUCTURING IN FUNCTION PARAMETERS

function displayPerson({ firstName, lastName, age, job="Unemployed" }) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);  