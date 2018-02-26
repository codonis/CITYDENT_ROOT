var priceBtn = $('.price-box__icon');
var priceBox = $('.price-box');
priceBtn.click(function (e) {
    e.preventDefault();
    $(this).parent().hide('fast');
});
$(window).scroll(function () {
    if ($(window).scrollTop() >= ($(document).height() - $(window).height()) - 100) {
        priceBox.css('bottom', '-18px');
    } else if ($(window).scrollTop() > 200) {
        priceBox.removeClass('price-box_hidden').css('bottom', -70);
    } else {
        priceBox.addClass('price-box_hidden');
    }
});