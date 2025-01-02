//constructor = special method for defining the properties and methods of objects

function Car(make/*a*/, model, year, color){
    this.make = make/*a*/;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You drive the ${this.make} ${this.model}`)};
}

const car1 = new Car("Aston Martin", "Valour", 2023, "Green");
const car2 = new Car("Ferrari", "Roma", 2019, "Red");
const car3 = new Car("Lamborghini", "Urus", 2020, "Yellow");

car1.drive();
car2.drive();
car3.drive();

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);