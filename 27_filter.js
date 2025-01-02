// .filter(callback) = creates a new array by filtering out elements

// ---------- EXAMPLE 1 ----------
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(oddNums);
console.log(`\n`);
console.log(evenNums);
console.log(`\n`);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}


// ---------- EXAMPLE 2 ----------
let ages = [16, 17, 17, 18, 19, 20, 65];
let adults = ages.filter(isAdult);
let children = ages.filter(isChild);

console.log(adults);
console.log(`\n`);
console.log(children);
console.log(`\n`);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}

// ----------- EXAMPLE 3 -----------
const words = ['apple', 'orange', 'kiwi', 'banana', 'pomegranate', 'coconut',];
const longWords = words.filter(getLongWords);
const shortWords = words.filter(getShortWords);

console.log(longWords);
console.log(`\n`);
console.log(shortWords);
console.log(`\n`);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}
