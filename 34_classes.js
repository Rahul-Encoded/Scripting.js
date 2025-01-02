//class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor function.
//        ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    //inside a function you don't need to use the function keyword.
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price *salesTax)
    }
}

const product1 = new Product("Nigger1", 9.99);
const product2 = new Product("Nigger2", 6.96);
const product3 = new Product("Nigger3", 8.88);

product1.displayProduct()
product2.displayProduct()
product3.displayProduct()

const total = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.tofixed(2)}`);