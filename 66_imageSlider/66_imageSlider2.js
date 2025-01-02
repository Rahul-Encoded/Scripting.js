let slides = document.querySelectorAll(".slides img");

let currIndex = 0;
let num = document.querySelectorAll(".slides img").length;

function autoSlide(){
    setInterval(nextSlide, 3000);
}

function prevSlide(){
    if(currIndex <= 0) currIndex = num;
    currIndex--;
    showSlide(currIndex);
}

function nextSlide(){
    if(currIndex == num - 1) currIndex = -1;
    currIndex++;
    showSlide(currIndex);
}

function showSlide(currIndex){
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[currIndex].classList.add("displaySlide");
}

showSlide(0);
autoSlide();