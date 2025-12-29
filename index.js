// Simple fade-in effect
/*document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = 1;
    }, 100);
}); */

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
function getSlideWidth() {
    return slides[0].clientWidth;
}

function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;

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


document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");

    // If loader doesn't exist on this page, do nothing
    if (!loader) return;

    const links = document.querySelectorAll("a[href]");

    links.forEach(link => {
        if (link.target === "_blank") return;

        link.addEventListener("click", e => {
            const href = link.getAttribute("href");
            if (!href || href.startsWith("#")) return;

            e.preventDefault();
            loader.classList.add("show");

            setTimeout(() => {
                window.location.href = href;
            }, 2000);
        });
    });
});