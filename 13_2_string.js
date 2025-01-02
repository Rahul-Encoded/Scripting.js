let ques = "91-81560-23089";

let count  = 0;

for(let i = 0; i < ques.length; i++){
    if(ques[i] == '-'){
        count++;
    }
}

let ans = '';
for(let i = 0; i < ques.length; i++){
    if(i < count){
        ans += '-';
    }
    else{
        if(ques[i] != '-'){
            ans += ques[i];
        }
    }
    
}
console.log(ans);
