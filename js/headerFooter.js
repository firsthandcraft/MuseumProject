// Javascript Document
$(document).ready(function(){
//header 가져오기
$(".header_html").load("../html/header.html header" , function(){
    //모바일 nav클릭 슬라이드
    $(".menuicon").on("click",function(){
        $(".sidebar").css("left","0");
    });
    $(".sidebar .close").on("click",function(){
        $(".sidebar").css("left","-300px");
    });
    //모바일 로고
    let wWindow = $(window).width();
    if(wWindow<=979){
        $("h1 img").attr("src","../img/mlogobk.png");
        $('#wrap').on('mousewheel',function(e){
            let wheel = e.originalEvent.wheelDelta;
            console.log(wheel);
            if(wheel>30){
                $('header').css('background-color','#fff');
                $('h1 img').attr('src','../img/mlogobk.png');
                $('header>#headerwrap>ul>li>a').css('color','#222');
                $('.menuicon').css('color','#222')
    
            }else{
                $('header').css('background-color','#222');
                $('h1 img').attr('src','../img/mlogowh.png');
                $('header>#headerwrap>ul>li>a').css('color','#999');
                $('.menuicon').css('color','#999')
            }
        });
    } else{
        // header스크롤애니배경
        $('#wrap').on('mousewheel',function(e){
            let wheel = e.originalEvent.wheelDelta;
            console.log(wheel);
            if(wheel>30){
                $('header').css('background-color','#fff');
                $('header>#headerwrap>h1 img').attr('src','../img/onlinelogobk.png');
                $('header>#headerwrap>ul>li>a').css('color','#222');

            }else{
                $('header').css('background-color','#222');
                $('header>#headerwrap>h1 img').attr('src','../img/onlinelogowh.png');
                $('header>#headerwrap>ul>li>a').css('color','#999');
            }
        });
            // header 마우스 내리기 서브메뉴
        $('header .menu>li').mouseover(function(){
            $('header .menu>li>ul').stop().slideDown();
            $('header .bg').stop().slideDown();

        });
        $('header .menu>li').mouseleave(function(){
            $('header .menu>li>ul').stop().slideUp();
            $('header .bg').stop().slideUp();
        });
            //mobile nav 마우스 내리기 서브메뉴
        $('nav .sidebar>.mainname>li').click(function(){
            var index = $(this).index();
            $('.submenu').eq(index).stop().slideDown();
            return false;
        });
        $('nav .sidebar>.mainname>li').mouseleave(function(){
            $('.submenu').stop().slideUp();
            return false;
        });
    }
});
$(".footer_html").load("../html/footer.html footer" , function(){
    $('.footerBtn').click(function(){
        if($('.footerBtn').hasClass('rotate')){
            $('.footerBtn').removeClass('rotate');
            $('.footerBtn').addClass('rotateReverse');
            $('.footerFirst').slideDown();
        }else{
            $('.footerBtn').removeClass('rotateReverse');
            $('.footerBtn').addClass('rotate');
            $('.footerFirst').slideUp();
        }
    });
});

});