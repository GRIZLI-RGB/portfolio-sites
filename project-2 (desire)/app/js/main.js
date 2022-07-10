$(function () {
    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close')
    })
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close')
    });
    $('.main__slider').slick(
        {
            dots: true,
            arrows: false,
            autoplay: true
        }
    );
    $('.compact-slider').slick(
        {
            slidesToShow: 10,
            slidesToScroll: 10,
            dots: true,
            arrows: false,
        }
    );
    $('.blog__content-slider-imgs').slick(
        {
            prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg"></button>'
        }
    );

    var container = document.querySelector('.gallery');
    var mixer;
    if(container) {
        mixer = mixitup(container, {
            load: {
                filter: '.living'
            }
        });
    };

    $('.header img[alt="Логотип"]').click(function (e) { 
        location.href = 'index.html';
    });
});