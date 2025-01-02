document.getElementById("mySubmit").onclick=function(){
    let age = Number(document.getElementById("age").value)

if(age < 8){
    document.getElementById("checkpoint").textContent=`You are too young`
}

else if(age >= 8 && age < 12){
    document.getElementById("checkpoint").textContent=`You are breakfast`
}

else if(age > 12 && age < 49){
    document.getElementById("checkpoint").textContent=`Anything after 12 is lunch`
}

else{
    document.getElementById("checkpoint").textContent=`TOO OLD BITCH!`
}
}

