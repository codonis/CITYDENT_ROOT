/* Button Up */
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



/* Cross Browser */
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;
if (isFirefox) {
    $('html').addClass('firefox');
}
if (isEdge) {
    $('html').addClass('edge');
}
if (isIE) {
    $('html').addClass('ie');
}
if (isChrome) {
    $('html').addClass('chrome');
}
/* Form Validation */
$.validate({
    form: '#contactForm'
});


/* Main Slider */
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




/* Mobile Images */
if ($(window).width() < 769) {
    $('img').each(function () {
        $(this).attr('src', $(this).attr('data-mobile-image'));
    });
}


/* Mobile Menu */
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
    $('body').removeClass('no-scroll');
    $('html').toggleClass('no-scroll-f-menu');

});


/* Mouse Wheel Scrolling */
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


/* Price Box */
var priceBtn = $('.price-box__icon');
var priceBox = $('.price-box');
priceBtn.click(function (e) {
    e.preventDefault();
    $(this).parent().hide('fast');
});
$(window).scroll(function () {
    if ($(window).scrollTop() >= ($(document).height() - $(window).height()) - 100) {
        priceBox.css('bottom', '62px'); 
    } else if ($(window).scrollTop() > 200) {
        priceBox.removeClass('price-box_hidden').css('bottom', 15);
    } else {
        priceBox.addClass('price-box_hidden');
    }
});


/* Scroll Button */
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




/* Side Bar */
$('.side-panel__menu-list-item--hamburger').click(function () {
  $(this).toggleClass('active');
  $('.side-panel').toggleClass('side-panel_open');
  $('#navigationMobileFooter,#btnHamburgerContact').removeClass('open');
  $('#navigationMobile,#btnHamburger').removeClass('open');
  $('body').removeClass('no-scroll');
  $('html').removeClass('no-scroll-f-menu');

});
var icons = ['whatsapp', 'facebook', 'mail', 'phone'];
if ($(window).width() < 769) {
  for (var index = 0; index < icons.length; index++) {
    var element = icons[index];
    $('.side-panel .'+element).removeClass(element).addClass(element + '-mobile');
  }
}

$(window).scroll(function (e) {
  var $el = $('.side-panel');
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > $('.header').height() && !isPositionFixed) {
    $el.css({ 'position': 'fixed', 'top': '0px' });
  }
  if ($(this).scrollTop() < $('.header').height() && isPositionFixed) {
    $el.css({ 'position': 'absolute', 'top': '0px' });
  }
});


/* Sticky Footer */
$(window).scroll(function () {
    if ($(window).scrollTop() >= ($(document).height() - $(window).height()) - 100) {
        $('.footer-mobile').addClass('sticky');
    } else {

        $('.footer-mobile').removeClass('sticky');
    }
});