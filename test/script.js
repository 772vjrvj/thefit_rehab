document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. 모바일 햄버거 메뉴 토글 로직
    // ==========================================
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('active');
        navContainer.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navContainer.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });


    // ==========================================
    // 2. 프리미엄 페이드(Fade) 무한 루프 슬라이더
    // ==========================================
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');

    let currentIndex = 0;
    const totalSlides = slides.length;
    let slideInterval;
    const intervalTime = 4500;

    function updateSliderPosition() {
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSliderPosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSliderPosition();
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function resetSlideShow() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetSlideShow();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetSlideShow();
    });

    startSlideShow();

    // ==========================================
    // 3. 헤더 스크롤 이벤트 (Sticky 축소 효과)
    // ==========================================
    const header = document.querySelector('.site-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 4. 스크롤 페이드인 & 업 애니메이션 (IntersectionObserver)
    // ==========================================
    const fadeElements = document.querySelectorAll('.intro-section, .program-section, .why-section, .rounded-image-wrapper, .program-card');

    const fadeOptions = {
        root: null,
        threshold: 0.10,
        rootMargin: "0px 0px -80px 0px"
    };

    // 💡 에러 원인이었던 띄어쓰기(IntersectionObserver)를 완벽히 붙여서 수정했습니다!
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, fadeOptions);

    fadeElements.forEach(element => {
        element.classList.add('fade-init');
        fadeObserver.observe(element);
    });
// ==========================================
    // 5. WHY SECTION 자율 무한 루프 및 화살표 수동 제어 슬라이더
    // ==========================================
    const whySlides = document.querySelectorAll('.why-slide');
    const whyDots = document.querySelectorAll('.why-indicators .dot');
    const whyPrevBtn = document.querySelector('.why-arrow.prev');
    const whyNextBtn = document.querySelector('.why-arrow.next');

    let whyIndex = 0;
    const totalWhySlides = whySlides.length;
    const whyIntervalTime = 4000; // 4초 주기 자동 슬라이딩
    let whySliderTimer;

    function switchWhySlide(nextIndex) {
        // 기존 활성화 클래스 제거
        whySlides[whyIndex].classList.remove('active');
        whyDots[whyIndex].classList.remove('active');

        // 새로운 타겟 인덱스 클래스 부여
        whyIndex = nextIndex;
        whySlides[whyIndex].classList.add('active');
        whyDots[whyIndex].classList.add('active');
    }

    function nextWhySlide() {
        const nextIdx = (whyIndex + 1) % totalWhySlides;
        switchWhySlide(nextIdx);
    }

    function prevWhySlide() {
        const prevIdx = (whyIndex - 1 + totalWhySlides) % totalWhySlides;
        switchWhySlide(prevIdx);
    }

    function startWhyTimer() {
        whySliderTimer = setInterval(nextWhySlide, whyIntervalTime);
    }

    function resetWhyTimer() {
        clearInterval(whySliderTimer);
        startWhyTimer();
    }

    // 다음 화살표 클릭 핸들러
    whyNextBtn.addEventListener('click', () => {
        nextWhySlide();
        resetWhyTimer();
    });

    // 이전 화살표 클릭 핸들러
    whyPrevBtn.addEventListener('click', () => {
        prevWhySlide();
        resetWhyTimer();
    });

    // 도트(인디케이터) 직접 클릭 핸들러
    whyDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            switchWhySlide(index);
            resetWhyTimer();
        });
    });

    // 슬라이더 구동 초기화 시작
    startWhyTimer();
});
