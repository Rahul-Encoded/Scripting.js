function calculate(){

    const totalAmount = document.getElementById("total");
    const principalInput = document.getElementById("amount");  
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");       
    const nInput = document.getElementById("n");

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100);
    let years = Number(yearsInput.value);
    let n = Number(nInput.value);

    if(principal < 0 || isNaN(principal)){
        principal = 0;
        principalInput.value = 0;
    }
    if(rate < 0 || isNaN(rate)){
        rate = 0;
        rateInput.value = 0;
    }
    if(years < 0 || isNaN(years)){
        years = 0;
        yearsInput.value = 0;
    }
    if(n < 0 || isNaN(n)){
        n = 0;
        nInput.value = 0;
    }

    
    const result = principal * Math.pow((1 + rate / n), n * years)

    totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency: "USD"});
}
