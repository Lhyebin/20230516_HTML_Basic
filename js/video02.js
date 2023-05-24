$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'kVDeQQidJjA',
        // -> 유튜브 동영상 링크 넣기
        containment: '#main_visual',
        // -> 메인비쥬얼 위치에 동영상 넣기
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
        // -> 동영상 없는 부분으로 스크롤 내리면 동영상 멈춤
    });



    // <사각형 3개에 동영상 넣기>
    $('#conVideo').YTPlayer({
        videoURL: 'kVDeQQidJjA',
        containment: '#bgm1',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });
    $('#conVideo2').YTPlayer({
        videoURL: 'kVDeQQidJjA',
        containment: '#bgm2',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });



    // <멈춤(pause) 버튼 누르면 동영상 정지>
    $('#main_visual .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    })
    // <재생(play) 버튼 누르면 동영상 재생>
    $('#main_visual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    })
})