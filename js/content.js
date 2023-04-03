$(function () {
    /* -------------------------- index event banner slide ------------------------- */
    $('.event_banner_panel').append($('<a></a>').attr('href','#').html($('.event_slider_image').first().clone()));
    $('.event_banner_panel').prepend($('<a></a>').attr('href','#').html($('.event_slider_image').eq(-2).clone()));

    let index=1;
    let auto;
    let sw_s=false;
    moveSlider(index);
    autoSlider();
    $('.control_btn').click(function () {
        index=$(this).index();
        moveSlider(index+1);
    });
    $('.l_btn').click(function () {
        if(index>1) {
            index--;
            moveSlider(index);
        } else {
            $('.event_banner_panel').css('left',-4320);
            index=5;
            moveSlider(index);
        }
    });
    $('.r_btn').click(function () {
        if(index<5) {
            index++;
            moveSlider(index);
        } else {
            $('.event_banner_panel').css('left',0);
            index=1;
            moveSlider(index);
        }
    });

    $('.event_canvas').hover(function () {
        clearInterval(auto);
    },function () {
        autoSlider();
    });

    function moveSlider(index) {
        $('.event_banner_panel').animate({
            left:-(index*720)
        },700);
        $('.control_btn').removeClass('active');
        $('.control_btn').eq(index-1).addClass('active');
    }
    
    function autoSlider() {
        auto=setInterval(function () {
            if(index<5 && sw_s==false) {
                $('.r_btn').trigger('click');
            } else {    // 슬라이드가 마지막일 경우
                sw_s=true;
            }
            if(index>0 && sw_s==true) {
                $('.r_btn').trigger('click');
            } else {
                sw_s=false;
            }
        },2500);
    }
    /* -------------------------- index event banner slide ------------------------- */
    /* ------------------------------------ sign in -------------------------------- */
    // 체크박스
    let chk;
    // 체크박스 전체 선택/해제
    $('#TOS_check_all').click(function () {
        chk=$(this).is(':checked');
        chk_all(chk);
    });

    $('.ck').click(function () {
        $('#TOS_check_all').prop('checked',false);
    });

    function chk_all(chk) {
        if(chk) {   // 전체 약관 동의 체크시
            $('.ck').prop('checked',true);  // 아래 약관 모두 체크
        } else {    
            $('.ck').prop('checked',false); // 아래 약관 모두 체크 해제
        }
    }
    
    /* ------------------------------------ sign in -------------------------------- */
    /* -------------------------- event_list ongoing/end -------------------------- */
    let now_date=new Date();
    for(let i=0; i<$('.event-date').length; i++) {
        // 각 이벤트 마감 날짜 추출
        let e_date_y=$('.event-date').eq(i).html().substring(13,17);
        let e_date_m=$('.event-date').eq(i).html().substring(18,20);
        let e_date_d=$('.event-date').eq(i).html().substring(21);
        // 추출된 날짜를 Date 형식으로 변환
        let e_date=new Date(e_date_y,e_date_m-1,e_date_d);
        // 현재 날짜와 이벤트 마감날짜 비교
        if(now_date.getTime() > e_date.getTime()) {     // 현재 날짜가 이벤트 마감 날짜보다 지났을 경우
            // '진행중'을 '마감'으로 바꾸고 css변경
            $('.event-date').eq(i).parent().parent().find('.event-status').addClass('event_end').html('마감');
            $('.event-date').eq(i).prev().css({
                fontWeight:300,
                color:'#8a8e91'
            });
        } else {
            $('.event-date').eq(i).prev().css('font-weight','800');
        }
    }
    /* -------------------------- event_list ongoing/end -------------------------- */
    /* -------------------------- book episode list align -------------------------- */
    $('.recent_arr>span').addClass('che');
    let sw=true;
    $('.list_header a').click(function () {
        if(sw) {
            $(this).find('span').addClass('che');
            $(this).siblings().find('span').removeClass('che');
            
        } else {
            $(this).find('span').removeClass('che');
            $(this).siblings().find('span').addClass('che');
        }
    });
    /* -------------------------- book episode list align -------------------------- */
});