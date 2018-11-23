'use strict';

// Toujours partir de document pour sélectionner un élément
var divTitle = document.querySelector("#title");
// Va aller récupérer le contenu du titre
console.log(divTitle.firstElementChild.innerHTML);

var titre = document.querySelector("div>h2");
console.log(titre.innerText);

var listTitres = document.querySelectorAll("h2");
console.log(listTitres);

var newH2 = document.querySelector("h2");
console.log(newH2);

for (let h2 of listTitres){
    console.log(h2);
}

// Permet de récupérer les classes
var classTitre = document.getElementsByClassName("divTitre");
console.log(classTitre);
// Permet de récupérer un id
var idTitre = document.getElementById("title");
console.log(idTitre);

var link = document.querySelectorAll("div>img");
console.log(link);

for (let img of link){
    img.setAttribute("src", "img/titi.jpg");
    // ou img.src = "img/titi.jpg"
    // Permet d'ajouter un attribut HTML à notre balise
    img.setAttribute("class", "images");
}

// On veut modifier le contenu du premier titre
titre.innerText = "Mon nouveau titre Le Javascript c'est génial";

// Création d'une div
var div = document.createElement("div");
div.setAttribute("id", "paragraphe");

var content =`
    <p>Super paragraphe</p>
    <p>Super paragraphe</p>
    <p>Super paragraphe</p>
    <p>Super paragraphe</p>
    <p>Super paragraphe</p>
    `;
div.innerHTML = content;
// Pour insérer le nouveau contenu, on doit récupérer l'élément dans lequel on veut le placer
var body = document.querySelector("body");
body.appendChild(div);
// On va insérer nos paragraphes avant la div link
var divLink = document.querySelector("#link");
body.insertBefore(div, divLink);

var lien = document.querySelector('#lien');

for (let ii = 0; ii <= 10; ii++){
    // On créé l'élément que l'on souhaite
    var baliseA = document.createElement("a");
    // On lui ajoute un contenu
    baliseA.textContent = "Lien " + ii;
    // On lui envoi l'attribut href
    baliseA.setAttribute('href', `lien${ii}`);
    // On place à chaque tour de boucle la balise a dans notre
    lien.appendChild(baliseA);
}