'use strict'

// Déclaration d'un tableau

var array = [1, 2, 3];
// Accès à une valeur du tableau
console.log(array);
console.log(array[0]);

// Tableau à deux dimentions
var arrayMultiDimention = [1, 2, 3, ["un", "deux", "trois"]];
// On affiche la valeur "deux" présente dans le deuxième tableau
console.log(arrayMultiDimention[3][1]);

// Tableau associatif

var myArray = {
    1: "Première valeur",
    false: "Deuxième valeur",
    "trois": "Troisième valeur",
    "number": 150,
    "bool": true,
};

// Attention: javascript ne tient pas compte du type de la variable
// il sera préférable d'utiliser une égalité strict à l'aide du triple égal (===)
console.log(myArray);
console.log(myArray["1"]);
console.log(myArray[1]);

if(1 == '1'){
    console.log(true);
} else {
    console.log(false);
}

var monTableau = {
    0 : {
        titre : "Super titre",
        commentaire : "Mon commentaire"
    },
    1 : {
        "titre" : "Super titre 2",
        "commentaire" : "Mon commentaire 2"
    }
};
// On récupère le commentaire du premier tableau
console.log(monTableau[0]["commentaire"]);