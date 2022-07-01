// 탭메뉴
$(document).ready(function(){
    var tabMenu = $(".notice");
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("ul > li.active > ul").show();

    function tabList(e){
       e.preventDefault(); 
       var target = $(this);
       target.next().show().parent("li").addClass("active").siblings("li")
       .removeClass("active").find("ul").hide();
    };
    tabMenu.find("ul > li > a").click(tabList);

    // 팝업
    $(".ad").click(function(){
        // $(".layer").show();
        $(".layer, .layer_bg").css("display", "block");
    });
    $(".close").click(function(){
        // $(".layer").hide();
        $(".layer, .layer_bg").css("display", "none");
    });


});