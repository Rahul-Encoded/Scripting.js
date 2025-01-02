//------------------EXAMPLE 1 <H1> -----------------------

//STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

//STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like Burgers!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//STEP3 APPEND ELEMENT TO DOM
document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// // document.body.insertBefore(newElement, currentElement);
// document.body.insertBefore(newH1, box2);

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[2]);


//REMOVE HTML ELEMENT
document.body.removeChild(newH1);
document.getElementById("box1").removeChild(newH1);


//------------------EXAMPLE 1 <li> -----------------------

// STEP1
const newListItem = document.createElement("li");

//STEP2
newListItem.textContent = "peach";
newListItem.id = "peach";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

//STEP3
document.body.append(newListItem);
document.body.prepend(newListItem);
document.getElementById("fruits").prepend(newListItem);
document.getElementById("fruits").append(newListItem);

const orange = document.getElementById("banana");
document.getElementById("fruits").insertBefore(newListItem, banana);

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[3])  ;


//STEP4
document.getElementById("fruits").removeChild(newListItem);