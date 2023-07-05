$(function () {
    // <헤더 : 카트 아이콘 누르면 카트 숫자 올라가게>
    let cartNum = 0;

    $('.lnk .cart').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('on')) {
            alert('현재 장바구니에 담겨있는 상품입니다');
            return;
        } else {
            cartNum = cartNum + 1;
        }
        $(this).addClass('on');
        // console.log(cartNum);
        $('#header .service i small').text(cartNum);
    });




    // <제품 옆 카트+위시리스트 아이콘>
    $('.lnk .wish').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('on')
    })
})