let fruits = ["apple", "banana", "orange", "coconut"];

fruits.forEach(display);
console.log(`\n`);
fruits.forEach(lowerCase);
fruits.forEach(display);
console.log(`\n`);
fruits.forEach(upperCase);
fruits.forEach(display);
console.log(`\n`);
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function display(element){
    console.log(element);
}