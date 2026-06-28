document.addEventListener("DOMContentLoaded", function () {
const slides = document.querySelectorAll(".slideshow-container .slide");
if (slides.length === 0) return; // 슬라이드가 없으면 실행 중단

let currentSlide = 0;
const prevButton = document.querySelector(".slideshow-container .prev");
const nextButton = document.querySelector(".slideshow-container .next");

function showSlide(n) {
// 모든 슬라이드에서 'active'와 'caption-visible' 클래스 제거
slides.forEach((slide) => {
slide.classList.remove("active");
slide.classList.remove("caption-visible"); // 슬라이드 변경 시 캡션도 항상 숨김
});

// n번째 슬라이드에 'active' 클래스 추가
slides[n].classList.add("active");
currentSlide = n;
}

function nextSlide() {
let newSlide = currentSlide + 1;
if (newSlide >= slides.length) {
newSlide = 0;
}
showSlide(newSlide);
}

function prevSlide() {
let newSlide = currentSlide - 1;
if (newSlide < 0) {
newSlide = slides.length - 1;
}
showSlide(newSlide);
}

if (prevButton && nextButton) {
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
}

// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
// 모바일 터치 이벤트 직접 제어 로직 (핵심)
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

// 1. 터치 기반 기기인지 확인하는 변수
const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

// 2. 터치 기기일 경우에만 아래 로직 실행
if (isTouchDevice) {
slides.forEach((slide) => {
const link = slide.querySelector(".slide-link");

// 링크가 있는 슬라이드에만 특별한 터치 이벤트 추가
if (link) {
link.addEventListener("click", function (event) {
// 3. 현재 슬라이드에 'caption-visible' 클래스가 없는가? (첫 번째 터치인가?)
if (!slide.classList.contains("caption-visible")) {
// 3-1. 기본 링크 이동을 **강제로 막음**
event.preventDefault();

// 3-2. 다른 모든 슬라이드에서 캡션을 숨김 (초기화)
slides.forEach(s => s.classList.remove("caption-visible"));

// 3-3. 현재 슬라이드에만 'caption-visible' 클래스를 추가하여 캡션을 보여줌
slide.classList.add("caption-visible");
}
// 4. 'caption-visible' 클래스가 이미 있다면? (두 번째 터치라면?)
// -> 아무것도 하지 않음. preventDefault()가 없으므로 링크는 정상적으로 이동함.
});
}
});
}

// 초기 슬라이드 표시
showSlide(currentSlide);
});