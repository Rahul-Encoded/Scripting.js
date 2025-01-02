//closure = A funtion defined inside of another function, the inner function has access to the variables and scope of the outer function.
//          Allows for private variables and state maintenance. Used frequently in JS Frameworks: React, Angular, Vue.

//--------------------------Example1--------------------------------
function outer(){
    
    let message = "hello!"
    
    function inner(){
        console.log(message);
    }
    
    inner();
}

message = "Goodbye";    //Has No effect

outer();


//--------------------------Example2--------------------------------
console.log(`\n`);
function createCounter(){
    let count = 0;
    
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    
    function getCount(){
        return count;
    }
    
    return {increment:increment, getCount:getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);


//--------------------------Example2--------------------------------
console.log(`\n`);
function scoreCounter(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points} pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points} pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore:increaseScore, decreaseScore:decreaseScore, getScore:getScore};
}

const scoreCount = scoreCounter();

console.log(`The current score is ${scoreCount.getScore()}`);

scoreCount.increaseScore(9);
scoreCount.increaseScore(6);
scoreCount.decreaseScore(3);


console.log(`The current score is ${scoreCount.getScore()}`);
