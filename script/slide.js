$(function(){
//script/slide.js
//    slideImg();
//    let $interval;
//    function slideImg(){
//        let $interval = setInterval(function(){
//            slide()
//        }, 3000);
//    }
//    function slide(){
//        $('.slide').animate({
//            left : "-100%"
//            
//        },1000, function(){
//            $(this).css({
//                left : 0
//            });
//            $(this).append(
//                $(".slide").children("img").eq(0));
//        });
//    }

  slideImg();
    
    
    function slideImg(){
        let $interval = setInterval(function(){
            slide()
        },3000);
    }
    
    function slide(){
        $(".slide").animate({left:"-100%"}, 1000, function(){
            $(this).css({left:0});
            $(this).append($(".slide img").eq(0));
        });
    }

});