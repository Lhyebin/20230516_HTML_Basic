$(function () {

    const model = ['ionic', 'casper', 'sonata'];
    // -> 다음페이지 차모델 변경되면서 슬라이드될때마다 차 이름 같이 변경할 이름 설정

    $('.main_slide').on('init afterChange', function (e, s, c) {
        let _this = $(this).find('.slick-current');
        // ->  this : 이것, 클릭하는것
        //    _this : 내가 짓는 이름 --
        _this.addClass('on').siblings().removeClass('on');
        // <슬라이드 별 번호 변경>
        $('#main_visual .num').text(c ? c + 1 : 1)
        $('#main_visual .model').text(c ? model[(c + 1) % model.length] : model[1])
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    });

    $('#main_visual .model').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

});