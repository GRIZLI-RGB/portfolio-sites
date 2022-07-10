$(function(){

    $('.review-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true
    });

    $('.btn-menu').on('click', function() {
        $('.menu-list').slideToggle();
    });

});