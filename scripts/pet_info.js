"use-strict";

const $image = $("img");
const $format = $("#btnFormat");
const $reset = $("#btnReset");
const $fade = $("h1,p");

$format.click (function(){
    $image.addClass("border");
    $fade.addClass("myClass");
});

$reset.click(function(){
     $image.removeClass("border");
    $fade.removeClass("myClass");
    
});

$image.hover(function() {
   $(this).animate({opacity: 0.5} ,2000);
}, function() {
    $(this).animate({opacity: 1.0}, 2000);
});
