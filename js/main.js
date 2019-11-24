$(document).ready(function () {

    var slideNum = 1;
    var slideTime;
    slideCount = $(".slider .slide").length;

    var animSlide = function(arrow){
        clearTimeout(slideTime);

        if(arrow == "next"){
            if(slideNum == slideCount) { slideNum=1; }
            else{slideNum++}
            translateWidth = -$('.slider-container').width() * (slideNum - 1);
            $('.slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        }
        else if(arrow == "prew")
        {
            if(slideNum == 1) { slideNum=slideCount; }
            else{slideNum-=1}
            translateWidth = -$('.slider-container').width() * (slideNum - 1);
            $('.slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        }else{
            slideNum = arrow;
            translateWidth = -$('.slider-container').width() * (slideNum -1);
            $('.slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        }

        $(".ctrl-select.active").removeClass("active");
        $('.ctrl-select').eq(slideNum - 1).addClass('active');

        $(".slide.active").removeClass("active");
        $('.slide').eq(slideNum - 1).addClass('active');
    }

    var adderSpan = '';
    $('.slide').each(function(index) {
        adderSpan += '<span class = "ctrl-select">' + index + '</span>';
    });
    $('<div class ="radios">' + adderSpan +'</div>').appendTo('.slider-container');
    $(".slide:first").addClass("active");
    $(".ctrl-select:first").addClass("active");
    $('.ctrl-select').click(function(){
        var goToNum = parseFloat($(this).text());
        animSlide(goToNum + 1);
    });
    var pause = false;
    $('.slider-wrap').hover(
        function(){clearTimeout(slideTime); pause = true;},
        function(){pause = false; rotator();
        });

    var clicking = false;
    var prevX;
    $('.slide').mousedown(function(e){
        clicking = true;
        prevX = e.clientX;
    });

    $('.slide').mouseup(function() {
        clicking = false;
    });

    $(document).mouseup(function(){
        clicking = false;
    });

    $('.slide').mousemove(function(e){
        if(clicking == true)
        {
            if(e.clientX < prevX) { animSlide("next"); clearTimeout(slideTime); }
            if(e.clientX > prevX) { animSlide("prew"); clearTimeout(slideTime); }
            clicking = false;
        }
    });
    $('.slide').hover().css('cursor', 'pointer');

});


function diplay_hide (blockId)

{
    var par = document.getElementsByClassName('navigation--feed');
    if ($(blockId).css('display') == 'none')
    {
        $(blockId).animate({height: 'show'}, 500);
        par[0].classList.add("active")
    }
    else
    {
        $(blockId).animate({height: 'hide'}, 500);
        par[0].classList.remove("active")
    }}