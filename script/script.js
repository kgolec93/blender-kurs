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
    
    let courseList = [
        {value: "Podstawowy", name: "Wizualizacje architektoniczne - kurs podstawowy (499zł)"},
        {value: "Rozszerzony", name: "Wizualizacje architektoniczne - kurs podstawowy + rozszerzony (799zł)"},
    ]

    for (i = 0; i < courseList.length; i++) {
        $("#sign-course").append(
            `<option value="${courseList[i].value}">${courseList[i].name}</option>`
        );
    }

    let termsPodst = [
        //// terminy kursu podstawowego
        "1-2.03.2019",
        "7-8.03.2019",
        "1-2.04.2019"
    ];
    let termsRozsz = [
        //// terminy kursu rozszerzonego
        "7-8.04.2019",
        "21-22.04.2019"
    ];

    let terms = termsPodst
  
    function termListCreate() {
        document.getElementById("sign-terms").innerHTML = "";  
        for (i = 0; i < terms.length; i++) {
            $("#sign-terms").append(
                `<option value="${terms[i]}">${terms[i]}</option>`
            );
        }
    };
    termListCreate();

    document.getElementById("sign-course").addEventListener("change", function() {
        let chosenCourse = document.getElementById("sign-course").value
        if (chosenCourse == "Rozszerzony"){
            console.log("Kurs Rozszerzony!");
            terms = termsRozsz;
            termListCreate();
        }
        else if (chosenCourse == "Podstawowy"){
            console.log("Kurs Podstawowy!");
            terms = termsPodst;
            termListCreate();
        }
    })

});