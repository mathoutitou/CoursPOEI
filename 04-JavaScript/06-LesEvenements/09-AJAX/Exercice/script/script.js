function buttonClickGET() {
    var queryL = document.getElementById("queryLoc").value;

    var url = "https://api.openweathermap.org/data/2.5/weather?q="+queryL+"&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";

    var req = new XMLHttpRequest();
    req.open('GET',url, true);
    req.send();
    req.onload = function () {
        if(req.status === 200) {
            console.log("Réponse reçue : ", req.status , req.responseText);
            var result = JSON.parse(req.responseText);
            console.log(result);
            var element = document.getElementById("zone_meteo");
            element.innerHTML = result.name + "<br>" + result.main.temp + "°C <br>" + images(result.weather[0].main) + "<br>" + toFrench(result.weather[0].main);

        } else {
            console.log("Status de la réponse : ", req.status, req.statusText);
        }};

    };

var toto = document.querySelector("#queryLoc");
console.log("lalala");

toto.addEventListener("keydown", function (event) {
    if (event.key === 'Enter'){
        buttonClickGET()

    }
});

// TRADUCTION TERMES EN FRANCAIS
function toFrench(word) {
    var trad;

    switch (word) {
        case "Drizzle":
            trad = "Bruine";
            break;

        case "Mist":
            trad = "Brume";
            break;

        case "Fog":
            trad = "Brouillard";
            break;

        case "Clear":
            trad = "Ciel dégagé";
            break;

        case "Clouds":
            trad = "Couvert";
            break;

        case "Rain":
            trad = "Pluie";
            break;

        case "Haze":
            trad = "Brume de pollution";

        default:
            break;
    }

    return trad;
}


function images(word) {
    var pic;

    switch (word) {
        case "Drizzle":
            pic = '<img src= "img/drizzle.svg">';
            break;

        case "Mist":
            pic = '<img src= "img/mist.svg">';
            break;

        case "Fog":
            pic = '<img src= "img/fog.svg">';
            break;

        case "Clear":
            pic = '<img src= "img/clear.svg">';
            break;

        case "Clouds":
            pic = '<img src= "img/clouds.svg">';
            break;

        case "Rain":
            pic = '<img src= "img/rain.svg">';
            break;

        case "Haze":
            pic = '<img src= "img/haze.svg">';

        default:
            break;
    }

    return pic;
}




