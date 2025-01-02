// function hbd(){
//     console.log(`Happy birthday to you!`)
//     console.log(`Happy birthday to you!`)
//     console.log(`Happy birthday dear you!`)
//     console.log(`Happy birthday to you!`)
// }

// hbd()
// hbd()
// hbd()

// function hbd(username, age){
//     console.log(`Happy birthday to you!`)
//     console.log(`Happy birthday to you!`)
//     console.log(`Happy birthday dear ${username}!`)
//     console.log(`Happy birthday to you!`)
//     console.log(`You are ${age} years old`)
// }

// hbd("BroCode", 25)
// hbd("SpongeBob", 30)
// hbd("Rahul", 20)

// function add(x, y){
//     // let result = x+y
//     // // console.log(result)
//     // return result
//     return x+y
// }

// let answer = add(6,9)
// console.log(answer)

// function isEven(x){
//     // if(x%2===0){
//     //     console.log(`${x} is even`)
//     // }
//     // else{
//     //     console.log(`${x} is odd`)
//     // }
//     return x%2 === 0 ? console.log(`${x} is even`) : console.log(`${x} is odd`)
// }
// isEven(5)
// console.log(isEven(5))

function isValid(email){
    return email.includes("@") ? true : false
}

console.log(isValid("rahul"))
console.log(isValid("rahul@gmail.com"))