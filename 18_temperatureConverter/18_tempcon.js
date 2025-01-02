const textBox = document.getElementById("temp")
const toFahrenheit = document.getElementById("cf")
const toCelsius = document.getElementById("fc")
const result = document.getElementById("result")
let temp


function convert(){
    if(toFahrenheit.checked){
        // result.textContent = `You selected Celsius to Fahrenheit`
        temp = Number(textBox.value)
        temp = temp*(9/5) + 32
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if(toCelsius.checked){
        result.textContent = `You selected Fahrenheit to Celsius`
        temp = Number(textBox.value)
        temp = (temp - 32)*(5/9)
        result.textContent = temp.toFixed(1)/*This will give 1 decimal point precision*/ + "°C"
    }
    else{
        result.textcontent = "Select a unit!!!"
    }
}

const dec = document.getElementById("dec");
const inc = document.getElementById("inc");

dec.onclick = function(){
    //event.prevenDefault()-- in case type attribute is not mentioned in the button tag
    temp = Number(textBox.value);
    temp--;
    textBox.value = temp;
}
inc.onclick = function(){
    temp = Number(textBox.value);
    temp++;
    textBox.value = temp;
}