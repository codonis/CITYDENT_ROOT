$('#btnUp').click(function () {
    $('html,body').animate({
        scrollTop: 0
    },500);
    $('body').removeClass('no-scroll');
    $('html').removeClass('no-scroll-f-menu');
    $('#navigationMobile,#btnHamburger').removeClass('open');
    $('#navigationMobileFooter,#btnHamburgerContact').removeClass('open');
    $('.side-panel').removeClass('side-panel_open');
    $('.side-panel__menu-list-item--hamburger').removeClass('active');
});
$.validate({
    form: '#contactForm'
});
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


if ($(window).width() < 769) {
    $('img').each(function () {
        $(this).attr('src', $(this).attr('data-mobile-image'));
    });
}
$('#btnHamburger').click(function () {
    $('#navigationMobile,#btnHamburger').toggleClass('open');
    $('.side-panel__menu-list-item--hamburger').removeClass('active');
    $('.side-panel').removeClass('side-panel_open');
    $('body').toggleClass('no-scroll');
    $('html').removeClass('no-scroll-f-menu');
});
$('#btnHamburgerContact').click(function () {
    $('#navigationMobileFooter,#btnHamburgerContact').toggleClass('open');
    $('.side-panel').removeClass('side-panel_open');
    $('.side-panel__menu-list-item--hamburger').removeClass('active');
    $('html').toggleClass('no-scroll-f-menu');

});
$(function () {
    $.scrollify({
        section: ".section",
        setHeights: false,
        offset: -30,
        updateHash: false,
        easing: "easeOutExpo",
    });
    if($(window).width() < 769){
        $.scrollify.destroy();
    }
});
$('#scrolla').click(function () {
    $.scrollify.move(2);
});
$('#mScrolla').click(function () {
    $('html,body').animate({
        scrollTop: $('.boxes-mobile').offset().top - 30
    }, 500);

    $('body').removeClass('no-scroll');
    $('html').removeClass('no-scroll-f-menu');
    $('#navigationMobile,#btnHamburger').removeClass('open');
    $('#navigationMobileFooter,#btnHamburgerContact').removeClass('open');
    $('.side-panel').removeClass('side-panel_open');
    $('.side-panel__menu-list-item--hamburger').removeClass('active');
});

//Side Bar
$('.side-panel__menu-list-item--hamburger').click(function () {
    $(this).toggleClass('active');
    $('.side-panel').toggleClass('side-panel_open');
    $('#navigationMobileFooter,#btnHamburgerContact').removeClass('open');
    $('#navigationMobile,#btnHamburger').removeClass('open');
    $('body').removeClass('no-scroll');
    $('html').removeClass('no-scroll-f-menu');
    
});

$(window).scroll(function(e){ 
    var $el = $('.side-panel'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > $('.header').height() && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '0px'}); 
    }
    if ($(this).scrollTop() < $('.header').height() && isPositionFixed)
    {
      $el.css({'position': 'absolute', 'top': '0px'}); 
    } 
  });
$(window).scroll(function () {
    if ($(window).scrollTop() >= ($(document).height() - $(window).height()) - 100) {
        $('.footer-mobile').addClass('sticky');
    } else {

        $('.footer-mobile').removeClass('sticky');
    }
});