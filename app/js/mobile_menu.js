

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