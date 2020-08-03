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
if ($('#slick1').length) {
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

if ($('#slick2').length) {
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

if ($('.slider').length) {
    $('.prev-button').click(function (e) {
        e.preventDefault();
        $(this).closest('.sliders').find('.slider-container').slick('slickNext');
    });

    $('.next-button').click(function (e) {
        e.preventDefault();
        $(this).closest('.sliders').find('.slider-container').slick('slickPrev');
    });
}

$('.add-fav-btn').on('click', function (e) {
    $(this).toggleClass('active');
    e.stopPropagation();
    e.preventDefault();
});

$('.my-select select').on('change', function () {
    $(this).addClass("changed")
});


//Repeater
$('.add-new-address').on('click', function () {
    $('.address-repeater')
        .append($(
            '<div class="form-group address-input">\n' +
            '<input type="text" class="form-control"  placeholder="أضف عنوان شحن">\n' +
            '<button class="del-address">\n' +
            '    <i class="fal fa-trash-alt"></i>\n' +
            '</button>\n' +
            '</div>'
            ).hide().fadeIn(500)
        )
    ;
});
$('.address-repeater').on('click', '.del-address', function (e) {
    $(this).closest('.address-input').fadeOut(300, function () {
        $(this).remove()
    });
    e.preventDefault()
});

//plus-btnValue minus-btnValue
$(document).ready(function () {
    $(document).on('click', '.minus-btn, .plus-btn', function (e) {
        var $this = $(e.target),
            input = $this.parent().parent().find('.number-cunt'),
            v = $this.hasClass('minus-btn') ? input.val() - 1 : input.val() * 1 + 1,
            min = input.attr('data-min') ? input.attr('data-min') : 1,
            max = input.attr('data-max') ? input.attr('data-max') : false;
        if (v >= min) {
            if (!max === false && v > max) {
                return false
            } else input.val(v);
        }
        e.preventDefault();
    });
    $(document).on('change', '.number-cunt', function (e) {
        var input = $(e.target),
            min = input.attr('data-min') ? input.attr('data-min') : 1,
            max = input.attr('data-max'),
            v = input.val();
        if (v > max) input.val(max);
        else if (v < min) input.val(min);
    });
});

$(function () {
    var charLimit = 1;
    $(".inputs").keydown(function (e) {

        var keys = [8, 9, /*16, 17, 18,*/ 19, 20, 27, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 48, 144, 145];

        if (e.which == 8 && this.value.length == 0) {
            $(this).prev('.inputs').focus();
        } else if ($.inArray(e.which, keys) >= 0) {
            return true;
        } else if (this.value.length >= charLimit) {
            $(this).next('.inputs').focus();
            return false;
        } else if (e.shiftKey || e.which <= 48 || e.which >= 58) {
            return false;
        }
    }).keyup(function () {
        if (this.value.length >= charLimit) {
            $(this).next('.inputs').focus();
            return false;
        }
    });
});
