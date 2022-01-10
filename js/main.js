$(function(){

$('.visual').slick({
    swipe:false,     //마우스나 손가락으로 좌우이동가능
    autoplay:true,   //자동실행
    pauseOnHover:false, //마우스호버시 계속 실행여부
    autoplaySpeed:5000, //다음장으로 넘어가는 속도 밀리세컨드 1/1000
    speed:1000, //애니메이션 속도
    vertical:false,  //세로 슬라이드 여부
    fade:true, //페이드인 페이드아웃 애니메이션 설정여부
    arrows:false, // 좌우 화살표 표시 여부
    dots:true, //도트 표시 여부
    
   });

   $(".dlc-slider").slick({
    swipe:false,     //마우스나 손가락으로 좌우이동가능
    autoplay:true,   //자동실행
    pauseOnHover:false, //마우스호버시 계속 실행여부
    autoplaySpeed:7000, //다음장으로 넘어가는 속도 밀리세컨드 1/1000
    speed:1000, //애니메이션 속도
    vertical:false,  //세로 슬라이드 여부
    fade:false, //페이드인 페이드아웃 애니메이션 설정여부
    arrows:true, // 좌우 화살표 표시 여부
    dots:false, //도트 표시 여부
   });

    $("#sec2 ul li:eq(0)").on("click", function(e){ 
    e.preventDefault();

    $(".popup").css("display","block");
    $(".popup .popup-inner .modal").find("iframe").attr("src","");
    $(".popup .popup-inner .modal").find("iframe").attr("src","https://www.youtube.com/embed/izEDCqcG5SA");
 });

 
 
    $(".popup .btnClose").on("click",function(e){
        e.preventDefault();
        $(".popup") .css("display","none");
        $(".popup .popup-inner .modal").find("iframe").attr("src","");

    });


    $("#sec2 ul li:eq(1)").on("click", function(e){ 
        e.preventDefault();
    
        $(".popup").css("display","block");
        $(".popup .popup-inner .modal").find("iframe").attr("src","");
        $(".popup .popup-inner .modal").find("iframe").attr("src","https://www.youtube.com/embed/UGRHLmBNO_w");
     });



     $("#sec1-group .dlc-list li").on("mouseover",function(){
        $(this).stop().animate({height:260},200,function(){
        $(this).find(".text1").stop().animate({left:"75%"},500);
        $(this).find(".text2").stop().delay(200).animate({left:"86%"},500);    
        });
        $(this).siblings().stop().animate({height:100},200);
    });
    
    $("#sec1-group .dlc-list li").on("mouseout",function(){
    
        $("#sec1-group .dlc-list li").stop().animate({height:140},500);
        $(this).find(".text1").stop().animate({left:"100%"},200);
        $(this).find(".text2").stop().animate({left:"100%"},200);  
    });

});





