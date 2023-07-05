$(function () {
    $('.product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
        // -> responsive : 반응형 (화면 줄어들때 2개만 보이게)
    });

    $('#product .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    });
    $('#product .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    });

});