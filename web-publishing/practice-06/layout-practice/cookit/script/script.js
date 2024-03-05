// 네비게이션
$(".nav > ul > li ").mouseover(function(){
    $(".nav > ul > li ").find(".submenu").stop().slideDown(200); 
});

$(".nav > ul > li ").mouseleave(function(){
    $(".nav > ul > li ").find(".submenu").stop().slideUp(200); 
});

// 이미지 슬라이드(상하)
// var currentIndex = 0; //첫번째 이미지
//currentIndex = 1; 두번째 이미지
//currentIndex = 2; 세번째 이미지
// setInterval(() => {
//     if(currentIndex < 2){
//         currentIndex++;
//     }else{
//         currentIndex = 0;
//     }
//     var slidePosition = (currentIndex % 3 ) * (-389) + "px" 
//     $(".slideList").animate({top: slidePosition},400);
// }, 3000);

// 이미지슬라이드 (좌우)
var currentIndex = 0;

setInterval(() => {
    if(currentIndex < 2){
        currentIndex++;
    }else{
        currentIndex = 0;
    }
    var slidePosition = (currentIndex % 3 ) * (-1000) + "px" 
         $(".slideList").animate({left: slidePosition},400);
}, 3000);

//탭메뉴
var tabBtn = $(".tab-btn > ul > li");
var tabCont = $(".tab-cont > div");

tabCont.hide().eq(0).show();

tabBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();

    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display","none");
    tabCont.eq(index).css("display","block");
});


//f레이어 팝업
$("#content1 .right").click(function(){
    // $(".layer").css("display", "block");
    $(".layer, .layer_bg").show();
});
$(".layer .close").click(function(){
    $(".layer, .layer_bg").hide();
    // $(".layer").css("display", "none");
});
