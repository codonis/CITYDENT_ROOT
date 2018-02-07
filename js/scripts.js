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
        beforeChange: function(){},
        afterChange: function(){},
        slideshowEnd: function(){},
        lastSlide: function(){},
        afterLoad: function(){}
        });
  });


$('.side-panel__menu-list-item--hamburger').click(function () {
    $(this).toggleClass('active');
});