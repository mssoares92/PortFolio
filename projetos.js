let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const sliderContainer = document.querySelector('.slider-container');
    const offset = -currentIndex * 100; // Cada slide ocupa 100% da largura
    sliderContainer.style.transform = `translateX(${offset}%)`;
}