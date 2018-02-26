$(window).scroll(function () {
    if ($(window).scrollTop() >= ($(document).height() - $(window).height()) - 100) {
        $('.footer-mobile').addClass('sticky');
    } else {

        $('.footer-mobile').removeClass('sticky');
    }
});