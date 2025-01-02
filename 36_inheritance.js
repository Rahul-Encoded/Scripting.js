//inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child)
//              helps with code reusability

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating.🍴🍴🍴`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping.😴😴😴`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";

    hop(){
        console.log(`This ${this.name} is hopping.`);
    }
}

class Fish extends Animal{
    name = "fish";
    
    swim(){
        console.log(`This ${this.name} is swimming.`);
    }
}

class Hawk extends Animal{
    name = "hawk";
    
    fly(){
        console.log(`This ${this.name} is flying.`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(`Rabbit alive? \n${rabbit.alive}`);
rabbit.eat();
rabbit.sleep();
rabbit.hop();

console.log(`Fish alive? \n${fish.alive}`);
fish.eat();
fish.sleep();
fish.swim();

console.log(`Hawk alive? \n${hawk.alive}`);
hawk.eat();
hawk.sleep();
hawk.fly();

