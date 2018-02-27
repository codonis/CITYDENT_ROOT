

/* Mobile Images */
if ($(window).width() < 769) {
    $('img').each(function () {
        $(this).attr('src', $(this).attr('data-mobile-image'));
    });
}