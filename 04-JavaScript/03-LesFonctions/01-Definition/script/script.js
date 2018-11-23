// Déclaration d'une fonction

function deuxParDeux(n) {
    return n * 2;
}

console.log(deuxParDeux(2));

var troisParTrois = function(n) {
    return console.log(n * 3);
}

troisParTrois(3);

// Fonction annonyme immédiatement invoquée

(function (param){
    console.log(param);
})("YATA")

// Définition de paramètres par défault
function parametreDefault(param1, param2, param3 =10) {
    return param1 + param2 + param3;
}

console.log(parametreDefault(5,5));
console.log(parametreDefault(5,5,5));
// Si on ne veut pas définir le 1er paramètre, il faut l'indiquer en undefined
console.log(parametreDefault(undefined,5,null));
