@extends('layouts.app')

@section('content')
    <div class="slider-area slider-area2">
        <div class="slider-active dot-style">
            <div class="single-slider  d-flex align-items-center slider-height2">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-7 col-lg-8 col-md-10 ">
                            <div class="hero-wrapper">
                                <div class="hero__caption">
                                    <h1 data-animation="fadeInUp" data-delay=".3s">About</h1>
                                    <p data-animation="fadeInUp" data-delay=".6s">Almost before we knew it, we<br> had left the ground</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="team-area pb-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <div class="single-cat text-center mb-30">
                        <div class="cat-icon">
                            <img src="{{ asset('img/gallery/team1.png') }}" alt="">
                        </div>
                        <div class="cat-cap">
                            <h5><a href="#">Your daily meal plan</a></h5>
                            <p>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi
                                sem ut ipsum.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <div class="single-cat text-center mb-30">
                        <div class="cat-icon">
                            <img src="{{ asset('img/gallery/team2.png') }}" alt="">
                        </div>
                        <div class="cat-cap">
                            <h5><a href="#">Muscle Gain</a></h5>
                            <p>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi
                                sem ut ipsum.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <div class="single-cat text-center mb-30">
                        <div class="cat-icon">
                            <img src="{{ asset('img/gallery/team3.png') }}" alt="">
                        </div>
                        <div class="cat-cap">
                            <h5><a href="#">Weight Loss</a></h5>
                            <p>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi
                                sem ut ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="about-area2 section-padding40">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12">
                    <div class="about-img ">
                        <img src="{{ asset('img/gallery/about.png') }}" alt="">
                    </div>
                </div>
                <div class="col-lg-5 col-md-12">
                    <div class="about-caption mb-50">
                        <div class="section-tittle mb-35">
                            <h2>Create a healthy
                                life you love!</h2>
                        </div>
                        <p class="pera-top mb-40">Almost before we knew it, we had left the ground</p>
                        <p class="pera-bottom mb-30">Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                            dignissim dolor, a pretium mi sem ut ipsum. Fusce
                            fermentum. Pellentesque libero tortor, tincidunt et.</p>
                        <div class="icon-about">
                            <img src="{{ asset('img/icon/about1.svg') }}" alt="" class=" mr-20">
                            <img src="{{ asset('img/icon/about2.svg') }}" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="testimonial-area testimonial-padding fix">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class=" col-lg-9">
                    <div class="about-caption">
                        <div class="h1-testimonial-active dot-style">
                            <div class="single-testimonial position-relative">
                                <div class="testimonial-caption">
                                    <img src="{{ asset('img/icon/quotes-sign.png') }}" alt="" class="quotes-sign">
                                    <p>"The automated process starts as soon as your clothe go into the machine. This site outcome is gleaming clothe. Placeholder text commonly used. In publishing and graphic.</p>
                                </div>
                                <div class="testimonial-founder d-flex align-items-center">
                                    <div class="founder-img">
                                        <img src="{{ asset('img/icon/testimonial.png') }}" alt="">
                                    </div>
                                    <div class="founder-text">
                                        <span>Robart Brown</span>
                                        <p>Creative designer at Colorlib</p>
                                    </div>
                                </div>
                            </div>
                            <div class="single-testimonial position-relative">
                                <div class="testimonial-caption">
                                    <img src="{{ asset('img/icon/quotes-sign.png') }}" alt="" class="quotes-sign">
                                    <p>"The automated process starts as soon as your clothe go into the machine. This site outcome is gleaming clothe. Placeholder text commonly used. In publishing and graphic.</p>
                                </div>
                                <div class="testimonial-founder d-flex align-items-center">
                                    <div class="founder-img">
                                        <img src="{{ asset('img/icon/testimonial.png') }}" alt="">
                                    </div>
                                    <div class="founder-text">
                                        <span>Robart Brown</span>
                                        <p>Creative designer at Colorlib</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="video-area section-bg2 d-flex align-items-center"  data-background="{{ asset('img/gallery/video-bg.png') }}">
            <div class="video-wrap position-relative">
                <div class="video-icon" >
                    <a class="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0"><i class="fas fa-play"></i></a>
                </div>
            </div>
        </div>
    </div>
    <section class="home-blog-area section-padding30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7 col-md-9 col-sm-10">
                    <div class="section-tittle text-center mb-100">
                        <h2>Latest Blog</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="home-blog-single mb-40">
                        <div class="blog-img-cap">
                            <div class="blog-img">
                                <img src="{{ asset('img/gallery/blog1.png') }}" alt="">
                            </div>
                            <div class="blog-cap">
                                <h3><a href="/blog-details">Your daily meal plan</a></h3>
                                <P>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi
                                    sem ut ipsum.</P>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="home-blog-single mb-40">
                        <div class="blog-img-cap">
                            <div class="blog-img">
                                <img src="{{ asset('img/gallery/blog2.png') }}" alt="">
                            </div>
                            <div class="blog-cap">
                                <h3><a href="/blog-details">Food is a great source of  medicine</a></h3>
                                <P>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi
                                    sem ut ipsum.</P>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="home-blog-single mb-40">
                        <div class="blog-img-cap">
                            <div class="blog-img">
                                <img src="{{ asset('img/gallery/blog3.png') }}" alt="">
                            </div>
                            <div class="blog-cap">
                                <h3><a href="/blog-details">Everyday diet plan</a></h3>
                                <P>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi
                                    sem ut ipsum.</P>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about-low-area mt-30">
        <div class="container">
            <div class="about-cap-wrapper">
                <div class="row">
                    <div class="col-xl-5  col-lg-6 col-md-10 offset-xl-1">
                        <div class="about-caption mb-50">
                            <div class="section-tittle mb-35">
                                <h2>100% satisfaction guaranteed.</h2>
                            </div>
                            <p>Almost before we knew it, we had left the ground</p>
                            <a href="/about" class="border-btn">Make an Appointment</a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="about-img">
                            <div class="about-font-img">
                                <img src="{{ asset('img/gallery/about2.png') }}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
