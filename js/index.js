// 상단 서치
$(document).ready(function(){
    $('header .container .nav-btn a:nth-child(3)').click(function(){
        $('.top-search,.popupBG').slideDown()
    })
    $('.top-search .srh-close').click(function(){
        $('.top-search,.popupBG').slideUp()
    })
   
})

//푸터 아코디언
$(document).ready(function(){
    let angle = 0;
    $('.depth1-1>a').click(function(e){
        // e.preventDefault : "a태그" 누르면 상단으로 올라가능 기능 없애기
        e.preventDefault();
        // question을 누르면 answer이 열리고 다시 누르면 닫히도록
        $(this).next().slideToggle().siblings('.depth2-1').slideUp();
        angle += 180;
        $(this).find('i').css({transform: 'rotate('+ angle + 'deg)' });
        
    })
    
})
