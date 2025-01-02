//JSON = (JavaScript Object Notation) data-interchange format used for exchanging data between a server and web application.
//       JSON files {key:value} OR [value1, value2, value3]
         
//       JSON.stringify() = converts a JS object to a JSON string.
//       JSON.parse() = converts a JSON string to a JS object

const names = ["Ichigo", "Light", "Vegeta", "Gojo"];

const jsonString = JSON.stringify(names); 
console.log(names);
console.log(jsonString);

const person = {
    "name": "Gojo",
    "age": 27,
    "isEmployed": true,
    "hobbies": ["Eating", "Baseball", "Bullshitting"]
}

console.log(`\n`);
const jsonString2 = JSON.stringify(person); 
console.log(names);
console.log(jsonString2);

const people = [{
    "name": "Gojo",
    "age": 27,
    "isEmployed": true
},

{
    "name": "Ichigo",
    "age": 16,
    "isEmployed": false
},

{
    "name": "Goku",
    "age": 49,
    "isEmployed": false
},

{
    "name": "Light",
    "age": 22,
    "isEmployed": true
}
];

const jsonString3 = JSON.stringify(people); 
console.log(names);
console.log(jsonString3);
console.log(`\n`);

console.log(jsonString);
const parsedData = JSON.parse(jsonString); 
console.log(parsedData);
console.log(`\n`);


//FETCHING A JSON FILE
fetch("70_names.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error());

fetch("70_person.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error());

fetch("70_people.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error());

fetch("70_people.json")
    .then(response => response.json())
    .then(values => values.forEach(value =>{console.log(value.name);
                                            console.log(value);
    }))
    .catch(error => console.error());
