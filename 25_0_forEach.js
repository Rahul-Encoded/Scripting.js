/* 

forEach() = method used to iterate over the elements of an array and apply a specified function(callback)

array.forEach(callback)
element, index, array are respectively provided
*/

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);
console.log(`\n`);
numbers.forEach(double);
numbers.forEach(display);
console.log(`\n`);
numbers.forEach(triple);
numbers.forEach(display);
console.log(`\n`);
numbers.forEach(square);
numbers.forEach(display);
console.log(`\n`);
numbers.forEach(cube);
numbers.forEach(display);
console.log(`\n`);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}