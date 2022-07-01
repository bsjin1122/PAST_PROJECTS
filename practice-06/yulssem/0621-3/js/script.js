$(document).ready(function(){
    // $("ul.gnb>li").hover(function(){
    //     $(this).find("ul.sub").stop().slideDown();
    // }, function(){
    //     $(this).find("ul.sub").stop().slideUp();
    // });

    $("ul.gnb>li").hover(function(){
        //$(this).find("ul.sub").stop().slideDown();
        $(this).find("ul.sub").stop().show();
    }, function(){
        $(this).find("ul.sub").stop().hide();
    });

});//ready end