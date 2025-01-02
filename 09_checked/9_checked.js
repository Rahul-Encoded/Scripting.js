const ccard = document.getElementById("credit")
const dcard = document.getElementById("debit")
var subres = document.getElementById("subRes")

mySubmit.onclick = function(){
    
    if(ccard.checked && dcard.checked){
        subres.textContent = `You use both!: A Debit as well as Credit card`
    }
    else if(ccard.checked){
        subres.textContent = `You use Credit Card!`
    }

    else if(dcard.checked){
        subres.textContent = `You use Debit Card!`
    }
    else{
        subres.textContent = `You don't use any of Credit or Debit Card`
    }
}