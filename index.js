// Simple fade-in effect
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = 1;
    }, 100);
});

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
const slideWidth = slides[0].getBoundingClientRect().width;

function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
});

/* Auto rotate */
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
}, 4000);

/* Dot navigation */
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlide();
    });
});