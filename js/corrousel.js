let index = 0;
const slides = document.querySelectorAll(".carousel-post");
const dotsContainer = document.querySelector(".carousel-dots");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

// Create dots
slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".carousel-dots span");
function updateCarousel() {
const offset = -index * 100; // Mueve los slides horizontalmente
document.querySelector(".carousel-container").style.transform = `translateX(${offset}%)`;

dots.forEach((dot, i) => {
  dot.classList.toggle("active", i === index);
     });
    }

function nextSlide() {
    index = (index + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(i) {
    index = i;
    updateCarousel();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
updateCarousel();
setInterval(nextSlide, 4000); // Auto-slide every 4s