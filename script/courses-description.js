$(function () {
    let descBtn = $('#course-list > li');
    const descContent = $('#course-desc-content')

 
    var content = {
        descGeneral : `
        <p> 
            Nasze kursy nauczą Cię wykonywać profesjonalne wizualizacje architektoniczne za pomocą programu Blender 2.8, a także tworzyć wizualizacje typu real-time na całkowice nowym silniku Eevee, a także dowiesz się jak prawidłowo dokonać obróbki statycznych renderów za pomocą Adobe Photoshop. 
        </p>
        <br>
        <br>
        Uwaga! Niezbędne jest posiadanie na zajęciach własnego laptopa o minimalnej specyfikacji: 
        <ul>
            <li> Windows Vista / 7 / 8 / 10 lub MacOS 10.6 </li>
            <li>64-bitowy procesor dwurdzeniowy</li>
            <li>8GB pamięci RAM</li>
            <li>Karta graficzna z 2GB pamięci VRAM</li>
            <li>Myszka</li>
        </ul>
            `,
        descBasic : `
        <p id="detail-container"> 
            W kursie podstawowym zdobędziesz wszystkie najważniejsze umiejętności, które w szybki i sprawny sposób pozwolą Ci pracować nad Twoimi projektami graficznymi. Nauka nie będzie podręcznikowa, lecz większość czasu odbywać się będzie poprzez praktykę. Nauczysz się tworzyć wizualizacje od zera, od stworzenia modelu budynku, bądź zaimportowania go, aż po finalny render i podstawową obróbkę graficzną.
            <br>
            
        </p>`,
        descAdv : `W rozszerzonym kursie Blendera poznasz znacznie bardziej zaawansowane techniki modelowania oraz pracy z projektem 3d`,
        descFull : `Opis pełnego kursu`,
        descPS : `Opis kursu postprocessingu`
    };

    // const basicDetails = {

    // }


    let obj = {
        descGeneral : {
            detOpis : `
                Nasze kursy nauczą Cię wykonywać profesjonalne wizualizacje architektoniczne za pomocą programu Blender 2.8, tworzyć wizualizacje typu real-time na całkowice nowym silniku Eevee, a także dowiesz się jak prawidłowo dokonać obróbki statycznych renderów za pomocą Adobe Photoshop.
            <br>
            <br>
            Uwaga! Niezbędne jest posiadanie na zajęciach własnego laptopa o minimalnej specyfikacji: 
            <ul>
                <li> Windows Vista / 7 / 8 / 10 lub MacOS 10.6 </li>
                <li>64-bitowy procesor dwurdzeniowy</li>
                <li>8GB pamięci RAM</li>
                <li>Karta graficzna z 2GB pamięci VRAM</li>
                <li>Myszka</li>
            </ul>
            Szczegóły kursów poznasz klikając w ich nazwy po lewej stronie.
                `,
            detProgram : "jakiś przykłądowy program",
            detForma : "ile godzin itp itd",
            detCena : "koszt tej całej zabawy"
        },
        descBasic : {
            detOpis : `
                W kursie podstawowym zdobędziesz wszystkie najważniejsze umiejętności, które w szybki i sprawny sposób pozwolą Ci pracować nad Twoimi projektami graficznymi. Nauka nie będzie podręcznikowa, lecz większość czasu odbywać się będzie poprzez praktykę. Nauczysz się tworzyć wizualizacje od zera, od stworzenia modelu budynku, bądź zaimportowania go, aż po finalny render i podstawową obróbkę graficzną.
                <br>
                Kurs poza teorią oparty jest na pracy nad sceną wnętrza, od załadowania plików z podkładami, poprzez stworzenie modelu, teksturowanie, aż po wizualizację.
                <br>
                <br>
                Po zakończeniu kursu otrzymasz certyfikat, a także będziesz posiadać gotowy projekt do swojego portfolio`,
            detProgram : `
            Podczas 16 godzin kursu dowiesz się wszystkiego o:
            <ul>
                <li>Obsłudze programu Blender w wesji 2.8</li>
                <li>Podstawach modelowania</li>
                <li>Tworzeniu materiałów</li>
                <li>Ustawianiu sceny</li>
                <li>Importowaniu bloków 3d</li>
                <li>Renderowaniu na silniku Cycles</li>
            </ul>
                Kurs zakończony jest stworzeniem sceny wnętrza, wraz z jego całym wyposażeniem oraz jego fotorealistycznych wizualizacji.
            `,
            detForma : `Kurs trwa łącznie 16 godzin, przez jeden weekend, po 8 godzin zegarowych każdego dnia, z kilkoma krótkimi przerwami oraz jedną przerwą obiadową. Zajęcia odbywają się w sali konferencyjnej hotelu XXXXXX.<br><br>
            Najbliższe terminy kursu podstawowego:<br>
            <ul>
                <li>2-3.03.2019</li>
                <li>16-17.03.2019</li>
                <li>30-31.03.2019</li>
            </ul>
            <br>
            Koszt podstawowego kursu wynosi 499zł za 16 godzin zegarowych zajęć
            `,
            // detCena : "Koszt podstawowego kursu wynosi 499zł za 16 godzin zegarowych zajęć"
        },
        descFull : {
            detOpis : "opisik hehe hłyt marketingowy FULL",
            detProgram : "jakiś przykłądowy program FULL",
            detForma : "ile godzin itp itd FULL",
            detCena : "koszt tej całej zabawy FULL"
        },
        descAdv : {
            detOpis : "opisik hehe hłyt marketingowy ADV",
            detProgram : `
            <ul>
                <li>Import z Archicada / Revita / Sketchupa</li>
                <li>Praca z blokami zewnętrznymi</li>
                <li>Tworzenie otoczenia budynku</li>
                <li>Zaawansowane techniki modelowania</li>
                <li>Ustawianie sceny zewnętrznej</li>
                <li>Blender Compositor</li>
                <li>Podstawy postprocessingu w PS</li>
            </ul>
            `,
            detForma : `Kurs trwa łącznie 32 godziny, przez dwa weekendy, po 8 godzin zegarowych każdego dnia, z kilkoma krótkimi przerwami oraz jedną przerwą obiadową. W zakres kursu rozszerzonego wchodzą również zajęcivgZajęcia odbywają się w sali konferencyjnej hotelu XXXXXX.<br><br>
            Najbliższe terminy kursu rozszerzonego:<br>
            <ul>
                <li>2-3.03, 9-10.03.2019</li>
                <li>16-17.03, 23-24.03.2019</li>
                <li>30-31.03, 6-7.04.2019</li>
            </ul>
            <br>
            Koszt rozszerzonego kursu wynosi 899zł za 32 godziny zegarowe zajęć
            `
        }
    }

    document.getElementById('descGeneral').classList.add("list-active");
    // descContent.html(content.descGeneral);

    let activeId = 'descGeneral';
    descContent.html(obj[activeId].detOpis);


    descBtn.on("click", function() {
        $('*').removeClass('list-active');
        this.className += ` list-active`;
        activeId = this.id;
        console.log(activeId);
        descContent.html(obj[activeId].detOpis);
        $('*').removeClass('desc-active');
        $("#detOpis").addClass('desc-active');
        spr();
        

    })

    
    const detailBtn = $('.course-menu > li');

    detailBtn.on("click", function() {
        $('*').removeClass('desc-active');
        this.className += ` desc-active`;
        let id = this.id;
        console.log(id);
        descContent.html(obj[activeId][id]);
    })


    function spr() {
        if(document.getElementById('descGeneral').classList.contains('list-active') == true) {
            $(".course-menu").css("display", "none");
        }
        else {
            $(".course-menu").css("display", "flex");
        }
    }

    spr();
})


