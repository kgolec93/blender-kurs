$(function() {

    //////////////////////////////////////////
    ///////////// MENU NAV LIST //////////////
    //////////////////////////////////////////

    let j = 0;
    
    let icon = `<img id="svg-icon" src="icons/home.svg">`;

    let menuList = [
        {name: icon, link: "#target-top"},
        /////////// DODAĆ GALERIĘ WIZEK W DZIALE NIŻEJ ///////////
        {name: "DLACZEGO BLENDER?", link: "#target-blender"},
        {name: "KURSY WIZUALIZACJI", link: "#target-kursy"},
        // {name: "DLA FIRM", link: "#target-dlafirm"},
        {name: "ZAPISZ SIĘ ONLINE!", link: "#target-formularz"},
        {name: "O NAS", link: "#target-onas"},
        {name: "KONTAKT", link: "#target-kontakt"}
    ];

    function menuAppend() {
        for (j=0; j<menuList.length; j++) {
            menuList[j].link;
            if(window.location.href.indexOf(menuList[j].link) != -1) {
                $("#main-menu").append(
                `<li class="nav-btn"><a class="link-active" href="${menuList[j].link}"> ${menuList[j].name}</a></li>`
                );
            }
            else {
                $("#main-menu").append(
                    `<li class="nav-btn"><a href="${menuList[j].link}">${menuList[j].name} </a></li>`
                );
            }            
        }
    };
    menuAppend();

    ///////////////////////////////////////////
    //////////// SCROLLING TO POINT ///////////
    ///////////////////////////////////////////

    var scrollTime = 1500;

    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );
    
        if( target.length ) {
            event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, scrollTime);
            }
    });

    //////////////////////////////////////////
    ///////// AVAILABLE TERMS LIST  //////////
    //////////////////////////////////////////

    let terms = [
        //// lista dostępnych terminów
        "1-2.03.2019",
        "7-8.03.2019",
        "1-2.04.2019",
        "7-8.04.2019",
        "21-22.04.2019"
    ];
    function termListCreate() {
        for (i = 0; i < terms.length; i++) {
            $("#sign-terms").append(
                `<option value="${terms[i]}">${terms[i]}</option>`
            );
        }
    };
    termListCreate();

});