// this = reference to the object where THIS is used
//           (the object depends on the immediate context)
//this keyword does not work with arrow functions!!! Since it makes reference to Windows Object!

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
    //in case of arrow function, this.name appears empty since our window object possesses a name, but in case of this.favfood, it will be undefined, since our Windows object does not have a 
    //favfood property!
}

person1.eat();
person2.eat();