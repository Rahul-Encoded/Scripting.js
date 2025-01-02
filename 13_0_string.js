let username = "  Rahul Mondal  "

console.log(username.charAt(4))
console.log(username.lastIndexOf('a'))
console.log(username.indexOf('a'))
console.log(username.length)
username = username.trim()
console.log(username)
username = username.toUpperCase()
console.log(username)
username = username.toLowerCase()
console.log(username)
let usernameR = username.repeat(3)
console.log(usernameR)
let result = username.startsWith(" ")

if(result){
    console.log("Your username can't start with ' '")
}
else{
    console.log(username.toUpperCase())
}

result = username.endsWith(" ")

if(result){
    console.log("Your username can't end with ' '")
}
else{
    console.log(username.toUpperCase())
}
 
result = username.includes(" ")

if(result){
    console.log("Your username can't include ' '")
}
else{
    console.log(username.toUpperCase())
}

let phoneNum = "123-456-789"

let phoneNumber = phoneNum.replaceAll("-", "")
console.log(phoneNumber)

phoneNumber = phoneNum.replaceAll("-", "/")
console.log(phoneNumber)

phoneNumber = phoneNum.padStart(15, "0")
console.log(phoneNumber)

phoneNumber = phoneNum.padEnd(15, "0")
console.log(phoneNumber)

const fullName = "Rahul Mondal"
console.log(`\n`);
console.log(`${fullName.indexOf("dal")}`);
console.log(`${fullName.lastIndexOf("dal")}`);
console.log(`\n`);
let firstName = fullName.slice(0,6) //Ending Index is exclusive
let lastName = fullName.slice(6) //No need to enter the last element

console.log(firstName)
console.log(lastName)

firstName = fullName.slice(0,1) 
lastName = fullName.slice(-1)

console.log(firstName)
console.log(lastName)

firstName = fullName.slice(0,fullName.indexOf(" ")) 
lastName = fullName.slice(fullName.indexOf(" ")+1)

console.log(firstName)
console.log(lastName)