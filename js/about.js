// Javascript Document
$(document).ready(function(){


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