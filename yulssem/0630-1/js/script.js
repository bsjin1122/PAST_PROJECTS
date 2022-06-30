$(document).ready(function(){
    // $("header nav ul.gnb>li").hover(function(){
    //     $(this).find("ul.sub").stop().slideDown();
    // }, function() {
    //     $(this).find("ul.sub").stop().slideUp();
    // });

    $("header nav ul.gnb>li").hover(()=>{
        $("ul.sub").stop().slideDown();
    }, ()=> {
        $("ul.sub").stop().slideUp();
    });

});//ready end