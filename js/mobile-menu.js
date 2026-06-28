document.addEventListener('DOMContentLoaded', () => {
  // HTML에서 햄버거 버튼과 body 요소를 찾습니다.
  const menuBtn = document.getElementById('mobile-menu-btn');
  const body = document.body;

  // 만약 페이지에 햄버거 버튼이 존재한다면,
  if (menuBtn) {
    // 버튼에 '클릭' 감지기를 부착합니다.
    menuBtn.addEventListener('click', () => {
      // 버튼이 클릭될 때마다 body 태그에 'menu-open' 클래스를
      // 붙였다가 떼었다가 하는 스위치 역할을 합니다.
      body.classList.toggle('menu-open');
    });
  }
});