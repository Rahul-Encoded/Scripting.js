//super = keyword is used in classes to call the constructor or access the properties and methods of a parent(superclass)
//        this = this object
//        super = the parent  

class Animal{

    constructor(type, name, age){
        this.type = type;
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed} mph.`)
    }
}

class Rabbit extends Animal{
    constructor(type, name, age, runSpeed){
        super(type, name, age);
        // this.name = name;
        // this.age = age; NO NEEDED AFTER THE SUPER KEYWORD. HENCE 
        this.runSpeed = runSpeed

    }

    run(){
        console.log(`This ${this.name} can run.`);

        super.move(this.runSpeed)
    }
    
}

class Fish extends Animal{
    constructor(type, name, age, swimSpeed){
        super(type, name, age);
        // this.name = name;
        // this.age = age; NO NEEDED AFTER THE SUPER KEYWORD. HENCE 
        this. swimSpeed = swimSpeed
        
    }

    swim(){
        console.log(`This ${this.name} can swim.`);

        super.move(this.swimSpeed)
    }
    
}

class Hawk extends Animal{
    constructor(type, name, age, flySpeed){
        super(type, name, age);
        // this.name = name;
        // this.age = age; NO NEEDED AFTER THE SUPER KEYWORD. HENCE 
        this. flySpeed = flySpeed
    
    }

    fly(){
        console.log(`This ${this.name} can fly.`);

        super.move(this.flySpeed)
    }

}

const rabbit = new Rabbit("Rabbit", "Bugs Bunny", 2, 25);
const fish = new Fish("Fish", "budubudu", 3, 25);
const hawk = new Hawk("Hawk", "Hawk Thu", 2.5, 35);

function output(type, name, age){
    console.log(`${type} name = ${name}`);
    console.log(`${type} age = ${age}`);
}

output(rabbit.type, rabbit.name, rabbit.age);
console.log(`Rabbit run speed = ${rabbit.runSpeed}`);
output(hawk.type, hawk.name, hawk.age);
console.log(`Hawk fly speed = ${hawk.flySpeed}`);
output(fish.type, fish.name, fish.age);
console.log(`Fish swim speed = ${fish.swimSpeed}`);

console.log(`\n`);

rabbit.run();
fish.swim();
hawk.fly();



