$(function () {
    $('.pro_slide').on('init afterChange', function () {
        const current = $('.pro_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        console.log(current);
    })

    $('.pro_slide').slick({
        arrows: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 2000,
    })
})