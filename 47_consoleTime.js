//console.time() = tool that allows you to measure the timen it takes for a section of code or process to execute .
//                 Great for identifying performance "bottlenecks". 

//console.time("label");
//console.timeEnd("label");

//--------------------------Example1--------------------------------
console.time("test");

for(let i = 0; i < 10e7; i++){
    
}

console.timeEnd("test");


//--------------------------Example1--------------------------------

function loadData(){

    console.time("loadData");
    
    for(let i = 0; i < 10e6; i++){
        //pretend to load some data
    }
    
    console.timeEnd("loadData");
}

loadData();

function processData(){

    console.time("processData");

    for(let i = 0; i < 10e9; i++){
        //pretend to process some data
    }
    
    console.timeEnd("processData");
}

processData();