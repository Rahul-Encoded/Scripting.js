const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let submit = document.getElementById("submit");
let result = document.getElementById("result");

submit.onclick = function() {
    guess = Number(document.getElementById("input").value);  // Get the input value correctly

    if (isNaN(guess)) {
        result.textContent = "Please enter a valid number!";
    } 
    else if (guess < minNum || guess > maxNum) {
        result.textContent = "Please enter a number in the range of 1 to 100!";
    } 
    else {
        attempts++;

        if (guess < answer) {
            result.textContent = "TOO LOW!";
        } 
        else if (guess > answer) {
            result.textContent = "TOO HIGH!";
        } 
        else {
            result.textContent = `Your guess ${guess} is correct after ${attempts} attempts!`;

            // Delay the reload by 3 seconds (3000 milliseconds)
            setTimeout(function() {
                window.location.reload();
            }, 3000);
        }
    }

}
