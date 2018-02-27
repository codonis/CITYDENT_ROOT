

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
