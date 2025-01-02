//setTimeout() = function in javaScipt that allows you to schedult the execution of a function after an amount of time(ms).
//               Times are appropriate (varies based on the workload of the JavaScript runtime env.)

//setTimeout(callback, delay);

//--------------------------Example1--------------------------------
function sayHello(){
    console.log("hello!");
}

setTimeout(sayHello, 3000);


//--------------------------Example2--------------------------------
setTimeout(function(){console.log(`Hello!`)}, 2000);
setTimeout(() => {console.log(`Hello!!`)}, 1000);


//--------------------------Example2--------------------------------
//clearTimeout(timeoutId) = can cancel a timeout before it triggers

const timeoutId = setTimeout(() => console.log(`Hello`), 3000);

clearTimeout(timeoutId);
