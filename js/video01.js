$(function () {

    // <하나의 컨트롤 버튼으로 재생 정지 모두 사용하기>
    let btn = true;
    $('.ctr').on('click', function () {
        $(this).toggleClass('on');
        if (btn) {
            $('.main_visual video').trigger('pause');
        } else {
            $('.main_visual video').trigger('play');
        }
        btn = !btn;
        console.log(btn);
    })
    // -> 태그 1개일땐 this라고 써도 적용가능



    // <정지 버튼(pause) 눌렀을때 동영상 정지하기>
    $('.case01 .pause').on('click', function () {
        $('.case01 video').trigger('pause');
    })
    // <재생 버튼(play) 눌렀을때 동영상 재생하기>
    $('.case01 .play').on('click', function () {
        $('.case01 video').trigger('play');
    })

})  