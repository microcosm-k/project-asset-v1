document.addEventListener('DOMContentLoaded', () => {
    // 필요한 HTML 요소들을 가져옵니다.
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const triggers = document.querySelectorAll('.lightbox-trigger');
    const closeBtn = document.querySelector('.lightbox-close');

    // 페이지 안의 모든 이미지 링크(.lightbox-trigger)에 클릭 기능을 부여합니다.
    triggers.forEach(trigger => {
        trigger.addEventListener('click', e => {
            // 링크를 클릭했을 때 페이지가 이동하는 기본 동작을 막습니다.
            e.preventDefault(); 

            // 클릭된 링크가 가진 이미지 주소(href)를 가져옵니다.
            const imageUrl = trigger.getAttribute('href');
            // 라이트박스 안의 이미지(img)에 그 주소를 설정합니다.
            lightboxImage.setAttribute('src', imageUrl);
            // 숨겨져 있던 라이트박스 배경을 화면에 표시합니다.
            lightbox.style.display = 'flex';
        });
    });

    // 닫기(X) 버튼을 클릭했을 때의 동작
    const closeLightbox = () => {
        // 라이트박스를 다시 화면에서 숨깁니다.
        lightbox.style.display = 'none';
    };

    closeBtn.addEventListener('click', closeLightbox);

    // 라이트박스의 검은 배경 부분을 클릭했을 때도 닫히도록 합니다.
    lightbox.addEventListener('click', e => {
        // 단, 이미지 자체를 클릭했을 때는 닫히지 않도록 합니다.
        if (e.target !== lightboxImage) {
            closeLightbox();
        }
    });
});