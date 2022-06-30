$(document).ready(function(){
    $("ul.gnb>li").hover(function(){
        $("ul.sub, .nav_bg").stop().slideDown();
    }, function(){
        $("ul.sub, .nav_bg").stop().slideUp();

    });

});//ready end