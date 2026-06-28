// js/lang-toggle.js 
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('lang-toggle');
  
  // 중요: querySelectorAll을 사용하여 '모든' 관련 요소를 찾습니다.
  const koElements = document.querySelectorAll('.lang-ko');
  const enElements = document.querySelectorAll('.lang-en');

  // 페이지가 로드될 때 버튼 텍스트를 초기화합니다.
  // 한국어 콘텐츠가 보이면 버튼은 'English'로 설정됩니다.
  // querySelectorAll은 NodeList를 반환하므로 첫 번째 요소의 상태를 확인합니다.
  if (koElements.length > 0 && koElements[0].style.display !== 'none') {
    toggleButton.textContent = 'English';
  } else {
    toggleButton.textContent = '한국어';
  }

  toggleButton.addEventListener('click', function (e) {
    e.preventDefault();

    // 현재 버튼 텍스트를 기준으로 언어를 전환합니다.
    const isShowingKorean = toggleButton.textContent === 'English';

    if (isShowingKorean) {
      // 한국어를 숨기고 영어를 표시
      koElements.forEach(el => el.style.display = 'none');
      enElements.forEach(el => el.style.display = 'block');
      toggleButton.textContent = '한국어';
    } else {
      // 영어를 숨기고 한국어를 표시
      enElements.forEach(el => el.style.display = 'none');
      koElements.forEach(el => el.style.display = 'block');
      toggleButton.textContent = 'English';
    }
  });
});