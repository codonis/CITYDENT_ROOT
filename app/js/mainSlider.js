//Main Slider
$(document).ready(function () {

    $('#slider').nivoSlider({
        effect: 'fold',
        slices: 6,
        boxCols: 12,
        boxRows: 4,
        animSpeed: 400,
        pauseTime: 3000,
        startSlide: 0,
        directionNav: false,
        controlNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
        prevText: 'Prev',
        nextText: 'Next',
        randomStart: false,
        beforeChange: function () { },
        afterChange: function () { },
        slideshowEnd: function () { },
        lastSlide: function () { },
        afterLoad: function () { }
    });
    $('#tabSlider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true
    });
    $('#tabSlider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.tabs__tab').removeClass('tabs__tab_active');
        $('.tabs__tab').eq(nextSlide).addClass('tabs__tab_active');

    });
    $(".tabs__tab").click(function (e) {
        e.preventDefault();
        slideIndex = $(this).index();
        $('#tabSlider').slick('slickGoTo', slideIndex);
        $('#tabSlider').slick('slickPause');
    });

    $('#newsSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: $('.news-slider__prev'),
        nextArrow: $('.news-slider__next')
    });


});

