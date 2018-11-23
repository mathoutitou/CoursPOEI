'use strict';

// Les closures
function init() {
    let local = "Variable locale";
    var afficherLocal = function(){
        console.log(local);
    };
    afficherLocal();
}

init();
// Cette déclaration ne fonctionnera pas,
// seule la fonction init permet de retourner afficherLocal
// afficherLocal();

// Rappel de la porté de la variable let
let v = 1;
{
    let v = 2;
    console.log("Intérieur du block : " + v);
}
console.log("Extérieur du block : " + v);

    // Fonction flêchée
    // Permet de garder le contexte dans lequel la fonction est exécutée
    // Ecriture :
/*
() => {

}
*/

// Les CallBacks
// Ce sont des fonctions qui sont passé en paramètre d'autre fonction
// Exemple :
var arrayString = ['un', 'deux', 'trois'];
// La boucle foreach prend en paramètre une callback
arrayString.forEach(function(element) {
    console.log(element);
});

// Ecriture sous forme de fonction cachée
arrayString.forEach(element => {
    console.log("Avec la fonction flêchée " + element);
});