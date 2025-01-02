const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 139},
                {name: "pineapple", color: "yellow", calories: 37}];

console.log(fruits);

console.log(`\n`);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

console.log(`\n`);
console.log(fruits[0].name);
console.log(fruits[0].color);
console.log(fruits[0].calories);

console.log(`\n`);
console.log(fruits[1].name);
console.log(fruits[1].color);
console.log(fruits[1].calories);

console.log(`\n`);
console.log(fruits[2].name);
console.log(fruits[2].color);
console.log(fruits[2].calories);

console.log(`\n`);
console.log(fruits[3].name);
console.log(fruits[3].color);
console.log(fruits[3].calories);

console.log(`\n`);
console.log(fruits[4].name);
console.log(fruits[4].color);
console.log(fruits[4].calories);

console.log(`\n`);

fruits.push({name: "grapes", color: "purple", calories: 62});

console.log(fruits);

//splice
console.log(`\n`);
fruits.splice(1, 2);
console.log(fruits);
console.log(`\n`);

//forEach()

fruits.forEach((fruit) =>{console.log(fruit);
                           console.log(`${fruit.name} color is ${fruit.color} and it contains ${fruit.calories} calories.`); 
                         })
console.log(`\n`);

//map()

const fruitArray = fruits.map((fruit) => {return [fruit.name, fruit.color, fruit.calories]});

console.log(`\n`);
console.log(fruitArray);
console.log(`\n`);

//filter

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits)
console.log(lowCalFruits)
console.log(highCalFruits)

//reduce(accumulator, element)
const maxFruit = fruits.reduce((max, fruit) =>
                               fruit.calories > max.calories ? fruit : max);

const minFruit = fruits.reduce((min, fruit) =>
                               fruit.calories < min.calories ? fruit : min);

console.log(`\n`);
console.log(maxFruit);
console.log(minFruit);