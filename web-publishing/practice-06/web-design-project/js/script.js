//버튼을 클릭하면 전체 메뉴를 보이게 하세요
$(".tit .btn").click(function(e){
    e.preventDefault();
    // $("#cont_nav").css("display","block");
    // $("#cont_nav").show();
    // $("#cont_nav").stop().fadeIn();
    // $("#cont_nav").stop().slideDown();
    // $("#cont_nav").toggle();
    // $("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(200);
    // $(".tit .btn").addClass("on");
    $(this).toggleClass("on");

});

// 배너
// html 마크업 세팅 -> css 연동 -> jquery 연동 -> 제이쿼리 호출
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});
// $(".ban").slick({
//     infinite:true,
//     slidesToShow: 3,
//     slidesToScroll: 1, //몇개씩 옮길건지
//     // arrows:true 디폴트값
//     autoplay:true,
//     autoplaySpeed: 3000,
//     dots: true
// });

// 탭 메뉴
var $tab_list = $(".tab_menu");
$tab_list.find("ul ul").hide();
$tab_list.find("li.active> ul").show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

//갤러리
$(".gallery_img").slick({
    arrows:false,
    fade: true,
    pauseOnHover: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});
$(".play").click(function(){
    $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function(){
    $(".gallery_img").slick("slickPause");
});
$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev");
});
$(".next").click(function(){
    $(".gallery_img").slick("slickNext");
});

// 레이어 팝업
$(".layer").click(function(e){
    e.preventDefault();
    // $("#layer").css("display", "block");
    // $("#layer").show();
    // $("#layer").fadeIn();
    $("#layer").slideDown();
    
});
$("#layer .close").click(function(e){
    e.preventDefault();
    // $("#layer").css("display", "block");
    // $("#layer").show();
    // $("#layer").fadeIn();
    $("#layer").slideUp();

});

// 윈도우 팝업
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명","팝업이름", "옵션설정");
    //옵션: left, top, width, height, status, toolbar, location,menubar, scrollbars, fullscreen
    window.open("popup.html","popup01","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
});

// 라이트박스 (버전 문제로 작동 안됨)
$(".lightgallery").lightgallery({
    thembnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
});

