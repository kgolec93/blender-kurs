$(function() {

    let imgList = [
        "img01.jpg",
        "img02.jpg",
        "img03.jpg",
        "img04.jpg",
        "img05.jpg"
    ];
    
    let i = 0;

    var addBG = function(){
        $("#gal-container").css('background-image' , `url("gal/${imgList[i]}")`);
    }

    addBG();

    function nextImg() {
        if (i == imgList.length - 1) {
            i = 0;
        }
        else {
            i++;
        }
        $("#gal-container").css('background-image' , `url("gal/${imgList[i]}")`);
        console.log(i);
    }

    function prevImg() {
        if (i == 0) {
            i = imgList.length - 1;
        }
        else {
            i--;
        }
        $("#gal-container").css('background-image' , `url("gal/${imgList[i]}")`);
        console.log(i);
    }

var nextBtn = document.getElementById("arr-right");
nextBtn.addEventListener("click", nextImg);

var prevBtn = document.getElementById("arr-left");
prevBtn.addEventListener("click", prevImg);

});

