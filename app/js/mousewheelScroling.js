

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