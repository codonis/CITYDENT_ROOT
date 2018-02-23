$('#scrolla').click(function () {
    $.scrollify.move(2);
});
$('#mScrolla').click(function () {
    $('html,body').animate({
        scrollTop: $('.boxes-mobile').offset().top - 30
    },500);


});
