$(".close-search").on('click', function () {
    $('.header-search').fadeOut(200)
});
$(".header-search-button").on('click', function () {
    $('.header-search').slideToggle(200)
});

$('.fave-button').on('click', function (e) {
    $(this).toggleClass('active');
    e.stopPropagation();
    e.preventDefault();
});
$('.product-cart-button').on('click', function (e) {
    e.preventDefault();
});
if($('#slick1').length) {
    $('#slick1').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        rtl: true,
        rows: 2,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
}

if($('#slick2').length) {
    $('#slick2').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        rtl: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
}

if($('.slider').length){
    $('.prev-button').click(function (e) {
        e.preventDefault();
        $(this).closest('.sliders').find('.slider-container').slick('slickNext');
    });

    $('.next-button').click(function (e) {
        e.preventDefault();
        $(this).closest('.sliders').find('.slider-container').slick('slickPrev');
    });
}

