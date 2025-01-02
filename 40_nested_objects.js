//nested objects = Objects inside if ither Objects.
//                 Allows you to represent more complec data structures
//                 Child Object is enclosed by a Parent Object

//                 Person{Address{}, ContactInfo{}}
//                 ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


// ---------- EXAMPLE 1 ----------
const person = {
    fullName: "Rahul",
    age: 21,
    isStudent: true,
    hobbies: ["Coding", "Gaming", "Reading"],
    address: {
        street: "124 Conch st.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0]);
console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

for(const property in person.address){
    console.log(person.address[property]);
}


// ---------- EXAMPLE 2 ----------
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}  

const person1 = new Person("Rahul", 21, "124 Conch st.", 
                                       "Bikini Bottom", 
                                       "Int. Water");

const person2 = new Person("Preeti", 22, "126 Conch st.", 
                                       "Bikini Bottom", 
                                       "Int. Water");

const person3 = new Person("Priya", 23, "128 Conch st.", 
                                       "Bikini Bottom", 
                                       "Int. Water");

console.log(`\n`);

console.log(person1.name);                                       
console.log(person1.age);
console.log(person1.address);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);

console.log(`\n`);

console.log(person2.name);
console.log(person2.age);
console.log(person2.address);
console.log(person2.address.street);
console.log(person2.address.city);
console.log(person2.address.country);

console.log(`\n`);

console.log(person3.name);
console.log(person3.age);
console.log(person3.address);
console.log(person3.address.street);
console.log(person3.address.city);
console.log(person3.address.country);
