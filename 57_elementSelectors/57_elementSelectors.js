//element selectors = Methods used to target and manipulate HTML elements.
//                    They allow you to select one or multiple HTML elements from the DOM.

//1. document.getElementbyID()              RETURNS ELEMENT OR NULL
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor/*camelCase convention here for attributes whereras hyphen in css*/  = "antiquewhite";
myHeading.style.textAlign = "center";

console.log(myHeading);

//2. document.getElementbyClassName()       HTML COLLECTION == similar to an array, but limited in built-in methods it has
const fruits = document.getElementsByClassName("fruits")  

fruits[0].style.backgroundColor = "aquamarine";

for(let fruit of fruits){//iterable
    fruit.style.backgroundColor = "aqua";
}

//DO NOT have forEach method, but can typecast it.
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "aquamarine";
});

//3. document.getElementbyTagName()         HTML COLLECTION

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor ="cyan";

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "lightblue";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "#63c5da";    
})

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "#40E0D0";    
})

//4. document.querySelector()               ELEMENT OR NULL

const element = document.querySelector(".fruits");

element.style.backgroundColor = "#5D8AA8";  //only first element of any tag, class or id.

//5. document.querySelectorAll()            NODELIST similar to HTML collections, except it has built-in methods, like arrays.
//                                          NODELISTS are static while HTML Collections are live. Since NODELISTS are static, they DO NOT update automatically on DOM!

const fruits_ = document.querySelectorAll(".fruits");

fruits_[1].style.backgroundColor = "#52b2bf";

const foods = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.backgroundColor = "#0492c2";
})


