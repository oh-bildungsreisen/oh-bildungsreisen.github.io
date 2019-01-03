$(document).ready(function(){
    $('.header').height($(window).height());

    /* Scroll functionality */
    $(".navbar a").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
    })

    /* for the image gallery */
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

/* go back to main page from single reise page */
function goTo(url){
    window.location.href = url;
}

/* hide menu bar once an entry is clicked */
$(function() {
    var menuVisible = false;
    $('#myMenuBtn').click(function() {
        if (menuVisible) {
            $('#myMenu').css({'display':'none'});
            menuVisible = false;
            return;
        }
        $('#myMenu').css({'display':'block'});
        menuVisible = true;
    });
    $('#myMenu').click(function() {
        $(this).css({'display':'none'});
        menuVisible = false;
    });
});

/*
function formSubmitted() {
    $("form").html("Vielen Dank für Ihre Nachricht.");
}
*/