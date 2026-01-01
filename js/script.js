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


    // 2. 모바일 터치 효과 (버튼 제외 버전)
    // 클릭이 중요한 .btn은 제외하고, 나머지 카드 요소들에만 효과를 줍니다.
    const touchElements = document.querySelectorAll('.p-card, .f-box, .vision-card, .target-item');
    
    touchElements.forEach(el => {
        el.addEventListener('touchstart', function() {
            this.classList.add('is-touched');
        }, { passive: true });

        el.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('is-touched');
            }, 200);
        }, { passive: true });
    });
});