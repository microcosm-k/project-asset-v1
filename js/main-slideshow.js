document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.main-canvas .living-canvas-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    const slideInterval = 7000;
    const transitionTime = 1500;

    function nextSlide() {
        const outgoingSlide = slides[currentSlide];

        // 애니메이션 클래스를 지우는 타이밍을 '뒤로' 미루는 것이 핵심
        setTimeout(() => {
            outgoingSlide.classList.remove('pulse-in-out', 'vertical-pan');
        }, transitionTime); 

        outgoingSlide.classList.remove('active');

        currentSlide = (currentSlide + 1) % slides.length;
        const nextSlideElement = slides[currentSlide];

        // 다음에 적용할 애니메이션 선택
        if (nextSlideElement.classList.contains('vertical')) {
            nextSlideElement.classList.add('vertical-pan');
        } else {
            nextSlideElement.classList.add('pulse-in-out');
        }
        nextSlideElement.classList.add('active');
    }

    // 초기화
    if (slides[0].classList.contains('vertical')) {
        slides[0].classList.add('vertical-pan');
    } else {
        slides[0].classList.add('pulse-in-out');
    }
    slides[0].classList.add('active');

    setInterval(nextSlide, slideInterval);
});