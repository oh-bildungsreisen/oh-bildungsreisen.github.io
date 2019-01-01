$(document).ready(function(){
    $('.header').height($(window).height());

    /* Scroll functionality */
    $(".navbar a").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
    })

    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){
        $(this).addClass('transition');
    }, function(){
        $(this).removeClass('transition');
    });
})

function goTo(url){
    window.location.href = url;
}
/*
function formSubmitted() {
    $("form").html("Vielen Dank für Ihre Nachricht.");
}
*/