// Javascript Document
$(document).ready(function(){
/*------------------------header-------------------------*/
// header스크롤애니 배경바꾸기
$('#wrap').on('mousewheel',function(e){
    let wheel = e.originalEvent.wheelDelta;
    console.log(wheel);
    if(wheel>30){
        $('header').css('background-color','#fff');
        $('header>#headerwrap>h1').css('background-image',"url('../img/onlinelogobk.png')");
        $('header>#headerwrap>ul>li>a').css('color','#222');

    }else{
        $('header').css('background-color','#222');
        $('header>#headerwrap>h1').css('background-image',"url('img/onlinelogowh.png')");
        $('header>#headerwrap>ul>li>a').css('color','#999');
    }
});
// header 마우스 내리기 서브메뉴
$('header>#headerwrap>.menu>li').mouseover(function(){
    $('header>#headerwrap>.menu>li>ul').stop().slideDown();
    $('header .bg').stop().slideDown();
    return false;
});
$('header>#headerwrap>.menu>li').mouseleave(function(){
    $('header>#headerwrap>.menu>li>ul').stop().slideUp();
    $('header .bg').stop().slideUp();
    return false;
});
/*------------------------nav-------------------------*/ 
//nav 마우스 내리기 서브메뉴
$('nav .sidebar>.mainname>li').click(function(){
    var index = $(this).index();
    $('.submenu').eq(index).stop().slideDown();
    return false;
});
$('nav .sidebar>.mainname>li').mouseleave(function(){
    $('.submenu').stop().slideUp();
    return false;
});
/*-----------------------main-------------------------*/
/*------------------------aside-------------------------*/
//  main #box02 aside가 스크롤시 헤더에 붙는 이벤트
    $(window).scroll(function () {
        let headerH = $('#headerwrap').innerHeight();
        let dScroll = $(window).scrollTop();
        let dTop1 = ($('#box02').position().top)-headerH;

        if(dScroll >= dTop1){
            $('#box02 aside').addClass('on');
        }
        else {
            $('#box02 aside').removeClass('on');
        }
    });

//  main #box02 aside 클릭시 스크롤 내려가기
// asideScroll
    $('aside>p>a').on('click',function(e){
       let num = $(this).attr('href');
       let numPos = $(num).offset().top;  
       let secH = parseInt($('header').innerHeight());
       console.log(secH);
       $('body,html').animate({scrollTop:numPos-secH},1000);
       return false;
    });
// aside 스크롤시 aside p a 의 스타일이  this으로 되어있게 만들기
    $('#box02 aside>p:first>a').addClass('highlight');
    $(window).on('scroll',function(e){

        // let headerH = $('header').innerHeight();
        let headerH = 300;
        let dScroll = $('html,body').scrollTop();
        let dTop1 = ($('#parti01').offset().top)-headerH;
        let dTop2 = ($('#parti02').offset().top)-headerH;
        let dTop3 = ($('#parti03').offset().top)-headerH;
        let dTop4 = ($('#parti04').offset().top)-headerH;
        console.log(dScroll);
        // console.log(dTop1,':',dTop2,':',dTop3,':',dTop4,':')
        // console.log('window')
        if(dScroll >= dTop1 && dScroll < dTop2){
           $('aside>p>a').removeClass('highlight');
           $('aside>p:eq(0)>a').addClass('highlight');
        }
        if(dScroll >= dTop2 && dScroll < dTop3){
           $('aside>p>a').removeClass('highlight');
           $('aside>p:eq(1)>a').addClass('highlight');
        }
        if(dScroll >= dTop3 && dScroll < dTop4){
           $('aside>p>a').removeClass('highlight');
           $('aside>p:eq(2)>a').addClass('highlight');
        }
        if(dScroll >dTop4){
           $('aside>p>a').removeClass('highlight');
           $('aside>p:eq(3)>a').addClass('highlight');
        }
     });
     



 /*------------------------footer-------------------------*/
 // 풋터 올리기 이벤트
 let asideHeight = $('#footerwrap').height()
 let nowWidth =$('html,body').scrollTop();
  console.log(asideHeight);
  console.log(nowWidth);

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

/*-----------------------modal-------------------------*/
// 모달 페이지 로그인과 회원가입
$('header>#headerwrap>.login>li').eq(0).click(function(){
    $('#modal').show();
    $('#join').css('display','none');
    $('#login').css('display','block');
});
$('header>#headerwrap>.login>li').eq(1).click(function(){
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

// resize
$(window).on('resize',function(e){
window.location.reload();
});
});