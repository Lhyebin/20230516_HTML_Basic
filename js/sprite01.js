$(function () {
    // <커서 올렸을때 bh변경>
    $('.mainLink li').on('mouseenter', function () {
        let idx = $(this).index();
        $('.bh').css({
            backgroundPositionX: -2400 - idx * 100
        })
    })
    // <커서 내렸을때 bh변경>
    $('.mainLink li').on('mouseleave', function () {
        $('.bh').css({
            backgroundPositionX: 0
        })
    })
})