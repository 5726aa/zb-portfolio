document.addEventListener("DOMContentLoaded", function() {
    // 1. 스크롤 애니메이션 (Reveal) 로직
    const reveals = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 100; 

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // 첫 로드 시에도 실행


    // 2. 모바일 터치 효과 (수정됨: 클릭 방해 방지)
    // { passive: true } 설정을 통해 아이패드/아이폰에서의 클릭 간섭을 해결합니다.
    const touchElements = document.querySelectorAll('.btn, .p-card, .f-box, .vision-card, .target-item');
    
    touchElements.forEach(el => {
        el.addEventListener('touchstart', function() {
            this.classList.add('is-touched');
        }, { passive: true }); // 브라우저에게 기본 동작(링크 이동)을 방해하지 않겠다고 명시

        el.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('is-touched');
            }, 200);
        }, { passive: true });
    });
});