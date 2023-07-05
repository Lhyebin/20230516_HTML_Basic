$(function () {
    $('#header .gnb>ul>li').on('click', function (e) {

        if ($('#header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
        }
    });

    // <모바일에서 메뉴 아이콘 클릭하면 하나의 메뉴바로 나오고 들어가고 한번에 할수있는>
    $('.mopen').on('click', function () {
        $('#header .gnb').toggleClass('on');
        $('#header').toggleClass('on');
    });

    // <모바일버전에서 화면 크기가 커지면 자동으로 메뉴바 사라지는>
    $(window).on('resize', function () {
        $($('#header .gnb').removeClass('on'))
    })
})