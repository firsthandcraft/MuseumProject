// Javascript Document

$(document).ready(function(){
//동영상
$(".scrollBox").niceScroll({
    cursorcolor: "#000",
    cursorwidth: 4,
    scrollspeed: 60,
    cursorborderradius: 0,
    mousescrollstep: 40,
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    background: "none",
    cursorborder: "none",
    autohidemode: true,
    boxzoom: false,
    smoothscroll: true,
    zindex: 9999
});
$(".videoarea").on("mousewheel", function (event, delta) {
    if (delta > 0) {  //마우스 휠을 올렸을때

    } else if (delta < 0) {//마우스 휠을 내렸을때
        $('.videoarea').addClass('on');
        $('.scrollBox').addClass('on');
    }
});

    // b0x01
    // box01 공지사항
    var height = $('.noticetext>ul>li').height();
	var length = $('.noticetext>ul>li').length;
	
	$('.noticetext>ul').css('height',height*length);
	
	setInterval(function(){	
		$('.noticetext>ul').animate({top:-height},1000,function(){
			$('.noticetext>ul>li').eq(0).appendTo('.noticetext>ul');
			$('.noticetext>ul').css('top',0);	
		})
	},3000)
    // 공지사항 슬라이드
    $('.updown>li.upup').click(function(){
        $('.noticetext>ul>li:last').prependTo('.noticetext>ul');
        return false;
      });
      $('.updown>li.down').click(function(){
        $('.noticetext>ul>li:first').appendTo('.noticetext>ul');
        return false;
      });

    // box02
    // 포스터 슬라이드
    $('.left').click(function(){
        $('#box02>.big>.small>li:last').prependTo('#box02>.big>.small');
        return false;
      });
      $('.right').click(function(){
        $('#box02>.big>.small>li:first').appendTo('#box02>.big>.small');
        return false;
      });

    //   box05 
    // 작가이미지슬라이드
    var width = $('#box05 .move>li').width();
    var length = 10;
    // $('#box05.move>li').length;
    
    $('#box05 .move').css('width',length*width);
    setInterval(function(){
        $('#box05 .move').delay(3000).animate({marginLeft:'-='+width+'px'},3000,function(){
            $('#box05 .move>li:first-child').appendTo('#box05 .move');
             $('#box05 .move').css('margin-left',0);
        })
    });

    // 풋터 올리기 이벤트
    let asideHeight = $('#footerwrap').height()
        let nowWidth =$('html,body').scrollTop();
        //  console.log(asideHeight);
        //  console.log(nowWidth);

    $('footer>span').on("click", function (e) {
        let attrName = $('footer>span').attr('name');
        console.log(attrName);
        let fHeight =$('footer').height();
        if(attrName == "on"){
            $('footer').animate({hegiht: 'fHeight'},function(){
                    $('#footerwrap').show(800);
                    let num = nowWidth+ asideHeight;
                    $('html,body').animate({scrollTop:num});
                    });
                    let pic= 'img/aside02.png';
                    $('footer>span>img').attr('src',pic);
                    console.log(attrName);
                    console.log(nowWidth);
                
                $('footer>span').attr('name','off');
        } else{ 
            let fHeight =$('footer').height();

            $('footer').animate({hegiht:fHeight},function(){
                $('#footerwrap').hide(800);
                let num = nowWidth- asideHeight +fHeight;
                $('html,body').animate({scrollTop:num})
            });
            let pic= 'img/aside01.png';
            $('footer>span>img').attr('src',pic);
          
            $('footer>span').attr('name','on');
            console.log(attrName);
        }
    });
// 모달 페이지 로그인과 회원가입
    $('header>#headerwrap>.login>li').eq(1).click(function(){
        $('#modal').show();
        $('#join').css('display','none');
        $('#login').css('display','block');
    });
    $('header>#headerwrap>.login>li').eq(2).click(function(){
        $('#modal').show();
        $('#join').css('display','block');
        $('#login').css('display','none');
    });
    $('#login p:last-child ').click(function(){
        $('#join').css('display','block');
        $('#login').css('display','none');
    });
    $('#modal .close').click(function(){
        $('#modal').hide();
    });

    // 스크롤 리셋 위치
    window.onload = function() {
        setTimeout (function () {
            scrollTo(0,0);
        },100);
     }
    // resize
    $(window).on('resize',function(e){
        window.location.reload();

    });

});