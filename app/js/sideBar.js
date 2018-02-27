


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