/*
    callback = a function that is passed as an argument to another function.

    used to handle asynchromous operations:
        1. Reading a file.
        2. Network requests.
        3. Interacting with databases

        "Hey, when you are done, call this next!"
*/

/*
EXAMPLE 1:
hello();
goodbye();

function hello(){
    // console.log("Hello!");
    setTimeout(function(){
        console.log("Hello!");
    }, 3000)
}

function goodbye(){
    console.log("Goodbye!");
}
*/

/*
EXAMPLE 2:
hello(goodbye);

function hello(callback){
    console.log("Hello!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}
*/


