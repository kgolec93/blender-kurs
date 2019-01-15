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
                Nasze kursy nauczą Cię wykonywać profesjonalne wizualizacje architektoniczne za pomocą programu Blender 2.8, a także tworzyć wizualizacje typu real-time na całkowice nowym silniku Eevee, a także dowiesz się jak prawidłowo dokonać obróbki statycznych renderów za pomocą Adobe Photoshop.
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
                Kurs poza teorią oparty jest na dużej ilości praktycznych ćwiczeń oraz pracy nad swoim własnym projektem pod czujnym okiem prowadzącego.
                <br>
                <br>
                Po zakończeniu kursu otrzymasz certyfikat, a także będziesz posiadać gotowy projekt do swojego portfolio`,
            detProgram : `
            Podczas 30 godzin kursu dowiesz się wszystkiego o:
            <ul>
                <li>Obsłudze programu Blender w wesji 2.8</li>
                <li>Podstawach modelowania</li>
                <li>Tworzeniu materiałów</li>
                <li>Ustawianiu sceny</li>
                <li>Importowaniu modeli</li>
                <li>Pracy z modelem architektonicznym</li>
                <li>Renderowaniu</li>
                <li>Postprocessingu w Adobe Photoshop</li>
            </ul>
                Kurs zakończony jest opracowaniem własnego projektu i stworzeniem jego wizualizacji.
            `,
            detForma : "ile godzin itp itd BASIC",
            detCena : "koszt tej całej zabawy BASIC"
        },
        descAdv : {
            detOpis : "opisik hehe hłyt marketingowy ADV",
            detProgram : `
             
            <ul>
                <li>Zaawansowane modelowanie</li>
                <li>Praca z plikami zewnętrznymi</li>
                <li>Obsługa pluginów</li>
                <li>Podstawy animacji</li>
                <li>Zaawansowane techniki pracy z projektem</li>
                <li>Blender Compositor</li>
            </ul>
            `,
            detForma : "ile godzin itp itd ADV",
            detCena : "koszt tej całej zabawy ADV"
        },
        descFull : {
            detOpis : "opisik hehe hłyt marketingowy FULL",
            detProgram : "jakiś przykłądowy program FULL",
            detForma : "ile godzin itp itd FULL",
            detCena : "koszt tej całej zabawy FULL"
        },
        descPS : {
            detOpis : "opisik hehe hłyt marketingowy PS",
            detProgram : "jakiś przykłądowy program PS",
            detForma : "ile godzin itp itd PS",
            detCena : "koszt tej całej zabawy PS"
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


