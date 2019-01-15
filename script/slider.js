$(function() {

    //SLIDER BANNER IMAGES
    let sliderList = [
    "01.png", 
    "02.jpg", 
    "03.png",
    "04.png"
    ]

    let i = 0

    let faderDelay = 1000; //fading effect duration
    let faderTime = 3000; //fading time interval
    $(".image-bg-container").css("background-image", `url("img/${sliderList[i]}")`);
    //Image slider
    function slideOn() {
        $(".overlay-bk").animate({'opacity': 1}, faderDelay);
        setTimeout(slide, faderDelay);
    }

    //Trigger auto-slider
    $(".overlay-bk").css("opacity", "0");
    setTimeout(slideOn, faderTime)

    function slide() {
        if (i === sliderList.length-1) {
            i = 0
        }
        else {
            i++
        }
        
        $(".photo-slider").css("background-image", `url("img/${sliderList[i]}")`);
        $(".overlay-bk").animate({'opacity': 0}, faderDelay);
        setTimeout(slideOn, faderTime);  
    }


});
