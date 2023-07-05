$(function () {
    $('#detail01 .itm').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
    })
})