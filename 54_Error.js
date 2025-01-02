//Error = An object that is created to represent a problem that occurs
//        Errors occur often with user inout or establishing a connection.

console.log("Hello");
//NETWROK ERRORS
//PROMISE REJECTION
//SECURITY ERRORS

//Queue handle these errors
//try { } = Encloses code that might potentially cause an error
//catch { } = Catch and handle any thrown Errors from try { }.
//finally { } = (optional) Always executes. Used mostly for clean up. For e.g. close files, close connections, release resources.

//--------------------------Example1--------------------------------
console.log("You have reached the end!");

try{
    console.log(x);
}

catch(error){
    console.error(error);
}
finally{
    console.log("This always executes.");
}

console.log("You have reached the end")

//--------------------------Example2--------------------------------

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
    
    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
finally{
    console.log("This always executes");
}

console.log("You have reached the end!");

