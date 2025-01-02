    const display = document.getElementById("watch");
    let timer = null;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;

    function start(){

        if(!isRunning){
            startTime = Date.now() - elapsedTime;
            timer = setInterval(update, 10);
            isRunning = true;
        }
    }


    function stop(){
        if(isRunning){
            clearInterval(timer);
            elapsedTime = Date.now() - startTime;
            isRunning = false;
        }
    }

    function reset(){

        clearInterval(timer);
        let startTime = 0;
        let elapsedTime = 0;
        let isRunning = false;
        display.textContent = "00:00:00:00"
    }


    function update(){

        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let sec = Math.floor(elapsedTime / 1000 % 60);
        let millisec = Math.floor(elapsedTime % 1000 / 10);

        hours = hours.toString().padStart(2, "0");
        minutes = minutes.toString().padStart(2, "0");
        sec = sec.toString().padStart(2, "0");
        millisec = millisec.toString().padStart(2, "0");

        display.textContent = `${hours}:${minutes}:${sec}:${millisec}`
    }