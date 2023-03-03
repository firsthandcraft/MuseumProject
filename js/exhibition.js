// Javascript Document
$(document).ready(function(){

    // header스크롤애니 배경바꾸기
    $('#wrap>main').on('mousewheel',function(e){
        let wheel = e.originalEvent.wheelDelta;
        console.log(wheel);
        if(wheel>30){
            $('header').css('background-color','#fff');
            $('header>#headerwrap>h1').css('background-image',"url('img/onlinelogobk.png')");
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
    // box01 이미지 슬라이드
    var length = $('#box01 .small>li').length;
    
    setInterval(function(){
        $('#box01 .small>li').eq(length-1).fadeOut(2000,function(){
            $('#box01 .small>li').eq(length-1).prependTo('#box01 .small');
             $('#box01 .small>li').eq(0).show('left',0);
        });
    },4000);

    /*------------------------aside-----------------------*/
    //  main #box02 aside가 스크롤시 헤더에 붙는 이벤트
    $(window).scroll(function () {
        let headerH = $('#headerwrap').innerHeight();
        let dScroll = $(window).scrollTop();
        let dTop1 = ($('#box11').position().top)-headerH;

        if(dScroll >= dTop1){
            $('#box11 aside').addClass('ong');
        }
        else {
            $('#box11 aside').removeClass('ong');
        }
    });

    // 현재전시 과거전시 예정전시 aside tab
    $('#box11>aside>p').eq(1).addClass('highlight');

    $('#box11>aside>p').click(function(){
        var index = $(this).index();
        $('main article').hide();
        $('#box11>aside>p').removeClass('highlight'); 
        $('main article').eq(index).show();
        $('#box11>aside>p').eq(index).addClass('highlight');

        return false;
     });

    //  예정전시 #box04 달력
    var today = null;
    var year = null;
    var month = null;
    var firstDay = null;
    var lastDay = null;
    var $tdDay = null;
    var $tdSche = null;
    var jsonData = null;
    $(document).ready(function() {
        drawCalendar();
        initDate();
        drawDays();
        drawSche();
        $("#movePrevMonth").on("click", function(){movePrevMonth();
        return false});
        $("#moveNextMonth").on("click", function(){moveNextMonth();
        return false});
    });
     //Calendar 그리기
     function drawCalendar(){
        var setTableHTML = "";
        setTableHTML+='<table class="calendar">';
        setTableHTML+='<tr><th>SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr>';
        for(var i=0;i<6;i++){
            setTableHTML+='<tr height="100">';
            for(var j=0;j<7;j++){
                setTableHTML+='<td style="text-overflow:ellipsis;overflow:hidden;white-space:nowrap">';
                setTableHTML+='    <div class="cal-day"></div>';
                setTableHTML+='    <div class="cal-schedule"></div>';
                setTableHTML+='</td>';
            }
            setTableHTML+='</tr>';
        }
        setTableHTML+='</table>';
        $("#cal_tab").html(setTableHTML);
    }
    
    //날짜 초기화
    function initDate(){
        $tdDay = $("td div.cal-day")
        $tdSche = $("td div.cal-schedule")
        dayCount = 0;
        today = new Date();
        year = today.getFullYear();
        month = today.getMonth()+1;
        if(month < 10){month = "0"+month;}
        firstDay = new Date(year,month-1,1);
        lastDay = new Date(year,month,0);
    }
    
    //calendar 날짜표시
    function drawDays(){
        $("#cal_top_year").text(year);
        $("#cal_top_month").text(month);
        for(var i=firstDay.getDay();i<firstDay.getDay()+lastDay.getDate();i++){
            $tdDay.eq(i).text(++dayCount);
        }
        for(var i=0;i<42;i+=7){
            $tdDay.eq(i).css("color","#999");
        }
        for(var i=6;i<42;i+=7){
            $tdDay.eq(i).css("color","#999");
        }
    }
    
    //calendar 월 이동
    function movePrevMonth(){
        month--;
        if(month<=0){
            month=12;
            year--;
        }
        if(month<10){
            month=String("0"+month);
        }
        getNewInfo();
        }
    
    function moveNextMonth(){
        month++;
        if(month>12){
            month=1;
            year++;
        }
        if(month<10){
            month=String("0"+month);
        }
        getNewInfo();
    }
    
    //정보갱신
    function getNewInfo(){
        for(var i=0;i<42;i++){
            $tdDay.eq(i).text("");
            $tdSche.eq(i).text("");
        }
        dayCount=0;
        firstDay = new Date(year,month-1,1);
        lastDay = new Date(year,month,0);
        drawDays();
        drawSche();
    }
    
    //데이터 등록
    function setData(){
        jsonData = 
        {
            "2022":{
                "01":{
                    "20":"object2022"
                }
                ,"02":{
                    "15":"Perspectives"
                    ,"23":"The Smell of Eucalyptus"
                }
                ,"03":{
                    "13":"Tulips2022"
                    ,"23":" Gazing Ball Paintings"
                }
            }
        }
    }
    
    //스케줄 그리기
    function drawSche(){
        setData();
        var dateMatch = null;
        for(var i=firstDay.getDay();i<firstDay.getDay()+lastDay.getDate();i++){
            var txt = "";
            txt =jsonData[year];
            if(txt){
                txt = jsonData[year][month];
                if(txt){
                    txt = jsonData[year][month][i];
                    dateMatch = firstDay.getDay() + i -1; 
                    $tdSche.eq(dateMatch).text(txt);
                }
            }
        }
    }

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

    // 모달 페이지 로그인과 회원가입
    $('header>#headerwrap>.login>li').eq(0).click(function(){
        $('#modal').show();
        $('#join').css('display','none');
        $('#login').css('display','block');
        return false;
    });
    $('header>#headerwrap>.login>li').eq(1).click(function(){
        $('#modal').show();
        $('#join').css('display','block');
        $('#login').css('display','none');
        return false;
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