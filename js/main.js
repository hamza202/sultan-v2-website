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
$('.product-cart-button').on('click', function (e){
    e.preventDefault();
});
