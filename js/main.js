$(document).ready(function(){
    $('.header').height($(window).height());

    /* This code has to be executed after ".header" height is changed */
    var h = window.location.hash;
    if (h) {
        setTimeout(()=>{
            console.log("BIM", h, $(h).offset().top)
            $('html, body').stop().animate({
                scrollTop : $(h).offset().top
            }, 1000);
        },1000);
    }

    /* Scroll functionality based on the offset of each #elementsection */
    $(".navbar a.nav-link").click(function(){
        if($(this).data('value')) {
            $("body,html").animate({
                scrollTop: $("#" + $(this).data('value')).offset().top
            },1000)
        }
    })

    /* for the image gallery */
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    /* to have a smooth fade in of the bordeaux overlay over image */
    $(".zoom").hover(function(){
        $(this).addClass('transition');
    }, function(){
        $(this).removeClass('transition');
    });

    /* toggle oh-logo once it is hovered over */
    $(".oh").hover(
        /*function() {$(this).attr("src","/images/logo/logo_inverted.svg");},
        function() {$(this).attr("src","/images/logo/logo.svg");*/
        function(){
        $(this).addClass('transition');
    }, function(){
        $(this).removeClass('transition');
    });

    /* toggle collapsed menuBar icon once it is hovered over */
    $(".myCollapsedMenuBarIcon").hover(
        function() {$(this).attr("src","/images/logo/menuBar_inverted.svg");},
        function() {$(this).attr("src","/images/logo/menuBar.svg");
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

/* filter for image gallery on index page */
$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
        selectedClass = $(this).attr("data-rel");
        $("#maingalerie").fadeTo(100, 0.1);
        $("#maingalerie div").not("."+selectedClass).fadeOut().removeClass('animation');
        setTimeout(function() {
        $("."+selectedClass).fadeIn().addClass('animation');
        $("#maingalerie").fadeTo(300, 1);
    }, 300);
    });
});

/*
function formSubmitted() {
    $("form").html("Vielen Dank für Ihre Nachricht.");
}
*/
/* headings: a word with soft hyphens (&shy;) is only hyphenated when it is too wide
   for a whole line; otherwise it moves to the next line in one piece */
function fitSoftHyphens() {
    $('.shy-word').each(function() {
        var h = $(this).closest('h1,h2,h3,h4,h5,h6')[0];
        if (!h.getClientRects().length) return;
        var s = getComputedStyle(h);
        var avail = h.clientWidth - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight);
        var word = this.getAttribute('data-word');
        this.textContent = word.replace(/­/g, '');
        this.style.whiteSpace = 'nowrap';
        if (this.getBoundingClientRect().width > avail) {
            this.textContent = word;
            this.style.whiteSpace = '';
        }
    });
}
$(function() {
    /* wrap each heading word containing a soft hyphen in a span, once */
    $('h1,h2,h3,h4,h5,h6').contents().filter(function() {
        return this.nodeType === 3 && this.data.indexOf('­') >= 0;
    }).each(function() {
        var frag = document.createDocumentFragment();
        this.data.split(/(\S*­\S*)/).forEach(function(part, i) {
            if (i % 2) {
                var span = document.createElement('span');
                span.className = 'shy-word';
                span.setAttribute('data-word', part);
                span.textContent = part;
                frag.appendChild(span);
            } else if (part) {
                frag.appendChild(document.createTextNode(part));
            }
        });
        this.parentNode.replaceChild(frag, this);
    });
    fitSoftHyphens();
    /* widths change once the web fonts have loaded */
    if (document.fonts) document.fonts.ready.then(fitSoftHyphens);
    $(window).on('load resize', fitSoftHyphens);
});
