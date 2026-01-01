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

    // 2. 모바일 터치 효과 (버튼/카드 클릭 시 피드백)
    // hover가 안 되는 모바일에서 클릭(터치) 시 active 클래스를 강제로 줬다 뺏는 기능
    const touchElements = document.querySelectorAll('.btn, .p-card, .f-box, .vision-card, .target-item');
    
    touchElements.forEach(el => {
        el.addEventListener('touchstart', function() {
            this.classList.add('is-touched');
        });
        el.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('is-touched');
            }, 200); // 0.2초 뒤에 원래대로
        });
    });
});