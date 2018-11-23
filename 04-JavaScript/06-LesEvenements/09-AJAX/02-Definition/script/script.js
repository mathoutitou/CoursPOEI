// 'use strict';
//
// // Appel de l'objet qui nous servira pour la requête AJAX
// var req = new XMLHttpRequest();
//
// // On appelle l'événement open avec la méthode HTTP GET et la destination
// req.open('GET','file:///home/stagiaire/Documents/poe2018/04-JavaScript/06-LesEvenements/09-AJAX/02-Definition/data.json', false);
// req.send(null);
//
// console.log(req);
//
// console.log(req.responseText);
// var result = JSON.parse(req.responseText);
//
//
// console.log(result.user.name);


// Ajax avec un API externe (OpenWatherMap)
var req = new XMLHttpRequest();
req.open('GET','api.openweathermap.org/data/2.5/weather?q=Nantes&APPID=8660', true);
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req.send(null);
console.log(req);

setTimeout(function () {
    if(req.status === 200) {
        console.log("Réponse reçue : ", req.status , req.responseText);
        var result = JSON.parse(req.responseText);
        console.log(result);
        
    } else {
        console.log("Status de la réponse : ", req.status, req.statusText);
    }
}, 1000);


////
