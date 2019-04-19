function slider() {
    let slides = document.querySelectorAll(".feedback-slider-item"),
        prev = document.querySelector(".main-prev-btn"),
        next = document.querySelector(".main-next-btn"),
        slideIndex = -1,
        timerId;

    function showSlides(n) {
    clearTimeout(timerId);
    slideIndex += (n + slides.length);
    slideIndex %= slides.length;
    slides.forEach((item, i)  => item.style.display = slideIndex == i ? "block" : "none");
    timerId = window.setTimeout(showSlides, 2000, n)
    } 
    
    showSlides(1);
    next.addEventListener("click", () => { showSlides(1); });
    prev.addEventListener("click", () => { showSlides(-1); });
}

export default slider;