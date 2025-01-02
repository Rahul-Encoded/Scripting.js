//static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class
//         (class owns anything static, not the objects)

// ---------- EXAMPLE 1 ----------

class MathUtil{
    static PI = 3.14159;
    
    static getDiameter(radius){
        return radius * 2;
    }
    
    static getCircumference(radius){
        return radius * 2 * this.PI;
    }
    
    static getArea(radius){
        return radius * radius * this.PI;
    }
}
const radius = 6.9;

console.log(`Pi = ${MathUtil.PI}`);   //I don't need to create objects to access PI or any other properties or methods for that matter

console.log(`Diameter = ${MathUtil.getDiameter(radius)} units`);
console.log(`Circumference = ${MathUtil.getDiameter(radius)} units`);
console.log(`Area = ${MathUtil.getArea(radius)} units`)


// ---------- EXAMPLE 2 ----------

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${this.userCount} users online.`);
    }

    sayHello(){
        console.log(`Hello! I am ${this.username}.`);
    }
}

const user1 = new User("Rahul");
const user2 = new User("Preeti");
const user3 = new User("Vishwa");

console.log(`No. of users: ${User.userCount}`);
user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount();