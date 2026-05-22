document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. 모바일 햄버거 메뉴 토글 로직
    // ==========================================
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger && navContainer) {
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
    }

    // ==========================================
    // 2. 프리미엄 페이드(Fade) 무한 루프 슬라이더
    // ==========================================
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');

    if (slides.length > 0 && prevBtn && nextBtn) {
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
    }

    // ==========================================
    // 3. 헤더 스크롤 이벤트 (Sticky 축소 효과)
    // ==========================================
    const header = document.querySelector('.site-header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ==========================================
    // 4. 스크롤 페이드인 & 업 애니메이션
    // ==========================================
    const fadeElements = document.querySelectorAll('.intro-section, .program-section, .why-section, .rounded-image-wrapper, .program-card, .location-title-box, .location-info-grid, .location-map-box, .location-people-section');

    const fadeOptions = {
        root: null,
        threshold: 0.10,
        rootMargin: "0px 0px -80px 0px"
    };

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

    if (whySlides.length > 0 && whyPrevBtn && whyNextBtn) {
        let whyIndex = 0;
        const totalWhySlides = whySlides.length;
        const whyIntervalTime = 4000;
        let whySliderTimer;

        function switchWhySlide(nextIndex) {
            whySlides[whyIndex].classList.remove('active');
            whyDots[whyIndex].classList.remove('active');

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

        whyNextBtn.addEventListener('click', () => {
            nextWhySlide();
            resetWhyTimer();
        });

        whyPrevBtn.addEventListener('click', () => {
            prevWhySlide();
            resetWhyTimer();
        });

        whyDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                switchWhySlide(index);
                resetWhyTimer();
            });
        });

        startWhyTimer();
    }

    // 6. LOCATION PAGE: 지점안내 갤러리 슬라이더 (자동 재생 추가)
    const mainGalleryImg = document.getElementById('main-gallery-img');
    const thumbnails = document.querySelectorAll('.thumb-img');
    const galleryPrevBtn = document.querySelector('.gallery-arrow.prev');
    const galleryNextBtn = document.querySelector('.gallery-arrow.next');
    const galleryWrapper = document.querySelector('.gallery-wrapper'); // 마우스 감지용

    if (mainGalleryImg && thumbnails.length > 0 && galleryPrevBtn && galleryNextBtn) {
        let currentGalleryIndex = 0;
        let galleryInterval;
        const autoPlayTime = 3000; // 4초마다 자동 전환

        function updateGallery(newIndex) {
            mainGalleryImg.style.opacity = '0.7';

            setTimeout(() => {
                currentGalleryIndex = newIndex;
                mainGalleryImg.src = thumbnails[currentGalleryIndex].src;
                mainGalleryImg.style.opacity = '1';

                thumbnails.forEach((thumb, idx) => {
                    thumb.classList.toggle('active', idx === currentGalleryIndex);
                });
            }, 150);
        }

        // 자동 재생 함수
        function startGalleryAutoPlay() {
            galleryInterval = setInterval(() => {
                let nextIdx = (currentGalleryIndex + 1) % thumbnails.length;
                updateGallery(nextIdx);
            }, autoPlayTime);
        }

        function stopGalleryAutoPlay() {
            clearInterval(galleryInterval);
        }

        // 썸네일 클릭 시
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                updateGallery(index);
                stopGalleryAutoPlay(); // 클릭 시 자동 재생 멈춤
                startGalleryAutoPlay(); // 다시 시작
            });
        });

        // 화살표 클릭 시
        galleryNextBtn.addEventListener('click', () => {
            updateGallery((currentGalleryIndex + 1) % thumbnails.length);
            stopGalleryAutoPlay();
            startGalleryAutoPlay();
        });

        galleryPrevBtn.addEventListener('click', () => {
            updateGallery((currentGalleryIndex - 1 + thumbnails.length) % thumbnails.length);
            stopGalleryAutoPlay();
            startGalleryAutoPlay();
        });

        // 마우스 올리면 멈춤, 나가면 다시 재생 (사용자 편의)
        if (galleryWrapper) {
            galleryWrapper.addEventListener('mouseenter', stopGalleryAutoPlay);
            galleryWrapper.addEventListener('mouseleave', startGalleryAutoPlay);
        }

        // 초기 실행
        startGalleryAutoPlay();
    }

// 7. TEACHERS PAGE: 강사 클릭 교체 로직
    const galleryItems = document.querySelectorAll('.gallery-item');
    const mainImg = document.querySelector('#main-img img');
    const mainText = document.querySelector('#main-text');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            mainImg.src = item.getAttribute('data-img');

            mainText.style.opacity = 0;
            setTimeout(() => {
                // 이름 뒤에 강제로 '강사'가 붙지 않도록 수정, 줄바꿈 태그(<br>) 그대로 반영
                document.querySelector('#instructor-name').innerText = item.getAttribute('data-name');
                document.querySelector('#instructor-desc').innerHTML = `
                <p style="line-height: 1.8;">${item.getAttribute('data-desc')}</p>
            `;
                mainText.style.opacity = 1;
            }, 300);
        });
    });

});
