//getter = special method that makes a property readable(for i/p validation)
//setter = special method that makes a property writeable
//validate and modify a value when reading/writing a property

// ---------- EXAMPLE 1 ----------

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }
    
    get width(){
        return(`${this._width.toFixed(1)} cm`);
    }
    
    get height(){
        return(`${this._height.toFixed(1)} cm`);
    }
    
    get area(){
        return (`${(this._width * this._height).toFixed()} cm^2`);
    }
}

// const rectangle = new Rectangle(-100, "pizza"); //will give undefined due to getters and setters
const rectangle = new Rectangle(3, 4);

//even after I reassign garbage values, it will retain the og valid values
//rectangle.width = 3;
//rectangle.height  = 4;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);    //area isn't a property typically. It's not found within a constructor, but we can access it with the help of a getter as if it's a property.
//with getters you can even add additional logics. 


// ---------- EXAMPLE 1 ----------

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(/*this.firstName == NaN*/typeof newFirstName ==="string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error(`First Name must be a non-empty string!!!`);
        }
    }
    
    set lastName(newLastName){
        if(typeof newLastName ==="string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error(`Last Name must be a non-empty string!!!`);
        }
    }
    
    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error(`Age should be a number!!!`);
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }
    
    get fullName(){
        return (this._firstName + " " + this._lastName);
    }

    get age(){
        return this._age;
    }
}

const person = new Person()