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