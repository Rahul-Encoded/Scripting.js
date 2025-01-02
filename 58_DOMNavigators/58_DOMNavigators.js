// DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------- .firstElementChild ----------

const element_ = document.getElementById("fruits");
const firstChild_ = element_.firstElementChild;
firstChild_.style.backgroundColor = "#5D8AA8";

const element_2 = document.getElementById("desserts");
const firstChild_2 = element_2.firstElementChild;
firstChild_2.style.backgroundColor = "#40E0D0";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "#52b2bf";
});

// ---------- .lastElementChild ----------

const element_3 = document.getElementById("fruits");
const lastChild_ = element_3.lastElementChild;
lastChild_.style.backgroundColor = "#0492c2";

const element_4 = document.getElementById("desserts");
const lastChild_2 = element_4.lastElementChild;
lastChild_2.style.backgroundColor = "#63c5da";

const ulElements2 = document.querySelectorAll("ul");

ulElements2.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "#AFEEEE";
});

// ---------- .nextElementSibling ----------

const element_5 = document.getElementById("Apple");
const nextSibling_5 = element_5.nextElementSibling;
nextSibling_5.style.backgroundColor = "#6CA0DC";

const element_6 = document.getElementById("Onions");
const nextSibling_6 = element_6.nextElementSibling;
nextSibling_6.style.backgroundColor = "#6CA0DC";

const element = document.getElementById("vegetables");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "#A1CAF1";

// ---------- .previousElementSibling ----------

const element2 = document.getElementById("desserts");
const prevSibling = element2.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";

// ---------- .parentElement ----------

const element3 = document.getElementById("ice cream");
const parent = element3.parentElement;
parent.style.backgroundColor = "yellow";

// ---------- .children ----------

const element4 = document.getElementById("fruits");
const children = element4.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});