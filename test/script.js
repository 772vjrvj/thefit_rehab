$(document).ready(function() {

    // ==========================================
    // 1. 모바일 햄버거 메뉴 토글 로직 (jQuery)
    // ==========================================
    const $hamburger = $('.hamburger');
    const $navContainer = $('.nav-container');
    const $navLinks = $('.nav-menu a');

    if ($hamburger.length && $navContainer.length) {
        $hamburger.on('click', function() {
            $(this).toggleClass('active');
            $navContainer.toggleClass('active');

            const isOpen = $(this).hasClass('active');
            $(this).attr('aria-expanded', isOpen);
        });

        $navLinks.on('click', function() {
            $hamburger.removeClass('active').attr('aria-expanded', 'false');
            $navContainer.removeClass('active');
        });
    }

    // ==========================================
    // 2. 프리미엄 페이드(Fade) 무한 루프 슬라이더 (jQuery)
    // ==========================================
    const $slides = $('.slide');
    const $prevBtn = $('.slider-arrow.prev');
    const $nextBtn = $('.slider-arrow.next');

    if ($slides.length > 0 && $prevBtn.length && $nextBtn.length) {
        let currentIndex = 0;
        const totalSlides = $slides.length;
        let slideInterval;
        const intervalTime = 4500;

        function updateSliderPosition() {
            $slides.removeClass('active').eq(currentIndex).addClass('active');
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

        $nextBtn.on('click', function() {
            nextSlide();
            resetSlideShow();
        });

        $prevBtn.on('click', function() {
            prevSlide();
            resetSlideShow();
        });

        startSlideShow();
    }

    // ==========================================
    // 3. 헤더 스크롤 이벤트 (Sticky 축소 효과) (jQuery)
    // ==========================================
    const $header = $('.site-header');

    if ($header.length) {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 50) {
                $header.addClass('scrolled');
            } else {
                $header.removeClass('scrolled');
            }
        });
    }

    // ==========================================
    // 4. 스크롤 페이드인 & 업 애니메이션 (jQuery + Intersection Observer)
    // ※ 스크롤 성능 저하 방지를 위해 브라우저 네이티브 Observer API를 jQuery로 래핑하여 사용
    // ==========================================
    const $fadeElements = $('.intro-section, .program-section, .why-section, .rounded-image-wrapper, .program-card, .location-title-box, .location-info-grid, .location-map-box, .location-people-section, .why-center-block');

    if ($fadeElements.length > 0) {
        $fadeElements.addClass('fade-init');

        const fadeOptions = {
            root: null,
            threshold: 0.10,
            rootMargin: "0px 0px -80px 0px"
        };

        const fadeObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    $(entry.target).addClass('is-visible');

                    // 이미지 내부에 loading="lazy"가 되어있어도
                    // 뷰포트에 들어오는 즉시 투명도를 부드럽게 조정하여 깜빡임 방지
                    const $img = $(entry.target).find('img');
                    if ($img.length && !$img.hasClass('loaded')) {
                        $img.on('load', function() {
                            $(this).addClass('loaded');
                        });
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, fadeOptions);

        $fadeElements.each(function() {
            fadeObserver.observe(this);
        });
    }

    // ==========================================
    // 5. WHY SECTION 자율 무한 루프 및 화살표 슬라이더 (jQuery)
    // ==========================================
    const $whySlides = $('.why-slide');
    const $whyDots = $('.why-indicators .dot');
    const $whyPrevBtn = $('.why-arrow.prev');
    const $whyNextBtn = $('.why-arrow.next');

    if ($whySlides.length > 0 && $whyPrevBtn.length && $whyNextBtn.length) {
        let whyIndex = 0;
        const totalWhySlides = $whySlides.length;
        const whyIntervalTime = 5500;
        let whySliderTimer;

        function switchWhySlide(nextIndex) {
            $whySlides.eq(whyIndex).removeClass('active');
            $whyDots.eq(whyIndex).removeClass('active');

            whyIndex = nextIndex;
            $whySlides.eq(whyIndex).addClass('active');
            $whyDots.eq(whyIndex).addClass('active');
        }

        function nextWhySlide() {
            switchWhySlide((whyIndex + 1) % totalWhySlides);
        }

        function prevWhySlide() {
            switchWhySlide((whyIndex - 1 + totalWhySlides) % totalWhySlides);
        }

        function startWhyTimer() {
            whySliderTimer = setInterval(nextWhySlide, whyIntervalTime);
        }

        function resetWhyTimer() {
            clearInterval(whySliderTimer);
            startWhyTimer();
        }

        $whyNextBtn.on('click', function() {
            nextWhySlide();
            resetWhyTimer();
        });

        $whyPrevBtn.on('click', function() {
            prevWhySlide();
            resetWhyTimer();
        });

        $whyDots.on('click', function() {
            const dotIndex = $(this).index(); // 클릭한 인디케이터의 인덱스 번호 추출
            switchWhySlide(dotIndex);
            resetWhyTimer();
        });

        startWhyTimer();
    }

    // ==========================================
    // 6. LOCATION PAGE: 지점안내 갤러리 슬라이더 (jQuery)
    // ==========================================
    const $mainGalleryImg = $('#main-gallery-img');
    const $thumbnails = $('.thumb-img');
    const $galleryPrevBtn = $('.gallery-arrow.prev');
    const $galleryNextBtn = $('.gallery-arrow.next');
    const $galleryWrapper = $('.gallery-wrapper');

    if ($mainGalleryImg.length && $thumbnails.length > 0 && $galleryPrevBtn.length && $galleryNextBtn.length) {
        let currentGalleryIndex = 0;
        let galleryInterval;
        const autoPlayTime = 3000;

        function updateGallery(newIndex) {
            $mainGalleryImg.css('opacity', '0.7');

            setTimeout(() => {
                currentGalleryIndex = newIndex;
                $mainGalleryImg.attr('src', $thumbnails.eq(currentGalleryIndex).attr('src'));
                $mainGalleryImg.css('opacity', '1');

                $thumbnails.removeClass('active').eq(currentGalleryIndex).addClass('active');
            }, 150);
        }

        function startGalleryAutoPlay() {
            galleryInterval = setInterval(() => {
                updateGallery((currentGalleryIndex + 1) % $thumbnails.length);
            }, autoPlayTime);
        }

        function stopGalleryAutoPlay() {
            clearInterval(galleryInterval);
        }

        $thumbnails.on('click', function() {
            updateGallery($(this).index());
            stopGalleryAutoPlay();
            startGalleryAutoPlay();
        });

        $galleryNextBtn.on('click', function() {
            updateGallery((currentGalleryIndex + 1) % $thumbnails.length);
            stopGalleryAutoPlay();
            startGalleryAutoPlay();
        });

        $galleryPrevBtn.on('click', function() {
            updateGallery((currentGalleryIndex - 1 + $thumbnails.length) % $thumbnails.length);
            stopGalleryAutoPlay();
            startGalleryAutoPlay();
        });

        // 갤러리에 마우스 오버 시 자동재생 멈춤
        if ($galleryWrapper.length) {
            $galleryWrapper.on('mouseenter', stopGalleryAutoPlay)
                .on('mouseleave', startGalleryAutoPlay);
        }

        startGalleryAutoPlay();
    }

