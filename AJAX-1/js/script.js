$(document).ready(function(){
    $('#get-data').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {

            let imię = $('<p></p>').text(`Imię: ${data.imie}`);
            let nazwisko = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
            let zawód = $('<p></p>').text(`Zawód: ${data.zawod}`);
            let firma = $('<p></p>').text(`Firma: ${data.firma}`);

            $('#dane-programisty').append(imię);
            $('#dane-programisty').append(nazwisko);
            $('#dane-programisty').append(zawód);
            $('#dane-programisty').append(firma);         
        })
    })        
})