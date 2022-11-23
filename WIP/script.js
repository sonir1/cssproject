const slide = document.querySelectorAll(".slide");
const carousel = document.getElementById('carousel');
const left = document.getElementById('left');
const right = document.getElementById('right');

cons SLIDES_COUNT = slide.length;

let current_slide = 0;
left.addEventListener("click", () => {
    current_slide++;
    if(current_slide > SLIDES_COUNT) {
        current_slide = 0;
    }

    updateCaroue();
});

right.addEventListener("click", () => {
    current_slide--;
    if(current_slide < 0) {
        current_slide = 0;
    }
    updateCaroue();
});

function updateCaroue() {
    carousel.style.transform = `translateX(${current_slide * slides[0].offsetWidth}px)`;
}