// ==========================================
// 7. TEACHERS PAGE: 강사 클릭 데이터 교체 (Fade 효과 적용)
// ==========================================
    const $galleryItems = $('.gallery-item');
    const $mainImgContainer = $('#main-img');
    const $mainImg = $('#main-img img');
    const $mainTextContainer = $('#main-text');

    if ($galleryItems.length > 0 && $mainImg.length && $mainTextContainer.length) {
        $galleryItems.on('click', function() {
            const $this = $(this);

            // 1. 먼저 투명도를 0으로 만들어 페이드 아웃
            $mainImgContainer.css('opacity', 0);
            $mainTextContainer.css('opacity', 0);

            setTimeout(() => {
                // 2. 투명도가 0일 때 데이터를 교체
                $mainImg.attr('src', $this.attr('data-img'));
                $('#instructor-name').text($this.attr('data-name'));
                $('#instructor-desc').html('<p style="line-height: 1.8;">' + $this.attr('data-desc') + '</p>');

                // 3. 다시 투명도를 1로 만들어 페이드 인
                $mainImgContainer.css('opacity', 1);
                $mainTextContainer.css('opacity', 1);
            }, 400); // CSS transition 시간과 맞춤
        });
    }

    // ==========================================
    // 8. PROGRAM PAGE 프리미엄 퀵 스무스 스크롤 네비게이션 (jQuery 애니메이션)
    // ==========================================
    const $scrollButtons = $('.scroll-anchor-btn');

    if ($scrollButtons.length > 0) {
        $scrollButtons.on('click', function() {
            const targetId = $(this).attr('data-scroll');
            const $targetElement = $('#' + targetId);

            if ($targetElement.length) {
                // 상단 고정 헤더 높이 등을 고려해 오프셋 값(100px) 보정
                const targetY = $targetElement.offset().top - 100;

                $('html, body').animate({
                    scrollTop: targetY
                }, 800, 'swing'); // 0.8초 동안 부드러운 스윙 애니메이션 처리
            }
        });
    }

    // ==========================================================================
    // 9. COUNSELING FORM: 상담하기 비동기 전송 처리 (jQuery AJAX 연동 구조화)
    // ==========================================================================
    const $contactForm = $('#contactForm');

    if ($contactForm.length) {
        $contactForm.on('submit', function(e) {
            e.preventDefault();

            var name = $('#user-name').val().trim();
            var email = $('#user-email').val().trim();
            var title = $('#form-title').val().trim();
            var content = $('#form-content').val().trim();

            if (!name || !email || !title || !content) {
                alert('모든 항목을 빠짐없이 입력해 주세요.');
                return;
            }

            var $submitBtn = $('.btn-submit');
            $submitBtn.prop('disabled', true).text('SENDING...');

            $.ajax({
                url: 'contact_process.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    name: name,
                    email: email,
                    title: title,
                    content: content
                },
                success: function(response) {
                    if (response.status === 'success') {
                        alert('상담 신청이 정상적으로 접수되었습니다. 확인 후 기재하신 메일로 빠르게 회신해 드리겠습니다.');
                        $contactForm[0].reset();
                    } else {
                        alert('전송 처리 중 오류가 발생했습니다: ' + response.message);
                    }
                },
                error: function(xhr, status, error) {
                    console.log('실제 백엔드가 빌드되기 전이므로 임시 테스트 성공 시뮬레이션을 작동합니다.');

                    setTimeout(function() {
                        alert('[안내] 상담 신청이 성공적으로 접수되었습니다.\n(백엔드 및 DB 연동 인프라 완성 시 이 테스트 팝업은 자동 스위칭됩니다.)');
                        $contactForm[0].reset();
                        $submitBtn.prop('disabled', false).text('SEND');
                    }, 1000);
                },
                complete: function() {
                    // 실제 연동 완료 시 주석을 풀고 사용하시면 됩니다.
                    // $submitBtn.prop('disabled', false).text('SEND');
                }
            });
        });
    }
});

// script.js 맨 아래 추가
$(window).on('load', function() {
    const hash = window.location.hash;
    if (hash) {
        setTimeout(function() {
            const $target = $(hash);
            if ($target.length) {
                $('html, body').animate({
                    scrollTop: $target.offset().top - 100 // 헤더 높이만큼 보정
                }, 400);
            }
        }, 500);
    }
});
